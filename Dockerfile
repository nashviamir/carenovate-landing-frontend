# syntax=docker/dockerfile:1
# Multi-stage build based on https://payloadcms.com/docs/production/deployment#docker
#
# Targets:
#   runner – the production web server (Next.js standalone output, small image)
#   tools  – full toolchain for Payload CLI tasks: migrations and the content
#            pipeline (content:seed / content:import / content:export)

FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    NPM_CONFIG_UPDATE_NOTIFIER=false

# ── Dependencies ─────────────────────────────────────────────────────────────
FROM base AS deps
COPY package.json package-lock.json .npmrc ./
RUN npm ci

# ── Build ────────────────────────────────────────────────────────────────────
# Pages render on demand, so the build needs no database connection.
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ── CLI tools ────────────────────────────────────────────────────────────────
FROM base AS tools
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN mkdir -p media && chown node:node media
USER node
# Applies pending migrations (prodMigrations), then seeds content that does
# not exist yet. Safe to run on every deploy.
CMD ["npm", "run", "content:seed"]

# ── Production server ────────────────────────────────────────────────────────
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
RUN mkdir -p media && chown node:node media
USER node
EXPOSE 3000
CMD ["node", "server.js"]

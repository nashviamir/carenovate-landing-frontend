# CareHub Landing Page

Marketing site for **CareHub™ by CareNovate Inc.**, with all content managed in [Payload CMS](https://payloadcms.com/docs) (admin at `/admin`).

- Next.js 16 (App Router) + Payload 3, one app
- Postgres, Tailwind CSS 3, Lucide icons
- Docker Compose for everything: database, migrations, app

## Quick start

### Run it all in Docker

```bash
cp .env.example .env          # set PAYLOAD_SECRET to a long random string
docker compose up -d --build
```

Open http://localhost:3000. Then go to http://localhost:3000/admin and create the first admin user.

On every `up`, compose does three things:

1. Starts `postgres`.
2. Runs `tools` once. It applies pending migrations, then seeds any content that doesn't exist yet from [`content/`](content).
3. Starts `app`, the production server.

### Local development

```bash
cp .env.example .env
docker compose up -d postgres  # database only
npm install
npm run content:seed           # first time only: loads ./content into the dev DB
npm run dev
```

Development uses its own database (`carenovate_dev`). Payload syncs its schema automatically ("push" mode), so no migrations are needed while you work.

## Where content lives

| Admin → | Contains |
| --- | --- |
| Pages | Every page (Home, Features, FAQ, and any you add), built from sections |
| Site → Header / Footer | Logo, navigation, footer columns, disclaimer |
| Site → Site Settings | Contact details (phone, email, address, LinkedIn) |
| Marketing → … | SEO, analytics and redirects (see below) |

Images live in **Media**. Pages and globals keep their version history (Versions tab), so any change can be restored.

### Adding a page

1. **Admin → Pages → Create new.**
2. Enter a **title**. The **URL** fills in from it ("Pricing & Plans" → `/pricing-plans`). Click the lock in the sidebar to set it yourself; `/` creates nested URLs like `solutions/rcfe`.
3. Under **Sections**, click **Add section** and choose from:

   | Section | What it is |
   | --- | --- |
   | Hero | Badge, big heading, intro, bullet points, two buttons, image |
   | Before / After | Draggable before/after image slider with challenges vs. solutions |
   | Portal screenshots | Browser-style tabbed screenshots |
   | Benefits | Grid of benefit cards and an image banner |
   | Book a demo | Steps, highlights and the demo request form (anchor `#book-demo-section`) |
   | Hardware capabilities | Device image, stats, expandable capability list, demo popup |
   | Comparison table | Comparison rows with four columns |
   | FAQ | Questions with expanding answers and a closing box |

   Drag to reorder. Any section can be used on any page, as many times as you like.
4. Fill in the **SEO** tab (or use its auto-generate buttons), then **Publish**.
5. To show it in the menu, add a link under **Site → Header** (and/or Footer).

Unpublished pages are only visible in live preview. The page with URL `home` is the home page (`/`). Some URLs are reserved for the system: `admin`, `api`, `next`, `robots.txt`, `sitemap.xml`, `llms.txt`.

### Drafts and live preview

Edits are **autosaved as drafts**. Visitors only see them after you click **Publish changes**.

Click **Live Preview** at the top of any page or site global to see the site next to the form. It refreshes as you type, with breakpoints for mobile, tablet and desktop. Header, Footer and Site Settings preview on the home page.

How it works: the preview loads `/next/preview?path=…`. That route enables Next.js draft mode for logged-in admin users only, so pages render the latest drafts. If you later open the site in a normal tab of the same browser, a small bar offers **Exit preview**.

Headings and some paragraphs support two inline markers: `==text==` highlights words in brand blue, and `**text**` makes them bold.

Not managed in the CMS: the demo-request form fields and options, and the JSON-LD descriptions in [`src/app/(frontend)/layout.tsx`](src/app/(frontend)/layout.tsx).

## SEO, AEO, GEO & analytics (for marketers)

Everything below is editable in the admin with no code changes. Each field has a short explanation under it.

### On each page: the **SEO** tab

- **Title and description**, with length indicators, a Google-style preview and *auto-generate* buttons (they fill in from the page's heading and intro).
- **Social image**. Falls back to the site default.
- **Use this title exactly as written**: skips the site title template (e.g. “ | CareHub”).
- **Keywords.**
- **Social sharing**: a separate title/description for Facebook, LinkedIn and X.
- **Indexing & sitemap**:
  - noindex and nofollow.
  - A canonical URL.
  - Leave out of the sitemap, sitemap priority, and change frequency.
- **Advanced**: custom meta tags, and extra structured data (JSON-LD) for that page.
- **FAQ sections**: *Publish questions as FAQ structured data* (on by default). This marks the Q&As up as schema.org `FAQPage`, so Google and AI answer engines can quote them directly (AEO).

### Marketing → **SEO Settings** (whole site)

| Tab | What it controls |
| --- | --- |
| Defaults | Site name, title template, default title/description/keywords, default share image, X card and handle, favicon, Apple touch icon, mobile theme colour |
| Search engines | Verification codes for Google Search Console, Bing, Yandex and Pinterest; how much of the site may be previewed in results; custom meta tags for every page |
| robots.txt & AI crawlers | One choice for AI crawlers (allow all / block training only / block all), custom `robots.txt` rules, extra raw lines |
| AI answers (llms.txt) | Publishes [`/llms.txt`](https://llmstxt.org), a clean summary for ChatGPT, Claude, Perplexity and others (GEO). It's generated from your pages and FAQ unless you write your own |
| Organization & schema | The company's structured-data profile: type, legal name, description, logo, founding date, address, profiles elsewhere (`sameAs`), and extra JSON-LD (products, software…) |

### Marketing → **Analytics & Scripts**

Google Tag Manager and GA4 IDs, plus any other script (Meta Pixel, LinkedIn Insight, Clarity, Hotjar, chat widgets) with a choice of when it loads. Scripts never run inside live preview.

### Marketing → **Redirects**

Send old or broken URLs to a new place, permanently (301) or temporarily (302). Matching ignores letter case and trailing slashes. Redirects only apply to paths that aren't real pages. Example: `/contact` → `/#book-demo-section` fixes the hero button's current 404.

### Generated automatically

| URL / output | Built from |
| --- | --- |
| `<head>` tags | Title, description, canonical, robots, Open Graph, X card, verification, icons, custom tags |
| Structured data | Organization + WebSite on every page; WebPage, breadcrumbs, FAQPage and per-page extras on each page |
| `/sitemap.xml` | Every indexable page, with its real last-modified date, priority and change frequency |
| `/robots.txt` | The rules and AI policy above, plus the sitemap link |
| `/llms.txt` | Pages, FAQ, organization and contact details (or your custom text) |

### Per-environment switches (env vars, not CMS)

These are deliberately kept out of the CMS, so a content import can never switch them on in production:

- `NOINDEX=true` hides the whole site from search engines (meta robots + `robots.txt` + empty sitemap). Use it on staging servers.
- `DISABLE_ANALYTICS=true` stops all analytics and marketing scripts. Use it locally, so test visits don't pollute your data.

## Content pipeline (dev ⇄ production)

Content moves between environments as a **content bundle** in [`content/`](content), committed to git:

```
content/collections/pages.json  pages (and redirects.json)
content/globals/<global>.json   header, footer, settings
content/media.json              media metadata (alt text)
content/media/<file>            image files
```

Images are referenced by filename, never by database ID, so a bundle can be imported into any database. The bundle is also the seed for new environments.

| Command | What it does |
| --- | --- |
| `npm run content:export` | Database → `content/` (published content only, not drafts) |
| `npm run content:import -- --dry-run` | Shows what would change. Writes nothing. |
| `npm run content:import` | `content/` → database |
| `npm run content:import -- --only pages,header` | Imports only these (globals, `pages`, `redirects`) and the images they use |
| `npm run content:import -- --except tracking,seo-settings` | Imports everything except these, e.g. to keep production's own analytics/SEO settings |
| `npm run content:seed` | Imports only what doesn't exist yet (used on deploy) |

Import is safe to run against an environment that has its own edits:

- Globals and pages in the bundle **replace and publish over** the target's version. Pages are matched by URL. The previous version stays in its history, so you can restore it from the Versions tab.
- Pages that exist only in the target are kept, and unpublished pages are never exported.
- Images are matched by filename. Missing images are added and changed ones are replaced in place. Images that exist only in the target are never deleted.
- All global updates are applied in **one transaction**: if anything is invalid, nothing changes.
- Redirects are matched by their *from* path. New ones are added and changed ones updated; redirects that exist only in the target are kept.
- Users are never exported or imported.

### Push dev content to production

```bash
# locally
npm run content:export
git diff content/            # review
git commit -am "content: …" && git push

# on the server
git pull
docker compose run --rm tools npm run content:import -- --dry-run
docker compose run --rm tools npm run content:import
```

`content/` is mounted into the `tools` container, so a content-only change needs no rebuild. Changes show up immediately because pages render on each request.

### Pull production content back to dev

```bash
# on the server (writes ./content; on Linux it must be writable by uid 1000)
docker compose run --rm tools npm run content:export
# copy ./content to your machine (git, scp, …), then locally:
npm run content:import
```

## Changing the schema (fields, globals, collections)

1. Edit the config in `src/` (`globals/`, `collections/`, `fields/`). The dev DB updates automatically.
2. Run `npm run generate:types` and update the components.
3. Create a migration: `npm run payload migrate:create <name>`. Review it.
4. If the change affects existing content, update the bundle with `npm run content:export`.
5. Commit and deploy (`docker compose up -d --build`). Production applies pending migrations on startup.

Don't run `payload migrate` against the dev database: it uses push mode, and Payload warns against mixing the two.

## Deploying to a server

```bash
git clone … && cd carenovate-landing-frontend
cp .env.example .env
# set: PAYLOAD_SECRET (long random), POSTGRES_PASSWORD, SITE_URL=https://your-domain
docker compose up -d --build
```

- Put a reverse proxy with HTTPS (Caddy, nginx, Traefik) in front of port `APP_PORT` (default 3000).
- Set `DISABLE_ANALYTICS=false` in production's `.env`. On a staging server, also set `NOINDEX=true`.
- Create the admin user at `/admin` right after the first deploy. Until a user exists, anyone who reaches `/admin` can create one.
- Locked out or forgot the login? See [Admin accounts](#admin-accounts).
- Postgres is only published on `127.0.0.1`.
- Back up both volumes: `pgdata` (e.g. `docker compose exec postgres pg_dump -U postgres carenovate`) and `media` (uploaded files).
- Update: `git pull && docker compose up -d --build`.

## Admin accounts

If nobody can log in, manage accounts from the command line:

```bash
# list existing admin emails
docker compose run --rm tools npm run admin -- list

# reset a password (also unlocks the account), or create the admin if it doesn't exist;
# a strong password is generated and printed
docker compose run --rm tools npm run admin -- set --email you@example.com

# or choose the password yourself
docker compose run --rm tools npm run admin -- set --email you@example.com --password 'your-new-password'
```

For local development, drop `docker compose run --rm tools` (e.g. `npm run admin -- list`).

## Sharing one database later

If dev and production point at the same database, the content pipeline isn't needed for that database. Two things to change first:

- **Media files** are on each server's disk. Move them to shared storage, e.g. [`@payloadcms/storage-s3`](https://payloadcms.com/docs/upload/storage-adapters).
- **Push mode** must not run against a shared database. Disable it (`push: false` in [`src/payload.config.ts`](src/payload.config.ts)) and use migrations only.

## Project layout

```
src/
  app/(frontend)/     renders any page by URL, via Payload's Local API
  app/(payload)/      Payload admin + REST/GraphQL API (generated, don't edit)
  collections/        Pages, Media, Redirects, Users
  blocks/             the sections pages are built from
  globals/            site and marketing (SEO, analytics) settings
  lib/seo.ts          metadata + structured data built from the SEO settings
  fields/             shared field helpers
  components/         site components
  migrations/         Postgres migrations (generated)
  scripts/content.ts  the content pipeline
  payload.config.ts
content/              content bundle (seed + dev → prod transfers)
Dockerfile            targets: runner (web server), tools (CLI/migrations)
compose.yaml
```

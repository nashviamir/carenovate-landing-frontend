import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_redirects_type" AS ENUM('permanent', 'temporary');
  CREATE TYPE "public"."enum_home_page_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__home_page_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_features_page_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__features_page_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_faq_page_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__faq_page_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_seo_settings_defaults_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_seo_settings_search_robots_max_image_preview" AS ENUM('large', 'standard', 'none');
  CREATE TYPE "public"."enum_seo_settings_crawlers_ai_policy" AS ENUM('allow', 'block-training', 'block-all');
  CREATE TYPE "public"."enum_seo_settings_organization_type" AS ENUM('Organization', 'Corporation', 'MedicalOrganization', 'LocalBusiness');
  CREATE TYPE "public"."enum_seo_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__seo_settings_v_version_defaults_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum__seo_settings_v_version_search_robots_max_image_preview" AS ENUM('large', 'standard', 'none');
  CREATE TYPE "public"."enum__seo_settings_v_version_crawlers_ai_policy" AS ENUM('allow', 'block-training', 'block-all');
  CREATE TYPE "public"."enum__seo_settings_v_version_organization_type" AS ENUM('Organization', 'Corporation', 'MedicalOrganization', 'LocalBusiness');
  CREATE TYPE "public"."enum__seo_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_tracking_scripts_strategy" AS ENUM('afterInteractive', 'lazyOnload', 'beforeInteractive');
  CREATE TYPE "public"."enum_tracking_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__tracking_v_version_scripts_strategy" AS ENUM('afterInteractive', 'lazyOnload', 'beforeInteractive');
  CREATE TYPE "public"."enum__tracking_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to" varchar NOT NULL,
  	"type" "enum_redirects_type" DEFAULT 'permanent' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "home_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_home_page_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "features_page_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "features_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_features_page_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "faq_page_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "faq_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_faq_page_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_faq_page_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "seo_settings_search_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "seo_settings_crawlers_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"user_agent" varchar DEFAULT '*'
  );
  
  CREATE TABLE "seo_settings_organization_same_as" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "seo_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"defaults_site_name" varchar,
  	"defaults_title_template" varchar,
  	"defaults_title" varchar,
  	"defaults_description" varchar,
  	"defaults_image_id" integer,
  	"defaults_locale" varchar DEFAULT 'en_US',
  	"defaults_twitter_card" "enum_seo_settings_defaults_twitter_card" DEFAULT 'summary_large_image',
  	"defaults_twitter_handle" varchar,
  	"defaults_favicon_id" integer,
  	"defaults_apple_touch_icon_id" integer,
  	"defaults_theme_color" varchar,
  	"search_verification_google" varchar,
  	"search_verification_bing" varchar,
  	"search_verification_yandex" varchar,
  	"search_verification_pinterest" varchar,
  	"search_robots_max_image_preview" "enum_seo_settings_search_robots_max_image_preview" DEFAULT 'large',
  	"search_robots_max_snippet" numeric DEFAULT -1,
  	"search_robots_max_video_preview" numeric DEFAULT -1,
  	"crawlers_ai_policy" "enum_seo_settings_crawlers_ai_policy" DEFAULT 'allow',
  	"crawlers_extra" varchar,
  	"llms_enabled" boolean DEFAULT true,
  	"llms_content" varchar,
  	"organization_type" "enum_seo_settings_organization_type" DEFAULT 'Organization',
  	"organization_name" varchar,
  	"organization_legal_name" varchar,
  	"organization_description" varchar,
  	"organization_logo_id" integer,
  	"organization_founding_date" varchar,
  	"organization_contact_type" varchar DEFAULT 'sales',
  	"organization_address_street" varchar,
  	"organization_address_locality" varchar,
  	"organization_address_region" varchar,
  	"organization_address_postal_code" varchar,
  	"organization_address_country" varchar,
  	"organization_additional_json_ld" jsonb,
  	"_status" "enum_seo_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_settings_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_seo_settings_v_version_search_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_seo_settings_v_version_crawlers_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_agent" varchar DEFAULT '*',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_seo_settings_v_version_organization_same_as" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_seo_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_defaults_site_name" varchar,
  	"version_defaults_title_template" varchar,
  	"version_defaults_title" varchar,
  	"version_defaults_description" varchar,
  	"version_defaults_image_id" integer,
  	"version_defaults_locale" varchar DEFAULT 'en_US',
  	"version_defaults_twitter_card" "enum__seo_settings_v_version_defaults_twitter_card" DEFAULT 'summary_large_image',
  	"version_defaults_twitter_handle" varchar,
  	"version_defaults_favicon_id" integer,
  	"version_defaults_apple_touch_icon_id" integer,
  	"version_defaults_theme_color" varchar,
  	"version_search_verification_google" varchar,
  	"version_search_verification_bing" varchar,
  	"version_search_verification_yandex" varchar,
  	"version_search_verification_pinterest" varchar,
  	"version_search_robots_max_image_preview" "enum__seo_settings_v_version_search_robots_max_image_preview" DEFAULT 'large',
  	"version_search_robots_max_snippet" numeric DEFAULT -1,
  	"version_search_robots_max_video_preview" numeric DEFAULT -1,
  	"version_crawlers_ai_policy" "enum__seo_settings_v_version_crawlers_ai_policy" DEFAULT 'allow',
  	"version_crawlers_extra" varchar,
  	"version_llms_enabled" boolean DEFAULT true,
  	"version_llms_content" varchar,
  	"version_organization_type" "enum__seo_settings_v_version_organization_type" DEFAULT 'Organization',
  	"version_organization_name" varchar,
  	"version_organization_legal_name" varchar,
  	"version_organization_description" varchar,
  	"version_organization_logo_id" integer,
  	"version_organization_founding_date" varchar,
  	"version_organization_contact_type" varchar DEFAULT 'sales',
  	"version_organization_address_street" varchar,
  	"version_organization_address_locality" varchar,
  	"version_organization_address_region" varchar,
  	"version_organization_address_postal_code" varchar,
  	"version_organization_address_country" varchar,
  	"version_organization_additional_json_ld" jsonb,
  	"version__status" "enum__seo_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_seo_settings_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "tracking_scripts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"enabled" boolean DEFAULT true,
  	"strategy" "enum_tracking_scripts_strategy" DEFAULT 'afterInteractive',
  	"src" varchar,
  	"code" varchar
  );
  
  CREATE TABLE "tracking" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"gtm_id" varchar,
  	"ga4_id" varchar,
  	"_status" "enum_tracking_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_tracking_v_version_scripts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"enabled" boolean DEFAULT true,
  	"strategy" "enum__tracking_v_version_scripts_strategy" DEFAULT 'afterInteractive',
  	"src" varchar,
  	"code" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_tracking_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_gtm_id" varchar,
  	"version_ga4_id" varchar,
  	"version__status" "enum__tracking_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "site_settings_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_site_settings_v_texts" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "site_settings_texts" CASCADE;
  DROP TABLE "_site_settings_v_texts" CASCADE;
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_seo_image_id_media_id_fk";
  
  ALTER TABLE "_site_settings_v" DROP CONSTRAINT "_site_settings_v_version_seo_image_id_media_id_fk";
  
  DROP INDEX "site_settings_seo_seo_image_idx";
  DROP INDEX "_site_settings_v_version_seo_version_seo_image_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "redirects_id" integer;
  ALTER TABLE "home_page" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "home_page" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "home_page" ADD COLUMN "meta_ignore_title_template" boolean DEFAULT false;
  ALTER TABLE "home_page" ADD COLUMN "meta_og_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "meta_og_description" varchar;
  ALTER TABLE "home_page" ADD COLUMN "meta_noindex" boolean DEFAULT false;
  ALTER TABLE "home_page" ADD COLUMN "meta_nofollow" boolean DEFAULT false;
  ALTER TABLE "home_page" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "home_page" ADD COLUMN "meta_exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "home_page" ADD COLUMN "meta_sitemap_priority" numeric;
  ALTER TABLE "home_page" ADD COLUMN "meta_sitemap_change_frequency" "enum_home_page_meta_sitemap_change_frequency";
  ALTER TABLE "home_page" ADD COLUMN "meta_json_ld" jsonb;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_ignore_title_template" boolean DEFAULT false;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_og_title" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_og_description" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_noindex" boolean DEFAULT false;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_nofollow" boolean DEFAULT false;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_sitemap_priority" numeric;
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_sitemap_change_frequency" "enum__home_page_v_version_meta_sitemap_change_frequency";
  ALTER TABLE "_home_page_v" ADD COLUMN "version_meta_json_ld" jsonb;
  ALTER TABLE "features_page" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "features_page" ADD COLUMN "meta_ignore_title_template" boolean DEFAULT false;
  ALTER TABLE "features_page" ADD COLUMN "meta_og_title" varchar;
  ALTER TABLE "features_page" ADD COLUMN "meta_og_description" varchar;
  ALTER TABLE "features_page" ADD COLUMN "meta_noindex" boolean DEFAULT false;
  ALTER TABLE "features_page" ADD COLUMN "meta_nofollow" boolean DEFAULT false;
  ALTER TABLE "features_page" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "features_page" ADD COLUMN "meta_exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "features_page" ADD COLUMN "meta_sitemap_priority" numeric;
  ALTER TABLE "features_page" ADD COLUMN "meta_sitemap_change_frequency" "enum_features_page_meta_sitemap_change_frequency";
  ALTER TABLE "features_page" ADD COLUMN "meta_json_ld" jsonb;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_ignore_title_template" boolean DEFAULT false;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_og_title" varchar;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_og_description" varchar;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_noindex" boolean DEFAULT false;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_nofollow" boolean DEFAULT false;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_sitemap_priority" numeric;
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_sitemap_change_frequency" "enum__features_page_v_version_meta_sitemap_change_frequency";
  ALTER TABLE "_features_page_v" ADD COLUMN "version_meta_json_ld" jsonb;
  ALTER TABLE "faq_page" ADD COLUMN "faq_schema" boolean DEFAULT true;
  ALTER TABLE "faq_page" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "faq_page" ADD COLUMN "meta_ignore_title_template" boolean DEFAULT false;
  ALTER TABLE "faq_page" ADD COLUMN "meta_og_title" varchar;
  ALTER TABLE "faq_page" ADD COLUMN "meta_og_description" varchar;
  ALTER TABLE "faq_page" ADD COLUMN "meta_noindex" boolean DEFAULT false;
  ALTER TABLE "faq_page" ADD COLUMN "meta_nofollow" boolean DEFAULT false;
  ALTER TABLE "faq_page" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "faq_page" ADD COLUMN "meta_exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "faq_page" ADD COLUMN "meta_sitemap_priority" numeric;
  ALTER TABLE "faq_page" ADD COLUMN "meta_sitemap_change_frequency" "enum_faq_page_meta_sitemap_change_frequency";
  ALTER TABLE "faq_page" ADD COLUMN "meta_json_ld" jsonb;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_faq_schema" boolean DEFAULT true;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_ignore_title_template" boolean DEFAULT false;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_og_title" varchar;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_og_description" varchar;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_noindex" boolean DEFAULT false;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_nofollow" boolean DEFAULT false;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_sitemap_priority" numeric;
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_sitemap_change_frequency" "enum__faq_page_v_version_meta_sitemap_change_frequency";
  ALTER TABLE "_faq_page_v" ADD COLUMN "version_meta_json_ld" jsonb;
  ALTER TABLE "home_page_meta_custom_meta_tags" ADD CONSTRAINT "home_page_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_texts" ADD CONSTRAINT "home_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_home_page_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_texts" ADD CONSTRAINT "_home_page_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_meta_custom_meta_tags" ADD CONSTRAINT "features_page_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_texts" ADD CONSTRAINT "features_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_features_page_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_texts" ADD CONSTRAINT "_features_page_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_page_meta_custom_meta_tags" ADD CONSTRAINT "faq_page_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_page_texts" ADD CONSTRAINT "faq_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faq_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_page_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_faq_page_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_page_v_texts" ADD CONSTRAINT "_faq_page_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_faq_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings_search_custom_meta_tags" ADD CONSTRAINT "seo_settings_search_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings_crawlers_rules" ADD CONSTRAINT "seo_settings_crawlers_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings_organization_same_as" ADD CONSTRAINT "seo_settings_organization_same_as_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_defaults_image_id_media_id_fk" FOREIGN KEY ("defaults_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_defaults_favicon_id_media_id_fk" FOREIGN KEY ("defaults_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_defaults_apple_touch_icon_id_media_id_fk" FOREIGN KEY ("defaults_apple_touch_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_organization_logo_id_media_id_fk" FOREIGN KEY ("organization_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings_texts" ADD CONSTRAINT "seo_settings_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_seo_settings_v_version_search_custom_meta_tags" ADD CONSTRAINT "_seo_settings_v_version_search_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_seo_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_seo_settings_v_version_crawlers_rules" ADD CONSTRAINT "_seo_settings_v_version_crawlers_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_seo_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_seo_settings_v_version_organization_same_as" ADD CONSTRAINT "_seo_settings_v_version_organization_same_as_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_seo_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_seo_settings_v" ADD CONSTRAINT "_seo_settings_v_version_defaults_image_id_media_id_fk" FOREIGN KEY ("version_defaults_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_seo_settings_v" ADD CONSTRAINT "_seo_settings_v_version_defaults_favicon_id_media_id_fk" FOREIGN KEY ("version_defaults_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_seo_settings_v" ADD CONSTRAINT "_seo_settings_v_version_defaults_apple_touch_icon_id_media_id_fk" FOREIGN KEY ("version_defaults_apple_touch_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_seo_settings_v" ADD CONSTRAINT "_seo_settings_v_version_organization_logo_id_media_id_fk" FOREIGN KEY ("version_organization_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_seo_settings_v_texts" ADD CONSTRAINT "_seo_settings_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_seo_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tracking_scripts" ADD CONSTRAINT "tracking_scripts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tracking"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_tracking_v_version_scripts" ADD CONSTRAINT "_tracking_v_version_scripts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_tracking_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "home_page_meta_custom_meta_tags_order_idx" ON "home_page_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "home_page_meta_custom_meta_tags_parent_id_idx" ON "home_page_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "home_page_texts_order_parent" ON "home_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "_home_page_v_version_meta_custom_meta_tags_order_idx" ON "_home_page_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_meta_custom_meta_tags_parent_id_idx" ON "_home_page_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_texts_order_parent" ON "_home_page_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "features_page_meta_custom_meta_tags_order_idx" ON "features_page_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "features_page_meta_custom_meta_tags_parent_id_idx" ON "features_page_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "features_page_texts_order_parent" ON "features_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "_features_page_v_version_meta_custom_meta_tags_order_idx" ON "_features_page_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_meta_custom_meta_tags_parent_id_idx" ON "_features_page_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_texts_order_parent" ON "_features_page_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "faq_page_meta_custom_meta_tags_order_idx" ON "faq_page_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "faq_page_meta_custom_meta_tags_parent_id_idx" ON "faq_page_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "faq_page_texts_order_parent" ON "faq_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "_faq_page_v_version_meta_custom_meta_tags_order_idx" ON "_faq_page_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_faq_page_v_version_meta_custom_meta_tags_parent_id_idx" ON "_faq_page_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_faq_page_v_texts_order_parent" ON "_faq_page_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "seo_settings_search_custom_meta_tags_order_idx" ON "seo_settings_search_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "seo_settings_search_custom_meta_tags_parent_id_idx" ON "seo_settings_search_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "seo_settings_crawlers_rules_order_idx" ON "seo_settings_crawlers_rules" USING btree ("_order");
  CREATE INDEX "seo_settings_crawlers_rules_parent_id_idx" ON "seo_settings_crawlers_rules" USING btree ("_parent_id");
  CREATE INDEX "seo_settings_organization_same_as_order_idx" ON "seo_settings_organization_same_as" USING btree ("_order");
  CREATE INDEX "seo_settings_organization_same_as_parent_id_idx" ON "seo_settings_organization_same_as" USING btree ("_parent_id");
  CREATE INDEX "seo_settings_defaults_defaults_image_idx" ON "seo_settings" USING btree ("defaults_image_id");
  CREATE INDEX "seo_settings_defaults_defaults_favicon_idx" ON "seo_settings" USING btree ("defaults_favicon_id");
  CREATE INDEX "seo_settings_defaults_defaults_apple_touch_icon_idx" ON "seo_settings" USING btree ("defaults_apple_touch_icon_id");
  CREATE INDEX "seo_settings_organization_organization_logo_idx" ON "seo_settings" USING btree ("organization_logo_id");
  CREATE INDEX "seo_settings__status_idx" ON "seo_settings" USING btree ("_status");
  CREATE INDEX "seo_settings_texts_order_parent" ON "seo_settings_texts" USING btree ("order","parent_id");
  CREATE INDEX "_seo_settings_v_version_search_custom_meta_tags_order_idx" ON "_seo_settings_v_version_search_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_seo_settings_v_version_search_custom_meta_tags_parent_id_idx" ON "_seo_settings_v_version_search_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_seo_settings_v_version_crawlers_rules_order_idx" ON "_seo_settings_v_version_crawlers_rules" USING btree ("_order");
  CREATE INDEX "_seo_settings_v_version_crawlers_rules_parent_id_idx" ON "_seo_settings_v_version_crawlers_rules" USING btree ("_parent_id");
  CREATE INDEX "_seo_settings_v_version_organization_same_as_order_idx" ON "_seo_settings_v_version_organization_same_as" USING btree ("_order");
  CREATE INDEX "_seo_settings_v_version_organization_same_as_parent_id_idx" ON "_seo_settings_v_version_organization_same_as" USING btree ("_parent_id");
  CREATE INDEX "_seo_settings_v_version_defaults_version_defaults_image_idx" ON "_seo_settings_v" USING btree ("version_defaults_image_id");
  CREATE INDEX "_seo_settings_v_version_defaults_version_defaults_favico_idx" ON "_seo_settings_v" USING btree ("version_defaults_favicon_id");
  CREATE INDEX "_seo_settings_v_version_defaults_version_defaults_apple__idx" ON "_seo_settings_v" USING btree ("version_defaults_apple_touch_icon_id");
  CREATE INDEX "_seo_settings_v_version_organization_version_organizatio_idx" ON "_seo_settings_v" USING btree ("version_organization_logo_id");
  CREATE INDEX "_seo_settings_v_version_version__status_idx" ON "_seo_settings_v" USING btree ("version__status");
  CREATE INDEX "_seo_settings_v_created_at_idx" ON "_seo_settings_v" USING btree ("created_at");
  CREATE INDEX "_seo_settings_v_updated_at_idx" ON "_seo_settings_v" USING btree ("updated_at");
  CREATE INDEX "_seo_settings_v_latest_idx" ON "_seo_settings_v" USING btree ("latest");
  CREATE INDEX "_seo_settings_v_autosave_idx" ON "_seo_settings_v" USING btree ("autosave");
  CREATE INDEX "_seo_settings_v_texts_order_parent" ON "_seo_settings_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "tracking_scripts_order_idx" ON "tracking_scripts" USING btree ("_order");
  CREATE INDEX "tracking_scripts_parent_id_idx" ON "tracking_scripts" USING btree ("_parent_id");
  CREATE INDEX "tracking__status_idx" ON "tracking" USING btree ("_status");
  CREATE INDEX "_tracking_v_version_scripts_order_idx" ON "_tracking_v_version_scripts" USING btree ("_order");
  CREATE INDEX "_tracking_v_version_scripts_parent_id_idx" ON "_tracking_v_version_scripts" USING btree ("_parent_id");
  CREATE INDEX "_tracking_v_version_version__status_idx" ON "_tracking_v" USING btree ("version__status");
  CREATE INDEX "_tracking_v_created_at_idx" ON "_tracking_v" USING btree ("created_at");
  CREATE INDEX "_tracking_v_updated_at_idx" ON "_tracking_v" USING btree ("updated_at");
  CREATE INDEX "_tracking_v_latest_idx" ON "_tracking_v" USING btree ("latest");
  CREATE INDEX "_tracking_v_autosave_idx" ON "_tracking_v" USING btree ("autosave");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_page" ADD CONSTRAINT "features_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_page_v" ADD CONSTRAINT "_features_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faq_page" ADD CONSTRAINT "faq_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_faq_page_v" ADD CONSTRAINT "_faq_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "home_page_meta_meta_image_idx" ON "home_page" USING btree ("meta_image_id");
  CREATE INDEX "_home_page_v_version_meta_version_meta_image_idx" ON "_home_page_v" USING btree ("version_meta_image_id");
  CREATE INDEX "features_page_meta_meta_image_idx" ON "features_page" USING btree ("meta_image_id");
  CREATE INDEX "_features_page_v_version_meta_version_meta_image_idx" ON "_features_page_v" USING btree ("version_meta_image_id");
  CREATE INDEX "faq_page_meta_meta_image_idx" ON "faq_page" USING btree ("meta_image_id");
  CREATE INDEX "_faq_page_v_version_meta_version_meta_image_idx" ON "_faq_page_v" USING btree ("version_meta_image_id");
  ALTER TABLE "site_settings" DROP COLUMN "seo_site_name";
  ALTER TABLE "site_settings" DROP COLUMN "seo_title";
  ALTER TABLE "site_settings" DROP COLUMN "seo_title_template";
  ALTER TABLE "site_settings" DROP COLUMN "seo_description";
  ALTER TABLE "site_settings" DROP COLUMN "seo_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "organization_name";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_seo_site_name";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_seo_title";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_seo_title_template";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_seo_description";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "_site_settings_v" DROP COLUMN "version_organization_name";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_site_settings_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "redirects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "seo_settings_search_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "seo_settings_crawlers_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "seo_settings_organization_same_as" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "seo_settings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "seo_settings_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_seo_settings_v_version_search_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_seo_settings_v_version_crawlers_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_seo_settings_v_version_organization_same_as" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_seo_settings_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_seo_settings_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tracking_scripts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tracking" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_tracking_v_version_scripts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_tracking_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "home_page_meta_custom_meta_tags" CASCADE;
  DROP TABLE "home_page_texts" CASCADE;
  DROP TABLE "_home_page_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_home_page_v_texts" CASCADE;
  DROP TABLE "features_page_meta_custom_meta_tags" CASCADE;
  DROP TABLE "features_page_texts" CASCADE;
  DROP TABLE "_features_page_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_features_page_v_texts" CASCADE;
  DROP TABLE "faq_page_meta_custom_meta_tags" CASCADE;
  DROP TABLE "faq_page_texts" CASCADE;
  DROP TABLE "_faq_page_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_faq_page_v_texts" CASCADE;
  DROP TABLE "seo_settings_search_custom_meta_tags" CASCADE;
  DROP TABLE "seo_settings_crawlers_rules" CASCADE;
  DROP TABLE "seo_settings_organization_same_as" CASCADE;
  DROP TABLE "seo_settings" CASCADE;
  DROP TABLE "seo_settings_texts" CASCADE;
  DROP TABLE "_seo_settings_v_version_search_custom_meta_tags" CASCADE;
  DROP TABLE "_seo_settings_v_version_crawlers_rules" CASCADE;
  DROP TABLE "_seo_settings_v_version_organization_same_as" CASCADE;
  DROP TABLE "_seo_settings_v" CASCADE;
  DROP TABLE "_seo_settings_v_texts" CASCADE;
  DROP TABLE "tracking_scripts" CASCADE;
  DROP TABLE "tracking" CASCADE;
  DROP TABLE "_tracking_v_version_scripts" CASCADE;
  DROP TABLE "_tracking_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_redirects_fk";
  
  ALTER TABLE "home_page" DROP CONSTRAINT "home_page_meta_image_id_media_id_fk";
  
  ALTER TABLE "_home_page_v" DROP CONSTRAINT "_home_page_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "features_page" DROP CONSTRAINT "features_page_meta_image_id_media_id_fk";
  
  ALTER TABLE "_features_page_v" DROP CONSTRAINT "_features_page_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "faq_page" DROP CONSTRAINT "faq_page_meta_image_id_media_id_fk";
  
  ALTER TABLE "_faq_page_v" DROP CONSTRAINT "_faq_page_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX "payload_locked_documents_rels_redirects_id_idx";
  DROP INDEX "home_page_meta_meta_image_idx";
  DROP INDEX "_home_page_v_version_meta_version_meta_image_idx";
  DROP INDEX "features_page_meta_meta_image_idx";
  DROP INDEX "_features_page_v_version_meta_version_meta_image_idx";
  DROP INDEX "faq_page_meta_meta_image_idx";
  DROP INDEX "_faq_page_v_version_meta_version_meta_image_idx";
  ALTER TABLE "site_settings" ADD COLUMN "seo_site_name" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_title_template" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "organization_name" varchar;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_seo_site_name" varchar;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_seo_title" varchar;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_seo_title_template" varchar;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_seo_description" varchar;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "_site_settings_v" ADD COLUMN "version_organization_name" varchar;
  ALTER TABLE "site_settings_texts" ADD CONSTRAINT "site_settings_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_texts" ADD CONSTRAINT "_site_settings_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_settings_texts_order_parent" ON "site_settings_texts" USING btree ("order","parent_id");
  CREATE INDEX "_site_settings_v_texts_order_parent" ON "_site_settings_v_texts" USING btree ("order","parent_id");
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_settings_seo_seo_image_idx" ON "site_settings" USING btree ("seo_image_id");
  CREATE INDEX "_site_settings_v_version_seo_version_seo_image_idx" ON "_site_settings_v" USING btree ("version_seo_image_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "redirects_id";
  ALTER TABLE "home_page" DROP COLUMN "meta_title";
  ALTER TABLE "home_page" DROP COLUMN "meta_description";
  ALTER TABLE "home_page" DROP COLUMN "meta_image_id";
  ALTER TABLE "home_page" DROP COLUMN "meta_ignore_title_template";
  ALTER TABLE "home_page" DROP COLUMN "meta_og_title";
  ALTER TABLE "home_page" DROP COLUMN "meta_og_description";
  ALTER TABLE "home_page" DROP COLUMN "meta_noindex";
  ALTER TABLE "home_page" DROP COLUMN "meta_nofollow";
  ALTER TABLE "home_page" DROP COLUMN "meta_canonical";
  ALTER TABLE "home_page" DROP COLUMN "meta_exclude_from_sitemap";
  ALTER TABLE "home_page" DROP COLUMN "meta_sitemap_priority";
  ALTER TABLE "home_page" DROP COLUMN "meta_sitemap_change_frequency";
  ALTER TABLE "home_page" DROP COLUMN "meta_json_ld";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_ignore_title_template";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_og_title";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_og_description";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_nofollow";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_exclude_from_sitemap";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_sitemap_priority";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_sitemap_change_frequency";
  ALTER TABLE "_home_page_v" DROP COLUMN "version_meta_json_ld";
  ALTER TABLE "features_page" DROP COLUMN "meta_image_id";
  ALTER TABLE "features_page" DROP COLUMN "meta_ignore_title_template";
  ALTER TABLE "features_page" DROP COLUMN "meta_og_title";
  ALTER TABLE "features_page" DROP COLUMN "meta_og_description";
  ALTER TABLE "features_page" DROP COLUMN "meta_noindex";
  ALTER TABLE "features_page" DROP COLUMN "meta_nofollow";
  ALTER TABLE "features_page" DROP COLUMN "meta_canonical";
  ALTER TABLE "features_page" DROP COLUMN "meta_exclude_from_sitemap";
  ALTER TABLE "features_page" DROP COLUMN "meta_sitemap_priority";
  ALTER TABLE "features_page" DROP COLUMN "meta_sitemap_change_frequency";
  ALTER TABLE "features_page" DROP COLUMN "meta_json_ld";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_ignore_title_template";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_og_title";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_og_description";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_nofollow";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_exclude_from_sitemap";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_sitemap_priority";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_sitemap_change_frequency";
  ALTER TABLE "_features_page_v" DROP COLUMN "version_meta_json_ld";
  ALTER TABLE "faq_page" DROP COLUMN "faq_schema";
  ALTER TABLE "faq_page" DROP COLUMN "meta_image_id";
  ALTER TABLE "faq_page" DROP COLUMN "meta_ignore_title_template";
  ALTER TABLE "faq_page" DROP COLUMN "meta_og_title";
  ALTER TABLE "faq_page" DROP COLUMN "meta_og_description";
  ALTER TABLE "faq_page" DROP COLUMN "meta_noindex";
  ALTER TABLE "faq_page" DROP COLUMN "meta_nofollow";
  ALTER TABLE "faq_page" DROP COLUMN "meta_canonical";
  ALTER TABLE "faq_page" DROP COLUMN "meta_exclude_from_sitemap";
  ALTER TABLE "faq_page" DROP COLUMN "meta_sitemap_priority";
  ALTER TABLE "faq_page" DROP COLUMN "meta_sitemap_change_frequency";
  ALTER TABLE "faq_page" DROP COLUMN "meta_json_ld";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_faq_schema";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_ignore_title_template";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_og_title";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_og_description";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_nofollow";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_exclude_from_sitemap";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_sitemap_priority";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_sitemap_change_frequency";
  ALTER TABLE "_faq_page_v" DROP COLUMN "version_meta_json_ld";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_home_page_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__home_page_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_features_page_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__features_page_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_faq_page_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__faq_page_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_seo_settings_defaults_twitter_card";
  DROP TYPE "public"."enum_seo_settings_search_robots_max_image_preview";
  DROP TYPE "public"."enum_seo_settings_crawlers_ai_policy";
  DROP TYPE "public"."enum_seo_settings_organization_type";
  DROP TYPE "public"."enum_seo_settings_status";
  DROP TYPE "public"."enum__seo_settings_v_version_defaults_twitter_card";
  DROP TYPE "public"."enum__seo_settings_v_version_search_robots_max_image_preview";
  DROP TYPE "public"."enum__seo_settings_v_version_crawlers_ai_policy";
  DROP TYPE "public"."enum__seo_settings_v_version_organization_type";
  DROP TYPE "public"."enum__seo_settings_v_version_status";
  DROP TYPE "public"."enum_tracking_scripts_strategy";
  DROP TYPE "public"."enum_tracking_status";
  DROP TYPE "public"."enum__tracking_v_version_scripts_strategy";
  DROP TYPE "public"."enum__tracking_v_version_status";`)
}

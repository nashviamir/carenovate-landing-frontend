import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_portal_screens_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_pages_blocks_benefits_items_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_pages_blocks_book_demo_steps_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_pages_blocks_hardware_specs_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_pages_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_portal_screens_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__pages_v_blocks_benefits_items_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__pages_v_blocks_book_demo_steps_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__pages_v_blocks_hardware_specs_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__pages_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"primary_cta_label" varchar,
  	"primary_cta_href" varchar,
  	"secondary_cta_label" varchar,
  	"secondary_cta_href" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_before_after_challenges_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_before_after_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_before_after" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"before_image_id" integer,
  	"after_image_id" integer,
  	"before_tab" varchar,
  	"after_tab" varchar,
  	"before_badge" varchar,
  	"after_badge" varchar,
  	"challenges_title" varchar,
  	"challenges_subtitle" varchar,
  	"solutions_title" varchar,
  	"solutions_subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portal_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab" varchar,
  	"icon" "enum_pages_blocks_portal_screens_icon",
  	"path" varchar,
  	"label" varchar,
  	"caption" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_portal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"url_prefix" varchar,
  	"live_label" varchar,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_benefits_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_pages_blocks_benefits_items_icon",
  	"description" varchar,
  	"highlight" varchar
  );
  
  CREATE TABLE "pages_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"banner_eyebrow" varchar,
  	"banner_heading" varchar,
  	"banner_body" varchar,
  	"banner_cta_label" varchar,
  	"banner_cta_href" varchar,
  	"banner_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_book_demo_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_blocks_book_demo_steps_icon"
  );
  
  CREATE TABLE "pages_blocks_book_demo_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_book_demo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"highlights_label" varchar,
  	"form_title" varchar,
  	"form_subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hardware_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"highlighted" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_hardware_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_pages_blocks_hardware_specs_icon",
  	"description" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "pages_blocks_hardware" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"device_name" varchar,
  	"model_badge" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_comparison_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"area" varchar,
  	"traditional" varchar,
  	"carehub" varchar,
  	"impact" varchar
  );
  
  CREATE TABLE "pages_blocks_comparison_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"columns_area" varchar,
  	"columns_traditional" varchar,
  	"columns_carehub" varchar,
  	"columns_impact" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"faq_schema" boolean DEFAULT true,
  	"cta_heading" varchar,
  	"cta_description" varchar,
  	"cta_button_label" varchar,
  	"cta_button_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_ignore_title_template" boolean DEFAULT false,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"meta_noindex" boolean DEFAULT false,
  	"meta_nofollow" boolean DEFAULT false,
  	"meta_canonical" varchar,
  	"meta_exclude_from_sitemap" boolean DEFAULT false,
  	"meta_sitemap_priority" numeric,
  	"meta_sitemap_change_frequency" "enum_pages_meta_sitemap_change_frequency",
  	"meta_json_ld" jsonb,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"primary_cta_label" varchar,
  	"primary_cta_href" varchar,
  	"secondary_cta_label" varchar,
  	"secondary_cta_href" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_before_after_challenges_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_before_after_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_before_after" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"before_image_id" integer,
  	"after_image_id" integer,
  	"before_tab" varchar,
  	"after_tab" varchar,
  	"before_badge" varchar,
  	"after_badge" varchar,
  	"challenges_title" varchar,
  	"challenges_subtitle" varchar,
  	"solutions_title" varchar,
  	"solutions_subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portal_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab" varchar,
  	"icon" "enum__pages_v_blocks_portal_screens_icon",
  	"path" varchar,
  	"label" varchar,
  	"caption" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"url_prefix" varchar,
  	"live_label" varchar,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"note" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_benefits_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum__pages_v_blocks_benefits_items_icon",
  	"description" varchar,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"banner_eyebrow" varchar,
  	"banner_heading" varchar,
  	"banner_body" varchar,
  	"banner_cta_label" varchar,
  	"banner_cta_href" varchar,
  	"banner_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_book_demo_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_blocks_book_demo_steps_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_book_demo_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_book_demo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"highlights_label" varchar,
  	"form_title" varchar,
  	"form_subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hardware_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"highlighted" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hardware_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum__pages_v_blocks_hardware_specs_icon",
  	"description" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hardware" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"device_name" varchar,
  	"model_badge" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_comparison_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"area" varchar,
  	"traditional" varchar,
  	"carehub" varchar,
  	"impact" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_comparison_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"columns_area" varchar,
  	"columns_traditional" varchar,
  	"columns_carehub" varchar,
  	"columns_impact" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"faq_schema" boolean DEFAULT true,
  	"cta_heading" varchar,
  	"cta_description" varchar,
  	"cta_button_label" varchar,
  	"cta_button_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_ignore_title_template" boolean DEFAULT false,
  	"version_meta_og_title" varchar,
  	"version_meta_og_description" varchar,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_meta_nofollow" boolean DEFAULT false,
  	"version_meta_canonical" varchar,
  	"version_meta_exclude_from_sitemap" boolean DEFAULT false,
  	"version_meta_sitemap_priority" numeric,
  	"version_meta_sitemap_change_frequency" "enum__pages_v_version_meta_sitemap_change_frequency",
  	"version_meta_json_ld" jsonb,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "home_page_hero_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_comparison_challenges_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_comparison_solutions_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_portal_screens" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_benefits_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_demo_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_demo_highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_hero_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_comparison_challenges_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_comparison_solutions_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_portal_screens" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_benefits_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_demo_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_demo_highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_hardware_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_hardware_specs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_matrix_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_version_hardware_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_version_hardware_specs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_version_matrix_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_page_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v_version_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_page_v_texts" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "home_page_hero_bullets" CASCADE;
  DROP TABLE "home_page_comparison_challenges_items" CASCADE;
  DROP TABLE "home_page_comparison_solutions_items" CASCADE;
  DROP TABLE "home_page_portal_screens" CASCADE;
  DROP TABLE "home_page_benefits_items" CASCADE;
  DROP TABLE "home_page_demo_steps" CASCADE;
  DROP TABLE "home_page_demo_highlights" CASCADE;
  DROP TABLE "home_page_meta_custom_meta_tags" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "home_page_texts" CASCADE;
  DROP TABLE "_home_page_v_version_hero_bullets" CASCADE;
  DROP TABLE "_home_page_v_version_comparison_challenges_items" CASCADE;
  DROP TABLE "_home_page_v_version_comparison_solutions_items" CASCADE;
  DROP TABLE "_home_page_v_version_portal_screens" CASCADE;
  DROP TABLE "_home_page_v_version_benefits_items" CASCADE;
  DROP TABLE "_home_page_v_version_demo_steps" CASCADE;
  DROP TABLE "_home_page_v_version_demo_highlights" CASCADE;
  DROP TABLE "_home_page_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_home_page_v" CASCADE;
  DROP TABLE "_home_page_v_texts" CASCADE;
  DROP TABLE "features_page_hardware_stats" CASCADE;
  DROP TABLE "features_page_hardware_specs" CASCADE;
  DROP TABLE "features_page_matrix_rows" CASCADE;
  DROP TABLE "features_page_meta_custom_meta_tags" CASCADE;
  DROP TABLE "features_page" CASCADE;
  DROP TABLE "features_page_texts" CASCADE;
  DROP TABLE "_features_page_v_version_hardware_stats" CASCADE;
  DROP TABLE "_features_page_v_version_hardware_specs" CASCADE;
  DROP TABLE "_features_page_v_version_matrix_rows" CASCADE;
  DROP TABLE "_features_page_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_features_page_v" CASCADE;
  DROP TABLE "_features_page_v_texts" CASCADE;
  DROP TABLE "faq_page_items" CASCADE;
  DROP TABLE "faq_page_meta_custom_meta_tags" CASCADE;
  DROP TABLE "faq_page" CASCADE;
  DROP TABLE "faq_page_texts" CASCADE;
  DROP TABLE "_faq_page_v_version_items" CASCADE;
  DROP TABLE "_faq_page_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_faq_page_v" CASCADE;
  DROP TABLE "_faq_page_v_texts" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "pages_blocks_hero_bullets" ADD CONSTRAINT "pages_blocks_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_before_after_challenges_items" ADD CONSTRAINT "pages_blocks_before_after_challenges_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_before_after"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_before_after_solutions_items" ADD CONSTRAINT "pages_blocks_before_after_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_before_after"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_before_after" ADD CONSTRAINT "pages_blocks_before_after_before_image_id_media_id_fk" FOREIGN KEY ("before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_before_after" ADD CONSTRAINT "pages_blocks_before_after_after_image_id_media_id_fk" FOREIGN KEY ("after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_before_after" ADD CONSTRAINT "pages_blocks_before_after_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portal_screens" ADD CONSTRAINT "pages_blocks_portal_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portal_screens" ADD CONSTRAINT "pages_blocks_portal_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portal" ADD CONSTRAINT "pages_blocks_portal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_benefits_items" ADD CONSTRAINT "pages_blocks_benefits_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_benefits" ADD CONSTRAINT "pages_blocks_benefits_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_benefits" ADD CONSTRAINT "pages_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_book_demo_steps" ADD CONSTRAINT "pages_blocks_book_demo_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_book_demo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_book_demo_highlights" ADD CONSTRAINT "pages_blocks_book_demo_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_book_demo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_book_demo" ADD CONSTRAINT "pages_blocks_book_demo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hardware_stats" ADD CONSTRAINT "pages_blocks_hardware_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hardware"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hardware_specs" ADD CONSTRAINT "pages_blocks_hardware_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hardware"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hardware" ADD CONSTRAINT "pages_blocks_hardware_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hardware" ADD CONSTRAINT "pages_blocks_hardware_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_comparison_table_rows" ADD CONSTRAINT "pages_blocks_comparison_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_comparison_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_comparison_table" ADD CONSTRAINT "pages_blocks_comparison_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_meta_custom_meta_tags" ADD CONSTRAINT "pages_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_texts" ADD CONSTRAINT "pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_bullets" ADD CONSTRAINT "_pages_v_blocks_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_before_after_challenges_items" ADD CONSTRAINT "_pages_v_blocks_before_after_challenges_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_before_after"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_before_after_solutions_items" ADD CONSTRAINT "_pages_v_blocks_before_after_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_before_after"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_before_after" ADD CONSTRAINT "_pages_v_blocks_before_after_before_image_id_media_id_fk" FOREIGN KEY ("before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_before_after" ADD CONSTRAINT "_pages_v_blocks_before_after_after_image_id_media_id_fk" FOREIGN KEY ("after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_before_after" ADD CONSTRAINT "_pages_v_blocks_before_after_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portal_screens" ADD CONSTRAINT "_pages_v_blocks_portal_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portal_screens" ADD CONSTRAINT "_pages_v_blocks_portal_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portal" ADD CONSTRAINT "_pages_v_blocks_portal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_benefits_items" ADD CONSTRAINT "_pages_v_blocks_benefits_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_book_demo_steps" ADD CONSTRAINT "_pages_v_blocks_book_demo_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_book_demo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_book_demo_highlights" ADD CONSTRAINT "_pages_v_blocks_book_demo_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_book_demo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_book_demo" ADD CONSTRAINT "_pages_v_blocks_book_demo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hardware_stats" ADD CONSTRAINT "_pages_v_blocks_hardware_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hardware"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hardware_specs" ADD CONSTRAINT "_pages_v_blocks_hardware_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hardware"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hardware" ADD CONSTRAINT "_pages_v_blocks_hardware_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hardware" ADD CONSTRAINT "_pages_v_blocks_hardware_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_comparison_table_rows" ADD CONSTRAINT "_pages_v_blocks_comparison_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_comparison_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_comparison_table" ADD CONSTRAINT "_pages_v_blocks_comparison_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_pages_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_texts" ADD CONSTRAINT "_pages_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_bullets_order_idx" ON "pages_blocks_hero_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_bullets_parent_id_idx" ON "pages_blocks_hero_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_before_after_challenges_items_order_idx" ON "pages_blocks_before_after_challenges_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_before_after_challenges_items_parent_id_idx" ON "pages_blocks_before_after_challenges_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_before_after_solutions_items_order_idx" ON "pages_blocks_before_after_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_before_after_solutions_items_parent_id_idx" ON "pages_blocks_before_after_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_before_after_order_idx" ON "pages_blocks_before_after" USING btree ("_order");
  CREATE INDEX "pages_blocks_before_after_parent_id_idx" ON "pages_blocks_before_after" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_before_after_path_idx" ON "pages_blocks_before_after" USING btree ("_path");
  CREATE INDEX "pages_blocks_before_after_before_image_idx" ON "pages_blocks_before_after" USING btree ("before_image_id");
  CREATE INDEX "pages_blocks_before_after_after_image_idx" ON "pages_blocks_before_after" USING btree ("after_image_id");
  CREATE INDEX "pages_blocks_portal_screens_order_idx" ON "pages_blocks_portal_screens" USING btree ("_order");
  CREATE INDEX "pages_blocks_portal_screens_parent_id_idx" ON "pages_blocks_portal_screens" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portal_screens_image_idx" ON "pages_blocks_portal_screens" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portal_order_idx" ON "pages_blocks_portal" USING btree ("_order");
  CREATE INDEX "pages_blocks_portal_parent_id_idx" ON "pages_blocks_portal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portal_path_idx" ON "pages_blocks_portal" USING btree ("_path");
  CREATE INDEX "pages_blocks_benefits_items_order_idx" ON "pages_blocks_benefits_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_benefits_items_parent_id_idx" ON "pages_blocks_benefits_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_benefits_order_idx" ON "pages_blocks_benefits" USING btree ("_order");
  CREATE INDEX "pages_blocks_benefits_parent_id_idx" ON "pages_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_benefits_path_idx" ON "pages_blocks_benefits" USING btree ("_path");
  CREATE INDEX "pages_blocks_benefits_banner_banner_image_idx" ON "pages_blocks_benefits" USING btree ("banner_image_id");
  CREATE INDEX "pages_blocks_book_demo_steps_order_idx" ON "pages_blocks_book_demo_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_book_demo_steps_parent_id_idx" ON "pages_blocks_book_demo_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_book_demo_highlights_order_idx" ON "pages_blocks_book_demo_highlights" USING btree ("_order");
  CREATE INDEX "pages_blocks_book_demo_highlights_parent_id_idx" ON "pages_blocks_book_demo_highlights" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_book_demo_order_idx" ON "pages_blocks_book_demo" USING btree ("_order");
  CREATE INDEX "pages_blocks_book_demo_parent_id_idx" ON "pages_blocks_book_demo" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_book_demo_path_idx" ON "pages_blocks_book_demo" USING btree ("_path");
  CREATE INDEX "pages_blocks_hardware_stats_order_idx" ON "pages_blocks_hardware_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_hardware_stats_parent_id_idx" ON "pages_blocks_hardware_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hardware_specs_order_idx" ON "pages_blocks_hardware_specs" USING btree ("_order");
  CREATE INDEX "pages_blocks_hardware_specs_parent_id_idx" ON "pages_blocks_hardware_specs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hardware_order_idx" ON "pages_blocks_hardware" USING btree ("_order");
  CREATE INDEX "pages_blocks_hardware_parent_id_idx" ON "pages_blocks_hardware" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hardware_path_idx" ON "pages_blocks_hardware" USING btree ("_path");
  CREATE INDEX "pages_blocks_hardware_image_idx" ON "pages_blocks_hardware" USING btree ("image_id");
  CREATE INDEX "pages_blocks_comparison_table_rows_order_idx" ON "pages_blocks_comparison_table_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_comparison_table_rows_parent_id_idx" ON "pages_blocks_comparison_table_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_comparison_table_order_idx" ON "pages_blocks_comparison_table" USING btree ("_order");
  CREATE INDEX "pages_blocks_comparison_table_parent_id_idx" ON "pages_blocks_comparison_table" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_comparison_table_path_idx" ON "pages_blocks_comparison_table" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_meta_custom_meta_tags_order_idx" ON "pages_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "pages_meta_custom_meta_tags_parent_id_idx" ON "pages_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_texts_order_parent" ON "pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "_pages_v_blocks_hero_bullets_order_idx" ON "_pages_v_blocks_hero_bullets" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_bullets_parent_id_idx" ON "_pages_v_blocks_hero_bullets" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_before_after_challenges_items_order_idx" ON "_pages_v_blocks_before_after_challenges_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_before_after_challenges_items_parent_id_idx" ON "_pages_v_blocks_before_after_challenges_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_before_after_solutions_items_order_idx" ON "_pages_v_blocks_before_after_solutions_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_before_after_solutions_items_parent_id_idx" ON "_pages_v_blocks_before_after_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_before_after_order_idx" ON "_pages_v_blocks_before_after" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_before_after_parent_id_idx" ON "_pages_v_blocks_before_after" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_before_after_path_idx" ON "_pages_v_blocks_before_after" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_before_after_before_image_idx" ON "_pages_v_blocks_before_after" USING btree ("before_image_id");
  CREATE INDEX "_pages_v_blocks_before_after_after_image_idx" ON "_pages_v_blocks_before_after" USING btree ("after_image_id");
  CREATE INDEX "_pages_v_blocks_portal_screens_order_idx" ON "_pages_v_blocks_portal_screens" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portal_screens_parent_id_idx" ON "_pages_v_blocks_portal_screens" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portal_screens_image_idx" ON "_pages_v_blocks_portal_screens" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_portal_order_idx" ON "_pages_v_blocks_portal" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portal_parent_id_idx" ON "_pages_v_blocks_portal" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portal_path_idx" ON "_pages_v_blocks_portal" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_benefits_items_order_idx" ON "_pages_v_blocks_benefits_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_benefits_items_parent_id_idx" ON "_pages_v_blocks_benefits_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_benefits_order_idx" ON "_pages_v_blocks_benefits" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_benefits_parent_id_idx" ON "_pages_v_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_benefits_path_idx" ON "_pages_v_blocks_benefits" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_benefits_banner_banner_image_idx" ON "_pages_v_blocks_benefits" USING btree ("banner_image_id");
  CREATE INDEX "_pages_v_blocks_book_demo_steps_order_idx" ON "_pages_v_blocks_book_demo_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_book_demo_steps_parent_id_idx" ON "_pages_v_blocks_book_demo_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_book_demo_highlights_order_idx" ON "_pages_v_blocks_book_demo_highlights" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_book_demo_highlights_parent_id_idx" ON "_pages_v_blocks_book_demo_highlights" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_book_demo_order_idx" ON "_pages_v_blocks_book_demo" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_book_demo_parent_id_idx" ON "_pages_v_blocks_book_demo" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_book_demo_path_idx" ON "_pages_v_blocks_book_demo" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hardware_stats_order_idx" ON "_pages_v_blocks_hardware_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hardware_stats_parent_id_idx" ON "_pages_v_blocks_hardware_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hardware_specs_order_idx" ON "_pages_v_blocks_hardware_specs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hardware_specs_parent_id_idx" ON "_pages_v_blocks_hardware_specs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hardware_order_idx" ON "_pages_v_blocks_hardware" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hardware_parent_id_idx" ON "_pages_v_blocks_hardware" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hardware_path_idx" ON "_pages_v_blocks_hardware" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hardware_image_idx" ON "_pages_v_blocks_hardware" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_comparison_table_rows_order_idx" ON "_pages_v_blocks_comparison_table_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_comparison_table_rows_parent_id_idx" ON "_pages_v_blocks_comparison_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_comparison_table_order_idx" ON "_pages_v_blocks_comparison_table" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_comparison_table_parent_id_idx" ON "_pages_v_blocks_comparison_table" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_comparison_table_path_idx" ON "_pages_v_blocks_comparison_table" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_version_meta_custom_meta_tags_order_idx" ON "_pages_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_pages_v_version_meta_custom_meta_tags_parent_id_idx" ON "_pages_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_texts_order_parent" ON "_pages_v_texts" USING btree ("order","parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  DROP TYPE "public"."enum_home_page_portal_screens_icon";
  DROP TYPE "public"."enum_home_page_benefits_items_icon";
  DROP TYPE "public"."enum_home_page_demo_steps_icon";
  DROP TYPE "public"."enum_home_page_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_home_page_status";
  DROP TYPE "public"."enum__home_page_v_version_portal_screens_icon";
  DROP TYPE "public"."enum__home_page_v_version_benefits_items_icon";
  DROP TYPE "public"."enum__home_page_v_version_demo_steps_icon";
  DROP TYPE "public"."enum__home_page_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__home_page_v_version_status";
  DROP TYPE "public"."enum_features_page_hardware_specs_icon";
  DROP TYPE "public"."enum_features_page_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_features_page_status";
  DROP TYPE "public"."enum__features_page_v_version_hardware_specs_icon";
  DROP TYPE "public"."enum__features_page_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__features_page_v_version_status";
  DROP TYPE "public"."enum_faq_page_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_faq_page_status";
  DROP TYPE "public"."enum__faq_page_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__faq_page_v_version_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_home_page_portal_screens_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_home_page_benefits_items_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_home_page_demo_steps_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_home_page_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_home_page_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_page_v_version_portal_screens_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__home_page_v_version_benefits_items_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__home_page_v_version_demo_steps_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__home_page_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__home_page_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_features_page_hardware_specs_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_features_page_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_features_page_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__features_page_v_version_hardware_specs_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__features_page_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__features_page_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_faq_page_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum_faq_page_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__faq_page_v_version_meta_sitemap_change_frequency" AS ENUM('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
  CREATE TYPE "public"."enum__faq_page_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "home_page_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "home_page_comparison_challenges_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "home_page_comparison_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "home_page_portal_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab" varchar,
  	"icon" "enum_home_page_portal_screens_icon",
  	"path" varchar,
  	"label" varchar,
  	"caption" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "home_page_benefits_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_home_page_benefits_items_icon",
  	"description" varchar,
  	"highlight" varchar
  );
  
  CREATE TABLE "home_page_demo_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_home_page_demo_steps_icon"
  );
  
  CREATE TABLE "home_page_demo_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "home_page_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar,
  	"hero_heading" varchar,
  	"hero_intro" varchar,
  	"hero_primary_cta_label" varchar,
  	"hero_primary_cta_href" varchar,
  	"hero_secondary_cta_label" varchar,
  	"hero_secondary_cta_href" varchar,
  	"hero_image_id" integer,
  	"comparison_intro_chip" varchar,
  	"comparison_intro_heading" varchar,
  	"comparison_intro_description" varchar,
  	"comparison_before_image_id" integer,
  	"comparison_after_image_id" integer,
  	"comparison_before_tab" varchar,
  	"comparison_after_tab" varchar,
  	"comparison_before_badge" varchar,
  	"comparison_after_badge" varchar,
  	"comparison_challenges_title" varchar,
  	"comparison_challenges_subtitle" varchar,
  	"comparison_solutions_title" varchar,
  	"comparison_solutions_subtitle" varchar,
  	"portal_intro_chip" varchar,
  	"portal_intro_heading" varchar,
  	"portal_intro_description" varchar,
  	"portal_url_prefix" varchar,
  	"portal_live_label" varchar,
  	"portal_cta_label" varchar,
  	"portal_cta_href" varchar,
  	"portal_note" varchar,
  	"benefits_intro_chip" varchar,
  	"benefits_intro_heading" varchar,
  	"benefits_intro_description" varchar,
  	"benefits_banner_eyebrow" varchar,
  	"benefits_banner_heading" varchar,
  	"benefits_banner_body" varchar,
  	"benefits_banner_cta_label" varchar,
  	"benefits_banner_cta_href" varchar,
  	"benefits_banner_image_id" integer,
  	"demo_intro_chip" varchar,
  	"demo_intro_heading" varchar,
  	"demo_intro_description" varchar,
  	"demo_highlights_label" varchar,
  	"demo_form_title" varchar,
  	"demo_form_subtitle" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_ignore_title_template" boolean DEFAULT false,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"meta_noindex" boolean DEFAULT false,
  	"meta_nofollow" boolean DEFAULT false,
  	"meta_canonical" varchar,
  	"meta_exclude_from_sitemap" boolean DEFAULT false,
  	"meta_sitemap_priority" numeric,
  	"meta_sitemap_change_frequency" "enum_home_page_meta_sitemap_change_frequency",
  	"meta_json_ld" jsonb,
  	"_status" "enum_home_page_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_home_page_v_version_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_comparison_challenges_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_comparison_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_portal_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab" varchar,
  	"icon" "enum__home_page_v_version_portal_screens_icon",
  	"path" varchar,
  	"label" varchar,
  	"caption" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_benefits_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum__home_page_v_version_benefits_items_icon",
  	"description" varchar,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_demo_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__home_page_v_version_demo_steps_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_demo_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_badge" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_intro" varchar,
  	"version_hero_primary_cta_label" varchar,
  	"version_hero_primary_cta_href" varchar,
  	"version_hero_secondary_cta_label" varchar,
  	"version_hero_secondary_cta_href" varchar,
  	"version_hero_image_id" integer,
  	"version_comparison_intro_chip" varchar,
  	"version_comparison_intro_heading" varchar,
  	"version_comparison_intro_description" varchar,
  	"version_comparison_before_image_id" integer,
  	"version_comparison_after_image_id" integer,
  	"version_comparison_before_tab" varchar,
  	"version_comparison_after_tab" varchar,
  	"version_comparison_before_badge" varchar,
  	"version_comparison_after_badge" varchar,
  	"version_comparison_challenges_title" varchar,
  	"version_comparison_challenges_subtitle" varchar,
  	"version_comparison_solutions_title" varchar,
  	"version_comparison_solutions_subtitle" varchar,
  	"version_portal_intro_chip" varchar,
  	"version_portal_intro_heading" varchar,
  	"version_portal_intro_description" varchar,
  	"version_portal_url_prefix" varchar,
  	"version_portal_live_label" varchar,
  	"version_portal_cta_label" varchar,
  	"version_portal_cta_href" varchar,
  	"version_portal_note" varchar,
  	"version_benefits_intro_chip" varchar,
  	"version_benefits_intro_heading" varchar,
  	"version_benefits_intro_description" varchar,
  	"version_benefits_banner_eyebrow" varchar,
  	"version_benefits_banner_heading" varchar,
  	"version_benefits_banner_body" varchar,
  	"version_benefits_banner_cta_label" varchar,
  	"version_benefits_banner_cta_href" varchar,
  	"version_benefits_banner_image_id" integer,
  	"version_demo_intro_chip" varchar,
  	"version_demo_intro_heading" varchar,
  	"version_demo_intro_description" varchar,
  	"version_demo_highlights_label" varchar,
  	"version_demo_form_title" varchar,
  	"version_demo_form_subtitle" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_ignore_title_template" boolean DEFAULT false,
  	"version_meta_og_title" varchar,
  	"version_meta_og_description" varchar,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_meta_nofollow" boolean DEFAULT false,
  	"version_meta_canonical" varchar,
  	"version_meta_exclude_from_sitemap" boolean DEFAULT false,
  	"version_meta_sitemap_priority" numeric,
  	"version_meta_sitemap_change_frequency" "enum__home_page_v_version_meta_sitemap_change_frequency",
  	"version_meta_json_ld" jsonb,
  	"version__status" "enum__home_page_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_home_page_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "features_page_hardware_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"highlighted" boolean DEFAULT false
  );
  
  CREATE TABLE "features_page_hardware_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_features_page_hardware_specs_icon",
  	"description" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "features_page_matrix_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"area" varchar,
  	"traditional" varchar,
  	"carehub" varchar,
  	"impact" varchar
  );
  
  CREATE TABLE "features_page_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "features_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hardware_intro_chip" varchar,
  	"hardware_intro_heading" varchar,
  	"hardware_intro_description" varchar,
  	"hardware_device_name" varchar,
  	"hardware_model_badge" varchar,
  	"hardware_image_id" integer,
  	"hardware_cta_label" varchar,
  	"matrix_intro_chip" varchar,
  	"matrix_intro_heading" varchar,
  	"matrix_intro_description" varchar,
  	"matrix_columns_area" varchar,
  	"matrix_columns_traditional" varchar,
  	"matrix_columns_carehub" varchar,
  	"matrix_columns_impact" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_ignore_title_template" boolean DEFAULT false,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"meta_noindex" boolean DEFAULT false,
  	"meta_nofollow" boolean DEFAULT false,
  	"meta_canonical" varchar,
  	"meta_exclude_from_sitemap" boolean DEFAULT false,
  	"meta_sitemap_priority" numeric,
  	"meta_sitemap_change_frequency" "enum_features_page_meta_sitemap_change_frequency",
  	"meta_json_ld" jsonb,
  	"_status" "enum_features_page_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "features_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_features_page_v_version_hardware_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"highlighted" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v_version_hardware_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum__features_page_v_version_hardware_specs_icon",
  	"description" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v_version_matrix_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"area" varchar,
  	"traditional" varchar,
  	"carehub" varchar,
  	"impact" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hardware_intro_chip" varchar,
  	"version_hardware_intro_heading" varchar,
  	"version_hardware_intro_description" varchar,
  	"version_hardware_device_name" varchar,
  	"version_hardware_model_badge" varchar,
  	"version_hardware_image_id" integer,
  	"version_hardware_cta_label" varchar,
  	"version_matrix_intro_chip" varchar,
  	"version_matrix_intro_heading" varchar,
  	"version_matrix_intro_description" varchar,
  	"version_matrix_columns_area" varchar,
  	"version_matrix_columns_traditional" varchar,
  	"version_matrix_columns_carehub" varchar,
  	"version_matrix_columns_impact" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_ignore_title_template" boolean DEFAULT false,
  	"version_meta_og_title" varchar,
  	"version_meta_og_description" varchar,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_meta_nofollow" boolean DEFAULT false,
  	"version_meta_canonical" varchar,
  	"version_meta_exclude_from_sitemap" boolean DEFAULT false,
  	"version_meta_sitemap_priority" numeric,
  	"version_meta_sitemap_change_frequency" "enum__features_page_v_version_meta_sitemap_change_frequency",
  	"version_meta_json_ld" jsonb,
  	"version__status" "enum__features_page_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_features_page_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "faq_page_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "faq_page_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "faq_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar,
  	"intro_heading" varchar,
  	"intro_description" varchar,
  	"faq_schema" boolean DEFAULT true,
  	"cta_heading" varchar,
  	"cta_description" varchar,
  	"cta_button_label" varchar,
  	"cta_button_href" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_ignore_title_template" boolean DEFAULT false,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"meta_noindex" boolean DEFAULT false,
  	"meta_nofollow" boolean DEFAULT false,
  	"meta_canonical" varchar,
  	"meta_exclude_from_sitemap" boolean DEFAULT false,
  	"meta_sitemap_priority" numeric,
  	"meta_sitemap_change_frequency" "enum_faq_page_meta_sitemap_change_frequency",
  	"meta_json_ld" jsonb,
  	"_status" "enum_faq_page_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "faq_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_faq_page_v_version_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_faq_page_v_version_meta_custom_meta_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_faq_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_intro_chip" varchar,
  	"version_intro_heading" varchar,
  	"version_intro_description" varchar,
  	"version_faq_schema" boolean DEFAULT true,
  	"version_cta_heading" varchar,
  	"version_cta_description" varchar,
  	"version_cta_button_label" varchar,
  	"version_cta_button_href" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_ignore_title_template" boolean DEFAULT false,
  	"version_meta_og_title" varchar,
  	"version_meta_og_description" varchar,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_meta_nofollow" boolean DEFAULT false,
  	"version_meta_canonical" varchar,
  	"version_meta_exclude_from_sitemap" boolean DEFAULT false,
  	"version_meta_sitemap_priority" numeric,
  	"version_meta_sitemap_change_frequency" "enum__faq_page_v_version_meta_sitemap_change_frequency",
  	"version_meta_json_ld" jsonb,
  	"version__status" "enum__faq_page_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_faq_page_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "pages_blocks_hero_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_before_after_challenges_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_before_after_solutions_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_before_after" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_portal_screens" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_portal" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_benefits_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_book_demo_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_book_demo_highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_book_demo" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hardware_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hardware_specs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hardware" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_comparison_table_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_comparison_table" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_before_after_challenges_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_before_after_solutions_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_before_after" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_portal_screens" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_portal" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_benefits_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_book_demo_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_book_demo_highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_book_demo" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hardware_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hardware_specs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hardware" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_comparison_table_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_comparison_table" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_meta_custom_meta_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_texts" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hero_bullets" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_before_after_challenges_items" CASCADE;
  DROP TABLE "pages_blocks_before_after_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_before_after" CASCADE;
  DROP TABLE "pages_blocks_portal_screens" CASCADE;
  DROP TABLE "pages_blocks_portal" CASCADE;
  DROP TABLE "pages_blocks_benefits_items" CASCADE;
  DROP TABLE "pages_blocks_benefits" CASCADE;
  DROP TABLE "pages_blocks_book_demo_steps" CASCADE;
  DROP TABLE "pages_blocks_book_demo_highlights" CASCADE;
  DROP TABLE "pages_blocks_book_demo" CASCADE;
  DROP TABLE "pages_blocks_hardware_stats" CASCADE;
  DROP TABLE "pages_blocks_hardware_specs" CASCADE;
  DROP TABLE "pages_blocks_hardware" CASCADE;
  DROP TABLE "pages_blocks_comparison_table_rows" CASCADE;
  DROP TABLE "pages_blocks_comparison_table" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_meta_custom_meta_tags" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_texts" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_bullets" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_before_after_challenges_items" CASCADE;
  DROP TABLE "_pages_v_blocks_before_after_solutions_items" CASCADE;
  DROP TABLE "_pages_v_blocks_before_after" CASCADE;
  DROP TABLE "_pages_v_blocks_portal_screens" CASCADE;
  DROP TABLE "_pages_v_blocks_portal" CASCADE;
  DROP TABLE "_pages_v_blocks_benefits_items" CASCADE;
  DROP TABLE "_pages_v_blocks_benefits" CASCADE;
  DROP TABLE "_pages_v_blocks_book_demo_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_book_demo_highlights" CASCADE;
  DROP TABLE "_pages_v_blocks_book_demo" CASCADE;
  DROP TABLE "_pages_v_blocks_hardware_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_hardware_specs" CASCADE;
  DROP TABLE "_pages_v_blocks_hardware" CASCADE;
  DROP TABLE "_pages_v_blocks_comparison_table_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_comparison_table" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_version_meta_custom_meta_tags" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_texts" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
  
  DROP INDEX "payload_locked_documents_rels_pages_id_idx";
  ALTER TABLE "home_page_hero_bullets" ADD CONSTRAINT "home_page_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_comparison_challenges_items" ADD CONSTRAINT "home_page_comparison_challenges_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_comparison_solutions_items" ADD CONSTRAINT "home_page_comparison_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_portal_screens" ADD CONSTRAINT "home_page_portal_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_portal_screens" ADD CONSTRAINT "home_page_portal_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_benefits_items" ADD CONSTRAINT "home_page_benefits_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_demo_steps" ADD CONSTRAINT "home_page_demo_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_demo_highlights" ADD CONSTRAINT "home_page_demo_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_meta_custom_meta_tags" ADD CONSTRAINT "home_page_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_comparison_before_image_id_media_id_fk" FOREIGN KEY ("comparison_before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_comparison_after_image_id_media_id_fk" FOREIGN KEY ("comparison_after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_benefits_banner_image_id_media_id_fk" FOREIGN KEY ("benefits_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_texts" ADD CONSTRAINT "home_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_hero_bullets" ADD CONSTRAINT "_home_page_v_version_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_comparison_challenges_items" ADD CONSTRAINT "_home_page_v_version_comparison_challenges_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_comparison_solutions_items" ADD CONSTRAINT "_home_page_v_version_comparison_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_portal_screens" ADD CONSTRAINT "_home_page_v_version_portal_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_portal_screens" ADD CONSTRAINT "_home_page_v_version_portal_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_benefits_items" ADD CONSTRAINT "_home_page_v_version_benefits_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_demo_steps" ADD CONSTRAINT "_home_page_v_version_demo_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_demo_highlights" ADD CONSTRAINT "_home_page_v_version_demo_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_home_page_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_comparison_before_image_id_media_id_fk" FOREIGN KEY ("version_comparison_before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_comparison_after_image_id_media_id_fk" FOREIGN KEY ("version_comparison_after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_benefits_banner_image_id_media_id_fk" FOREIGN KEY ("version_benefits_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v_texts" ADD CONSTRAINT "_home_page_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_hardware_stats" ADD CONSTRAINT "features_page_hardware_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_hardware_specs" ADD CONSTRAINT "features_page_hardware_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_matrix_rows" ADD CONSTRAINT "features_page_matrix_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_meta_custom_meta_tags" ADD CONSTRAINT "features_page_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page" ADD CONSTRAINT "features_page_hardware_image_id_media_id_fk" FOREIGN KEY ("hardware_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_page" ADD CONSTRAINT "features_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_page_texts" ADD CONSTRAINT "features_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_hardware_stats" ADD CONSTRAINT "_features_page_v_version_hardware_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_hardware_specs" ADD CONSTRAINT "_features_page_v_version_hardware_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_matrix_rows" ADD CONSTRAINT "_features_page_v_version_matrix_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_features_page_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v" ADD CONSTRAINT "_features_page_v_version_hardware_image_id_media_id_fk" FOREIGN KEY ("version_hardware_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_page_v" ADD CONSTRAINT "_features_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_page_v_texts" ADD CONSTRAINT "_features_page_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_page_items" ADD CONSTRAINT "faq_page_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_page_meta_custom_meta_tags" ADD CONSTRAINT "faq_page_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_page" ADD CONSTRAINT "faq_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faq_page_texts" ADD CONSTRAINT "faq_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faq_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_page_v_version_items" ADD CONSTRAINT "_faq_page_v_version_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_page_v_version_meta_custom_meta_tags" ADD CONSTRAINT "_faq_page_v_version_meta_custom_meta_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_page_v" ADD CONSTRAINT "_faq_page_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_faq_page_v_texts" ADD CONSTRAINT "_faq_page_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_faq_page_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "home_page_hero_bullets_order_idx" ON "home_page_hero_bullets" USING btree ("_order");
  CREATE INDEX "home_page_hero_bullets_parent_id_idx" ON "home_page_hero_bullets" USING btree ("_parent_id");
  CREATE INDEX "home_page_comparison_challenges_items_order_idx" ON "home_page_comparison_challenges_items" USING btree ("_order");
  CREATE INDEX "home_page_comparison_challenges_items_parent_id_idx" ON "home_page_comparison_challenges_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_comparison_solutions_items_order_idx" ON "home_page_comparison_solutions_items" USING btree ("_order");
  CREATE INDEX "home_page_comparison_solutions_items_parent_id_idx" ON "home_page_comparison_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_portal_screens_order_idx" ON "home_page_portal_screens" USING btree ("_order");
  CREATE INDEX "home_page_portal_screens_parent_id_idx" ON "home_page_portal_screens" USING btree ("_parent_id");
  CREATE INDEX "home_page_portal_screens_image_idx" ON "home_page_portal_screens" USING btree ("image_id");
  CREATE INDEX "home_page_benefits_items_order_idx" ON "home_page_benefits_items" USING btree ("_order");
  CREATE INDEX "home_page_benefits_items_parent_id_idx" ON "home_page_benefits_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_demo_steps_order_idx" ON "home_page_demo_steps" USING btree ("_order");
  CREATE INDEX "home_page_demo_steps_parent_id_idx" ON "home_page_demo_steps" USING btree ("_parent_id");
  CREATE INDEX "home_page_demo_highlights_order_idx" ON "home_page_demo_highlights" USING btree ("_order");
  CREATE INDEX "home_page_demo_highlights_parent_id_idx" ON "home_page_demo_highlights" USING btree ("_parent_id");
  CREATE INDEX "home_page_meta_custom_meta_tags_order_idx" ON "home_page_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "home_page_meta_custom_meta_tags_parent_id_idx" ON "home_page_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "home_page_hero_hero_image_idx" ON "home_page" USING btree ("hero_image_id");
  CREATE INDEX "home_page_comparison_comparison_before_image_idx" ON "home_page" USING btree ("comparison_before_image_id");
  CREATE INDEX "home_page_comparison_comparison_after_image_idx" ON "home_page" USING btree ("comparison_after_image_id");
  CREATE INDEX "home_page_benefits_banner_benefits_banner_image_idx" ON "home_page" USING btree ("benefits_banner_image_id");
  CREATE INDEX "home_page_meta_meta_image_idx" ON "home_page" USING btree ("meta_image_id");
  CREATE INDEX "home_page__status_idx" ON "home_page" USING btree ("_status");
  CREATE INDEX "home_page_texts_order_parent" ON "home_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "_home_page_v_version_hero_bullets_order_idx" ON "_home_page_v_version_hero_bullets" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_hero_bullets_parent_id_idx" ON "_home_page_v_version_hero_bullets" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_comparison_challenges_items_order_idx" ON "_home_page_v_version_comparison_challenges_items" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_comparison_challenges_items_parent_id_idx" ON "_home_page_v_version_comparison_challenges_items" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_comparison_solutions_items_order_idx" ON "_home_page_v_version_comparison_solutions_items" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_comparison_solutions_items_parent_id_idx" ON "_home_page_v_version_comparison_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_portal_screens_order_idx" ON "_home_page_v_version_portal_screens" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_portal_screens_parent_id_idx" ON "_home_page_v_version_portal_screens" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_portal_screens_image_idx" ON "_home_page_v_version_portal_screens" USING btree ("image_id");
  CREATE INDEX "_home_page_v_version_benefits_items_order_idx" ON "_home_page_v_version_benefits_items" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_benefits_items_parent_id_idx" ON "_home_page_v_version_benefits_items" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_demo_steps_order_idx" ON "_home_page_v_version_demo_steps" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_demo_steps_parent_id_idx" ON "_home_page_v_version_demo_steps" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_demo_highlights_order_idx" ON "_home_page_v_version_demo_highlights" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_demo_highlights_parent_id_idx" ON "_home_page_v_version_demo_highlights" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_meta_custom_meta_tags_order_idx" ON "_home_page_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_home_page_v_version_meta_custom_meta_tags_parent_id_idx" ON "_home_page_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_home_page_v_version_hero_version_hero_image_idx" ON "_home_page_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_home_page_v_version_comparison_version_comparison_befor_idx" ON "_home_page_v" USING btree ("version_comparison_before_image_id");
  CREATE INDEX "_home_page_v_version_comparison_version_comparison_after_idx" ON "_home_page_v" USING btree ("version_comparison_after_image_id");
  CREATE INDEX "_home_page_v_version_benefits_banner_version_benefits_ba_idx" ON "_home_page_v" USING btree ("version_benefits_banner_image_id");
  CREATE INDEX "_home_page_v_version_meta_version_meta_image_idx" ON "_home_page_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_home_page_v_version_version__status_idx" ON "_home_page_v" USING btree ("version__status");
  CREATE INDEX "_home_page_v_created_at_idx" ON "_home_page_v" USING btree ("created_at");
  CREATE INDEX "_home_page_v_updated_at_idx" ON "_home_page_v" USING btree ("updated_at");
  CREATE INDEX "_home_page_v_latest_idx" ON "_home_page_v" USING btree ("latest");
  CREATE INDEX "_home_page_v_autosave_idx" ON "_home_page_v" USING btree ("autosave");
  CREATE INDEX "_home_page_v_texts_order_parent" ON "_home_page_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "features_page_hardware_stats_order_idx" ON "features_page_hardware_stats" USING btree ("_order");
  CREATE INDEX "features_page_hardware_stats_parent_id_idx" ON "features_page_hardware_stats" USING btree ("_parent_id");
  CREATE INDEX "features_page_hardware_specs_order_idx" ON "features_page_hardware_specs" USING btree ("_order");
  CREATE INDEX "features_page_hardware_specs_parent_id_idx" ON "features_page_hardware_specs" USING btree ("_parent_id");
  CREATE INDEX "features_page_matrix_rows_order_idx" ON "features_page_matrix_rows" USING btree ("_order");
  CREATE INDEX "features_page_matrix_rows_parent_id_idx" ON "features_page_matrix_rows" USING btree ("_parent_id");
  CREATE INDEX "features_page_meta_custom_meta_tags_order_idx" ON "features_page_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "features_page_meta_custom_meta_tags_parent_id_idx" ON "features_page_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "features_page_hardware_hardware_image_idx" ON "features_page" USING btree ("hardware_image_id");
  CREATE INDEX "features_page_meta_meta_image_idx" ON "features_page" USING btree ("meta_image_id");
  CREATE INDEX "features_page__status_idx" ON "features_page" USING btree ("_status");
  CREATE INDEX "features_page_texts_order_parent" ON "features_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "_features_page_v_version_hardware_stats_order_idx" ON "_features_page_v_version_hardware_stats" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_hardware_stats_parent_id_idx" ON "_features_page_v_version_hardware_stats" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_hardware_specs_order_idx" ON "_features_page_v_version_hardware_specs" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_hardware_specs_parent_id_idx" ON "_features_page_v_version_hardware_specs" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_matrix_rows_order_idx" ON "_features_page_v_version_matrix_rows" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_matrix_rows_parent_id_idx" ON "_features_page_v_version_matrix_rows" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_meta_custom_meta_tags_order_idx" ON "_features_page_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_meta_custom_meta_tags_parent_id_idx" ON "_features_page_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_hardware_version_hardware_image_idx" ON "_features_page_v" USING btree ("version_hardware_image_id");
  CREATE INDEX "_features_page_v_version_meta_version_meta_image_idx" ON "_features_page_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_features_page_v_version_version__status_idx" ON "_features_page_v" USING btree ("version__status");
  CREATE INDEX "_features_page_v_created_at_idx" ON "_features_page_v" USING btree ("created_at");
  CREATE INDEX "_features_page_v_updated_at_idx" ON "_features_page_v" USING btree ("updated_at");
  CREATE INDEX "_features_page_v_latest_idx" ON "_features_page_v" USING btree ("latest");
  CREATE INDEX "_features_page_v_autosave_idx" ON "_features_page_v" USING btree ("autosave");
  CREATE INDEX "_features_page_v_texts_order_parent" ON "_features_page_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "faq_page_items_order_idx" ON "faq_page_items" USING btree ("_order");
  CREATE INDEX "faq_page_items_parent_id_idx" ON "faq_page_items" USING btree ("_parent_id");
  CREATE INDEX "faq_page_meta_custom_meta_tags_order_idx" ON "faq_page_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "faq_page_meta_custom_meta_tags_parent_id_idx" ON "faq_page_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "faq_page_meta_meta_image_idx" ON "faq_page" USING btree ("meta_image_id");
  CREATE INDEX "faq_page__status_idx" ON "faq_page" USING btree ("_status");
  CREATE INDEX "faq_page_texts_order_parent" ON "faq_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "_faq_page_v_version_items_order_idx" ON "_faq_page_v_version_items" USING btree ("_order");
  CREATE INDEX "_faq_page_v_version_items_parent_id_idx" ON "_faq_page_v_version_items" USING btree ("_parent_id");
  CREATE INDEX "_faq_page_v_version_meta_custom_meta_tags_order_idx" ON "_faq_page_v_version_meta_custom_meta_tags" USING btree ("_order");
  CREATE INDEX "_faq_page_v_version_meta_custom_meta_tags_parent_id_idx" ON "_faq_page_v_version_meta_custom_meta_tags" USING btree ("_parent_id");
  CREATE INDEX "_faq_page_v_version_meta_version_meta_image_idx" ON "_faq_page_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_faq_page_v_version_version__status_idx" ON "_faq_page_v" USING btree ("version__status");
  CREATE INDEX "_faq_page_v_created_at_idx" ON "_faq_page_v" USING btree ("created_at");
  CREATE INDEX "_faq_page_v_updated_at_idx" ON "_faq_page_v" USING btree ("updated_at");
  CREATE INDEX "_faq_page_v_latest_idx" ON "_faq_page_v" USING btree ("latest");
  CREATE INDEX "_faq_page_v_autosave_idx" ON "_faq_page_v" USING btree ("autosave");
  CREATE INDEX "_faq_page_v_texts_order_parent" ON "_faq_page_v_texts" USING btree ("order","parent_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "pages_id";
  DROP TYPE "public"."enum_pages_blocks_portal_screens_icon";
  DROP TYPE "public"."enum_pages_blocks_benefits_items_icon";
  DROP TYPE "public"."enum_pages_blocks_book_demo_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_hardware_specs_icon";
  DROP TYPE "public"."enum_pages_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_portal_screens_icon";
  DROP TYPE "public"."enum__pages_v_blocks_benefits_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_book_demo_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_hardware_specs_icon";
  DROP TYPE "public"."enum__pages_v_version_meta_sitemap_change_frequency";
  DROP TYPE "public"."enum__pages_v_version_status";`)
}

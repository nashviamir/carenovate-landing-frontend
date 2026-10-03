import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_home_page_portal_screens_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_home_page_benefits_items_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_home_page_demo_steps_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__home_page_v_version_portal_screens_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__home_page_v_version_benefits_items_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__home_page_v_version_demo_steps_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum_features_page_hardware_specs_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TYPE "public"."enum__features_page_v_version_hardware_specs_icon" AS ENUM('Activity', 'Award', 'Calendar', 'CheckCircle2', 'FileCheck', 'FileText', 'Flag', 'GraduationCap', 'Headphones', 'HeartPulse', 'Lock', 'Monitor', 'MonitorSmartphone', 'Pill', 'RefreshCw', 'ScanLine', 'ShieldCheck', 'UserCircle', 'Users', 'Zap');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_comparison_challenges_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_comparison_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_portal_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab" varchar NOT NULL,
  	"icon" "enum_home_page_portal_screens_icon" NOT NULL,
  	"path" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"caption" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "home_page_benefits_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon" "enum_home_page_benefits_items_icon" NOT NULL,
  	"description" varchar NOT NULL,
  	"highlight" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_demo_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon" "enum_home_page_demo_steps_icon" NOT NULL
  );
  
  CREATE TABLE "home_page_demo_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar NOT NULL,
  	"hero_heading" varchar NOT NULL,
  	"hero_intro" varchar NOT NULL,
  	"hero_primary_cta_label" varchar NOT NULL,
  	"hero_primary_cta_href" varchar NOT NULL,
  	"hero_secondary_cta_label" varchar NOT NULL,
  	"hero_secondary_cta_href" varchar NOT NULL,
  	"hero_image_id" integer NOT NULL,
  	"comparison_intro_chip" varchar NOT NULL,
  	"comparison_intro_heading" varchar NOT NULL,
  	"comparison_intro_description" varchar NOT NULL,
  	"comparison_before_image_id" integer NOT NULL,
  	"comparison_after_image_id" integer NOT NULL,
  	"comparison_before_tab" varchar NOT NULL,
  	"comparison_after_tab" varchar NOT NULL,
  	"comparison_before_badge" varchar NOT NULL,
  	"comparison_after_badge" varchar NOT NULL,
  	"comparison_challenges_title" varchar NOT NULL,
  	"comparison_challenges_subtitle" varchar NOT NULL,
  	"comparison_solutions_title" varchar NOT NULL,
  	"comparison_solutions_subtitle" varchar NOT NULL,
  	"portal_intro_chip" varchar NOT NULL,
  	"portal_intro_heading" varchar NOT NULL,
  	"portal_intro_description" varchar NOT NULL,
  	"portal_url_prefix" varchar NOT NULL,
  	"portal_live_label" varchar NOT NULL,
  	"portal_cta_label" varchar NOT NULL,
  	"portal_cta_href" varchar NOT NULL,
  	"portal_note" varchar NOT NULL,
  	"benefits_intro_chip" varchar NOT NULL,
  	"benefits_intro_heading" varchar NOT NULL,
  	"benefits_intro_description" varchar NOT NULL,
  	"benefits_banner_eyebrow" varchar NOT NULL,
  	"benefits_banner_heading" varchar NOT NULL,
  	"benefits_banner_body" varchar NOT NULL,
  	"benefits_banner_cta_label" varchar NOT NULL,
  	"benefits_banner_cta_href" varchar NOT NULL,
  	"benefits_banner_image_id" integer NOT NULL,
  	"demo_intro_chip" varchar NOT NULL,
  	"demo_intro_heading" varchar NOT NULL,
  	"demo_intro_description" varchar NOT NULL,
  	"demo_highlights_label" varchar NOT NULL,
  	"demo_form_title" varchar NOT NULL,
  	"demo_form_subtitle" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_home_page_v_version_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_comparison_challenges_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_comparison_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_portal_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab" varchar NOT NULL,
  	"icon" "enum__home_page_v_version_portal_screens_icon" NOT NULL,
  	"path" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"caption" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_benefits_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon" "enum__home_page_v_version_benefits_items_icon" NOT NULL,
  	"description" varchar NOT NULL,
  	"highlight" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_demo_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon" "enum__home_page_v_version_demo_steps_icon" NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v_version_demo_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_badge" varchar NOT NULL,
  	"version_hero_heading" varchar NOT NULL,
  	"version_hero_intro" varchar NOT NULL,
  	"version_hero_primary_cta_label" varchar NOT NULL,
  	"version_hero_primary_cta_href" varchar NOT NULL,
  	"version_hero_secondary_cta_label" varchar NOT NULL,
  	"version_hero_secondary_cta_href" varchar NOT NULL,
  	"version_hero_image_id" integer NOT NULL,
  	"version_comparison_intro_chip" varchar NOT NULL,
  	"version_comparison_intro_heading" varchar NOT NULL,
  	"version_comparison_intro_description" varchar NOT NULL,
  	"version_comparison_before_image_id" integer NOT NULL,
  	"version_comparison_after_image_id" integer NOT NULL,
  	"version_comparison_before_tab" varchar NOT NULL,
  	"version_comparison_after_tab" varchar NOT NULL,
  	"version_comparison_before_badge" varchar NOT NULL,
  	"version_comparison_after_badge" varchar NOT NULL,
  	"version_comparison_challenges_title" varchar NOT NULL,
  	"version_comparison_challenges_subtitle" varchar NOT NULL,
  	"version_comparison_solutions_title" varchar NOT NULL,
  	"version_comparison_solutions_subtitle" varchar NOT NULL,
  	"version_portal_intro_chip" varchar NOT NULL,
  	"version_portal_intro_heading" varchar NOT NULL,
  	"version_portal_intro_description" varchar NOT NULL,
  	"version_portal_url_prefix" varchar NOT NULL,
  	"version_portal_live_label" varchar NOT NULL,
  	"version_portal_cta_label" varchar NOT NULL,
  	"version_portal_cta_href" varchar NOT NULL,
  	"version_portal_note" varchar NOT NULL,
  	"version_benefits_intro_chip" varchar NOT NULL,
  	"version_benefits_intro_heading" varchar NOT NULL,
  	"version_benefits_intro_description" varchar NOT NULL,
  	"version_benefits_banner_eyebrow" varchar NOT NULL,
  	"version_benefits_banner_heading" varchar NOT NULL,
  	"version_benefits_banner_body" varchar NOT NULL,
  	"version_benefits_banner_cta_label" varchar NOT NULL,
  	"version_benefits_banner_cta_href" varchar NOT NULL,
  	"version_benefits_banner_image_id" integer NOT NULL,
  	"version_demo_intro_chip" varchar NOT NULL,
  	"version_demo_intro_heading" varchar NOT NULL,
  	"version_demo_intro_description" varchar NOT NULL,
  	"version_demo_highlights_label" varchar NOT NULL,
  	"version_demo_form_title" varchar NOT NULL,
  	"version_demo_form_subtitle" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "features_page_hardware_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"highlighted" boolean DEFAULT false
  );
  
  CREATE TABLE "features_page_hardware_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon" "enum_features_page_hardware_specs_icon" NOT NULL,
  	"description" varchar NOT NULL,
  	"detail" varchar NOT NULL
  );
  
  CREATE TABLE "features_page_matrix_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"area" varchar NOT NULL,
  	"traditional" varchar NOT NULL,
  	"carehub" varchar NOT NULL,
  	"impact" varchar NOT NULL
  );
  
  CREATE TABLE "features_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hardware_intro_chip" varchar NOT NULL,
  	"hardware_intro_heading" varchar NOT NULL,
  	"hardware_intro_description" varchar NOT NULL,
  	"hardware_device_name" varchar NOT NULL,
  	"hardware_model_badge" varchar NOT NULL,
  	"hardware_image_id" integer NOT NULL,
  	"hardware_cta_label" varchar NOT NULL,
  	"matrix_intro_chip" varchar NOT NULL,
  	"matrix_intro_heading" varchar NOT NULL,
  	"matrix_intro_description" varchar NOT NULL,
  	"matrix_columns_area" varchar NOT NULL,
  	"matrix_columns_traditional" varchar NOT NULL,
  	"matrix_columns_carehub" varchar NOT NULL,
  	"matrix_columns_impact" varchar NOT NULL,
  	"meta_title" varchar NOT NULL,
  	"meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_features_page_v_version_hardware_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"highlighted" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v_version_hardware_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon" "enum__features_page_v_version_hardware_specs_icon" NOT NULL,
  	"description" varchar NOT NULL,
  	"detail" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v_version_matrix_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"area" varchar NOT NULL,
  	"traditional" varchar NOT NULL,
  	"carehub" varchar NOT NULL,
  	"impact" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hardware_intro_chip" varchar NOT NULL,
  	"version_hardware_intro_heading" varchar NOT NULL,
  	"version_hardware_intro_description" varchar NOT NULL,
  	"version_hardware_device_name" varchar NOT NULL,
  	"version_hardware_model_badge" varchar NOT NULL,
  	"version_hardware_image_id" integer NOT NULL,
  	"version_hardware_cta_label" varchar NOT NULL,
  	"version_matrix_intro_chip" varchar NOT NULL,
  	"version_matrix_intro_heading" varchar NOT NULL,
  	"version_matrix_intro_description" varchar NOT NULL,
  	"version_matrix_columns_area" varchar NOT NULL,
  	"version_matrix_columns_traditional" varchar NOT NULL,
  	"version_matrix_columns_carehub" varchar NOT NULL,
  	"version_matrix_columns_impact" varchar NOT NULL,
  	"version_meta_title" varchar NOT NULL,
  	"version_meta_description" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faq_page_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "faq_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_chip" varchar NOT NULL,
  	"intro_heading" varchar NOT NULL,
  	"intro_description" varchar NOT NULL,
  	"cta_heading" varchar NOT NULL,
  	"cta_description" varchar NOT NULL,
  	"cta_button_label" varchar NOT NULL,
  	"cta_button_href" varchar NOT NULL,
  	"meta_title" varchar NOT NULL,
  	"meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_faq_page_v_version_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_faq_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_intro_chip" varchar NOT NULL,
  	"version_intro_heading" varchar NOT NULL,
  	"version_intro_description" varchar NOT NULL,
  	"version_cta_heading" varchar NOT NULL,
  	"version_cta_description" varchar NOT NULL,
  	"version_cta_button_label" varchar NOT NULL,
  	"version_cta_button_href" varchar NOT NULL,
  	"version_meta_title" varchar NOT NULL,
  	"version_meta_description" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"cta_mobile_label" varchar NOT NULL,
  	"cta_href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_header_v_version_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_header_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_logo_id" integer NOT NULL,
  	"version_cta_label" varchar NOT NULL,
  	"version_cta_mobile_label" varchar NOT NULL,
  	"version_cta_href" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "footer_solutions_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "footer_compliance_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "footer_company_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"brand_name" varchar NOT NULL,
  	"brand_suffix" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"linkedin_label" varchar NOT NULL,
  	"solutions_heading" varchar NOT NULL,
  	"compliance_heading" varchar NOT NULL,
  	"company_heading" varchar NOT NULL,
  	"disclaimer" varchar NOT NULL,
  	"copyright" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_footer_v_version_solutions_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_compliance_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_company_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_brand_name" varchar NOT NULL,
  	"version_brand_suffix" varchar NOT NULL,
  	"version_description" varchar NOT NULL,
  	"version_linkedin_label" varchar NOT NULL,
  	"version_solutions_heading" varchar NOT NULL,
  	"version_compliance_heading" varchar NOT NULL,
  	"version_company_heading" varchar NOT NULL,
  	"version_disclaimer" varchar NOT NULL,
  	"version_copyright" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_site_name" varchar NOT NULL,
  	"seo_title" varchar NOT NULL,
  	"seo_title_template" varchar NOT NULL,
  	"seo_description" varchar NOT NULL,
  	"seo_image_id" integer NOT NULL,
  	"organization_name" varchar NOT NULL,
  	"contact_phone_label" varchar NOT NULL,
  	"contact_phone_href" varchar NOT NULL,
  	"contact_email" varchar NOT NULL,
  	"contact_address" varchar NOT NULL,
  	"contact_linkedin_url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_site_name" varchar NOT NULL,
  	"version_seo_title" varchar NOT NULL,
  	"version_seo_title_template" varchar NOT NULL,
  	"version_seo_description" varchar NOT NULL,
  	"version_seo_image_id" integer NOT NULL,
  	"version_organization_name" varchar NOT NULL,
  	"version_contact_phone_label" varchar NOT NULL,
  	"version_contact_phone_href" varchar NOT NULL,
  	"version_contact_email" varchar NOT NULL,
  	"version_contact_address" varchar NOT NULL,
  	"version_contact_linkedin_url" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_site_settings_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_hero_bullets" ADD CONSTRAINT "home_page_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_comparison_challenges_items" ADD CONSTRAINT "home_page_comparison_challenges_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_comparison_solutions_items" ADD CONSTRAINT "home_page_comparison_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_portal_screens" ADD CONSTRAINT "home_page_portal_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_portal_screens" ADD CONSTRAINT "home_page_portal_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_benefits_items" ADD CONSTRAINT "home_page_benefits_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_demo_steps" ADD CONSTRAINT "home_page_demo_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_demo_highlights" ADD CONSTRAINT "home_page_demo_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_comparison_before_image_id_media_id_fk" FOREIGN KEY ("comparison_before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_comparison_after_image_id_media_id_fk" FOREIGN KEY ("comparison_after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_benefits_banner_image_id_media_id_fk" FOREIGN KEY ("benefits_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_hero_bullets" ADD CONSTRAINT "_home_page_v_version_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_comparison_challenges_items" ADD CONSTRAINT "_home_page_v_version_comparison_challenges_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_comparison_solutions_items" ADD CONSTRAINT "_home_page_v_version_comparison_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_portal_screens" ADD CONSTRAINT "_home_page_v_version_portal_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_portal_screens" ADD CONSTRAINT "_home_page_v_version_portal_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_benefits_items" ADD CONSTRAINT "_home_page_v_version_benefits_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_demo_steps" ADD CONSTRAINT "_home_page_v_version_demo_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v_version_demo_highlights" ADD CONSTRAINT "_home_page_v_version_demo_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_comparison_before_image_id_media_id_fk" FOREIGN KEY ("version_comparison_before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_comparison_after_image_id_media_id_fk" FOREIGN KEY ("version_comparison_after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_page_v" ADD CONSTRAINT "_home_page_v_version_benefits_banner_image_id_media_id_fk" FOREIGN KEY ("version_benefits_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_page_hardware_stats" ADD CONSTRAINT "features_page_hardware_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_hardware_specs" ADD CONSTRAINT "features_page_hardware_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page_matrix_rows" ADD CONSTRAINT "features_page_matrix_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_page" ADD CONSTRAINT "features_page_hardware_image_id_media_id_fk" FOREIGN KEY ("hardware_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_hardware_stats" ADD CONSTRAINT "_features_page_v_version_hardware_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_hardware_specs" ADD CONSTRAINT "_features_page_v_version_hardware_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v_version_matrix_rows" ADD CONSTRAINT "_features_page_v_version_matrix_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_page_v" ADD CONSTRAINT "_features_page_v_version_hardware_image_id_media_id_fk" FOREIGN KEY ("version_hardware_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faq_page_items" ADD CONSTRAINT "faq_page_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_page_v_version_items" ADD CONSTRAINT "_faq_page_v_version_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_links" ADD CONSTRAINT "header_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_header_v_version_nav_links" ADD CONSTRAINT "_header_v_version_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v" ADD CONSTRAINT "_header_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_solutions_links" ADD CONSTRAINT "footer_solutions_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_compliance_items" ADD CONSTRAINT "footer_compliance_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_company_links" ADD CONSTRAINT "footer_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_solutions_links" ADD CONSTRAINT "_footer_v_version_solutions_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_compliance_items" ADD CONSTRAINT "_footer_v_version_compliance_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_company_links" ADD CONSTRAINT "_footer_v_version_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_legal_links" ADD CONSTRAINT "_footer_v_version_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_texts" ADD CONSTRAINT "site_settings_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_texts" ADD CONSTRAINT "_site_settings_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
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
  CREATE INDEX "home_page_hero_hero_image_idx" ON "home_page" USING btree ("hero_image_id");
  CREATE INDEX "home_page_comparison_comparison_before_image_idx" ON "home_page" USING btree ("comparison_before_image_id");
  CREATE INDEX "home_page_comparison_comparison_after_image_idx" ON "home_page" USING btree ("comparison_after_image_id");
  CREATE INDEX "home_page_benefits_banner_benefits_banner_image_idx" ON "home_page" USING btree ("benefits_banner_image_id");
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
  CREATE INDEX "_home_page_v_version_hero_version_hero_image_idx" ON "_home_page_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_home_page_v_version_comparison_version_comparison_befor_idx" ON "_home_page_v" USING btree ("version_comparison_before_image_id");
  CREATE INDEX "_home_page_v_version_comparison_version_comparison_after_idx" ON "_home_page_v" USING btree ("version_comparison_after_image_id");
  CREATE INDEX "_home_page_v_version_benefits_banner_version_benefits_ba_idx" ON "_home_page_v" USING btree ("version_benefits_banner_image_id");
  CREATE INDEX "_home_page_v_created_at_idx" ON "_home_page_v" USING btree ("created_at");
  CREATE INDEX "_home_page_v_updated_at_idx" ON "_home_page_v" USING btree ("updated_at");
  CREATE INDEX "features_page_hardware_stats_order_idx" ON "features_page_hardware_stats" USING btree ("_order");
  CREATE INDEX "features_page_hardware_stats_parent_id_idx" ON "features_page_hardware_stats" USING btree ("_parent_id");
  CREATE INDEX "features_page_hardware_specs_order_idx" ON "features_page_hardware_specs" USING btree ("_order");
  CREATE INDEX "features_page_hardware_specs_parent_id_idx" ON "features_page_hardware_specs" USING btree ("_parent_id");
  CREATE INDEX "features_page_matrix_rows_order_idx" ON "features_page_matrix_rows" USING btree ("_order");
  CREATE INDEX "features_page_matrix_rows_parent_id_idx" ON "features_page_matrix_rows" USING btree ("_parent_id");
  CREATE INDEX "features_page_hardware_hardware_image_idx" ON "features_page" USING btree ("hardware_image_id");
  CREATE INDEX "_features_page_v_version_hardware_stats_order_idx" ON "_features_page_v_version_hardware_stats" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_hardware_stats_parent_id_idx" ON "_features_page_v_version_hardware_stats" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_hardware_specs_order_idx" ON "_features_page_v_version_hardware_specs" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_hardware_specs_parent_id_idx" ON "_features_page_v_version_hardware_specs" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_matrix_rows_order_idx" ON "_features_page_v_version_matrix_rows" USING btree ("_order");
  CREATE INDEX "_features_page_v_version_matrix_rows_parent_id_idx" ON "_features_page_v_version_matrix_rows" USING btree ("_parent_id");
  CREATE INDEX "_features_page_v_version_hardware_version_hardware_image_idx" ON "_features_page_v" USING btree ("version_hardware_image_id");
  CREATE INDEX "_features_page_v_created_at_idx" ON "_features_page_v" USING btree ("created_at");
  CREATE INDEX "_features_page_v_updated_at_idx" ON "_features_page_v" USING btree ("updated_at");
  CREATE INDEX "faq_page_items_order_idx" ON "faq_page_items" USING btree ("_order");
  CREATE INDEX "faq_page_items_parent_id_idx" ON "faq_page_items" USING btree ("_parent_id");
  CREATE INDEX "_faq_page_v_version_items_order_idx" ON "_faq_page_v_version_items" USING btree ("_order");
  CREATE INDEX "_faq_page_v_version_items_parent_id_idx" ON "_faq_page_v_version_items" USING btree ("_parent_id");
  CREATE INDEX "_faq_page_v_created_at_idx" ON "_faq_page_v" USING btree ("created_at");
  CREATE INDEX "_faq_page_v_updated_at_idx" ON "_faq_page_v" USING btree ("updated_at");
  CREATE INDEX "header_nav_links_order_idx" ON "header_nav_links" USING btree ("_order");
  CREATE INDEX "header_nav_links_parent_id_idx" ON "header_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "_header_v_version_nav_links_order_idx" ON "_header_v_version_nav_links" USING btree ("_order");
  CREATE INDEX "_header_v_version_nav_links_parent_id_idx" ON "_header_v_version_nav_links" USING btree ("_parent_id");
  CREATE INDEX "_header_v_version_version_logo_idx" ON "_header_v" USING btree ("version_logo_id");
  CREATE INDEX "_header_v_created_at_idx" ON "_header_v" USING btree ("created_at");
  CREATE INDEX "_header_v_updated_at_idx" ON "_header_v" USING btree ("updated_at");
  CREATE INDEX "footer_solutions_links_order_idx" ON "footer_solutions_links" USING btree ("_order");
  CREATE INDEX "footer_solutions_links_parent_id_idx" ON "footer_solutions_links" USING btree ("_parent_id");
  CREATE INDEX "footer_compliance_items_order_idx" ON "footer_compliance_items" USING btree ("_order");
  CREATE INDEX "footer_compliance_items_parent_id_idx" ON "footer_compliance_items" USING btree ("_parent_id");
  CREATE INDEX "footer_company_links_order_idx" ON "footer_company_links" USING btree ("_order");
  CREATE INDEX "footer_company_links_parent_id_idx" ON "footer_company_links" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "_footer_v_version_solutions_links_order_idx" ON "_footer_v_version_solutions_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_solutions_links_parent_id_idx" ON "_footer_v_version_solutions_links" USING btree ("_parent_id");
  CREATE INDEX "_footer_v_version_compliance_items_order_idx" ON "_footer_v_version_compliance_items" USING btree ("_order");
  CREATE INDEX "_footer_v_version_compliance_items_parent_id_idx" ON "_footer_v_version_compliance_items" USING btree ("_parent_id");
  CREATE INDEX "_footer_v_version_company_links_order_idx" ON "_footer_v_version_company_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_company_links_parent_id_idx" ON "_footer_v_version_company_links" USING btree ("_parent_id");
  CREATE INDEX "_footer_v_version_legal_links_order_idx" ON "_footer_v_version_legal_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_legal_links_parent_id_idx" ON "_footer_v_version_legal_links" USING btree ("_parent_id");
  CREATE INDEX "_footer_v_created_at_idx" ON "_footer_v" USING btree ("created_at");
  CREATE INDEX "_footer_v_updated_at_idx" ON "_footer_v" USING btree ("updated_at");
  CREATE INDEX "site_settings_seo_seo_image_idx" ON "site_settings" USING btree ("seo_image_id");
  CREATE INDEX "site_settings_texts_order_parent" ON "site_settings_texts" USING btree ("order","parent_id");
  CREATE INDEX "_site_settings_v_version_seo_version_seo_image_idx" ON "_site_settings_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_texts_order_parent" ON "_site_settings_v_texts" USING btree ("order","parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_page_hero_bullets" CASCADE;
  DROP TABLE "home_page_comparison_challenges_items" CASCADE;
  DROP TABLE "home_page_comparison_solutions_items" CASCADE;
  DROP TABLE "home_page_portal_screens" CASCADE;
  DROP TABLE "home_page_benefits_items" CASCADE;
  DROP TABLE "home_page_demo_steps" CASCADE;
  DROP TABLE "home_page_demo_highlights" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "_home_page_v_version_hero_bullets" CASCADE;
  DROP TABLE "_home_page_v_version_comparison_challenges_items" CASCADE;
  DROP TABLE "_home_page_v_version_comparison_solutions_items" CASCADE;
  DROP TABLE "_home_page_v_version_portal_screens" CASCADE;
  DROP TABLE "_home_page_v_version_benefits_items" CASCADE;
  DROP TABLE "_home_page_v_version_demo_steps" CASCADE;
  DROP TABLE "_home_page_v_version_demo_highlights" CASCADE;
  DROP TABLE "_home_page_v" CASCADE;
  DROP TABLE "features_page_hardware_stats" CASCADE;
  DROP TABLE "features_page_hardware_specs" CASCADE;
  DROP TABLE "features_page_matrix_rows" CASCADE;
  DROP TABLE "features_page" CASCADE;
  DROP TABLE "_features_page_v_version_hardware_stats" CASCADE;
  DROP TABLE "_features_page_v_version_hardware_specs" CASCADE;
  DROP TABLE "_features_page_v_version_matrix_rows" CASCADE;
  DROP TABLE "_features_page_v" CASCADE;
  DROP TABLE "faq_page_items" CASCADE;
  DROP TABLE "faq_page" CASCADE;
  DROP TABLE "_faq_page_v_version_items" CASCADE;
  DROP TABLE "_faq_page_v" CASCADE;
  DROP TABLE "header_nav_links" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "_header_v_version_nav_links" CASCADE;
  DROP TABLE "_header_v" CASCADE;
  DROP TABLE "footer_solutions_links" CASCADE;
  DROP TABLE "footer_compliance_items" CASCADE;
  DROP TABLE "footer_company_links" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "_footer_v_version_solutions_links" CASCADE;
  DROP TABLE "_footer_v_version_compliance_items" CASCADE;
  DROP TABLE "_footer_v_version_company_links" CASCADE;
  DROP TABLE "_footer_v_version_legal_links" CASCADE;
  DROP TABLE "_footer_v" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_texts" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "_site_settings_v_texts" CASCADE;
  DROP TYPE "public"."enum_home_page_portal_screens_icon";
  DROP TYPE "public"."enum_home_page_benefits_items_icon";
  DROP TYPE "public"."enum_home_page_demo_steps_icon";
  DROP TYPE "public"."enum__home_page_v_version_portal_screens_icon";
  DROP TYPE "public"."enum__home_page_v_version_benefits_items_icon";
  DROP TYPE "public"."enum__home_page_v_version_demo_steps_icon";
  DROP TYPE "public"."enum_features_page_hardware_specs_icon";
  DROP TYPE "public"."enum__features_page_v_version_hardware_specs_icon";`)
}

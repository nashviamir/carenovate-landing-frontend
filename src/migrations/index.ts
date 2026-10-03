import * as migration_20261003_074757_initial from './20261003_074757_initial';
import * as migration_20261003_080730_live_preview_drafts from './20261003_080730_live_preview_drafts';
import * as migration_20261003_083108_seo_marketing from './20261003_083108_seo_marketing';
import * as migration_20261003_085011_page_builder from './20261003_085011_page_builder';

export const migrations = [
  {
    up: migration_20261003_074757_initial.up,
    down: migration_20261003_074757_initial.down,
    name: '20261003_074757_initial',
  },
  {
    up: migration_20261003_080730_live_preview_drafts.up,
    down: migration_20261003_080730_live_preview_drafts.down,
    name: '20261003_080730_live_preview_drafts',
  },
  {
    up: migration_20261003_083108_seo_marketing.up,
    down: migration_20261003_083108_seo_marketing.down,
    name: '20261003_083108_seo_marketing',
  },
  {
    up: migration_20261003_085011_page_builder.up,
    down: migration_20261003_085011_page_builder.down,
    name: '20261003_085011_page_builder'
  },
];

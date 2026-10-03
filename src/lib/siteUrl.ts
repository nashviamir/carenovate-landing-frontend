/** Public URL of the site, read at request time so one image serves any domain. */
export function siteUrl(): string {
  return (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
}

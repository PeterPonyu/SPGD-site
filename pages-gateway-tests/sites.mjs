/** Live SPGD-site Pages leaf only. Sibling result sites are out of this repo's CI. */

export const SPGD_PAGES_URL = 'https://peterponyu.github.io/SPGD-site/';
export const HOMEPAGE_URL = 'https://peterponyu.github.io/';
export const SCPORTAL_URL = 'https://peterponyu.github.io/scportal/';
export const SPGD_GITHUB_URL = 'https://github.com/PeterPonyu/SPGD-site';

/**
 * Bookmark routes kept as the same figure-free landing (HTTP 200).
 * Do not restore unpublished result pages to make these 404.
 */
export const LANDING_ROUTES = [
  'https://peterponyu.github.io/SPGD-site/',
  'https://peterponyu.github.io/SPGD-site/results/',
  'https://peterponyu.github.io/SPGD-site/methods/',
  'https://peterponyu.github.io/SPGD-site/evidence/',
  'https://peterponyu.github.io/SPGD-site/claims/',
];

/** Unpublished spatial map must stay unpublished (asset 404). */
export const RETIRED_ASSETS = [
  'https://peterponyu.github.io/SPGD-site/media/fig_spatial.png',
];

/**
 * Unpublished-result tokens that must not appear on the public leaf.
 * Align with `scripts/verify-export.mjs` G11/G12.
 */
export const LEAK_TOKENS = [
  '0.203',
  'SOTA',
  'unpublished',
  '未发表空间图',
  'fig_spatial',
  'DestVI',
  'competitive with default',
];

export const ALLOWED_PUBLISHED_ARTICLE_DOIS = new Set([]);

export const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
};

/**
 * SPGD-site — science gateway config (generated; edit in site-configs.mjs + re-scaffold).
 */
export const SITE = {
  slug: 'SPGD-site',
  shortName: "SPGD",
  title: "Spot composition across platform, compartment, and donor",
  kicker: "ZF Lab · spatial deconvolution",
  lead: "SPGD estimates the cell-type mix inside each spatial spot. The object that moves is that mix — imaging platform, tissue compartment, mixing regime, donor — not a rank table on the same mixtures.",
  physicalObject: "Spot-level cell-type composition across openST, MERFISH, and STARmap substrates.",
  primaryClaim: "Spot-level composition error (RMSE) and spatial-map concordance vary by platform, compartment, and donor — no method dominates all three axes under a shared zero-tuning budget.",
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
} as const;

export type BadgeConfig = {
  label: string;
  href?: string;
  enabled: boolean;
  disabledReason?: string;
};

export const BADGES = {
  code: {
    label: 'Code',
    enabled: false,
    disabledReason: 'No anonymous public HTTPS 200 yet',
  } satisfies BadgeConfig,
  site: {
    label: 'Site',
    href: "https://peterponyu.github.io/SPGD-site/",
    enabled: true,
  } satisfies BadgeConfig,
  archive: {
    label: 'Archive',
    href: 'https://doi.org/10.5281/zenodo.21869991',
    enabled: true,
  } satisfies BadgeConfig,
  articleDoi: {
    label: 'Article DOI',
    enabled: false,
    disabledReason: 'On acceptance',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  { href: '/results', label: 'Results', number: '01' },
  { href: '/methods', label: 'Methods', number: '02' },
  { href: '/evidence', label: 'Evidence', number: '03' },
  { href: '/claims', label: 'Claims', number: '04' },
] as const;

export const STATS = [
  {
    "value": "3",
    "label": "platforms: openST, MERFISH, STARmap"
  },
  {
    "value": "8",
    "label": "substrates · same/cross-platform · simulation · donor"
  },
  {
    "value": "0.203",
    "label": "DestVI STARmap RMSE lock"
  }
] as const;

export const HERO_FIGURE = {
  "src": "/media/fig_spatial.png",
  "alt": "Spatial maps of tumor stroma macrophage proportions",
  "caption": "Spatial maps — tumor · stroma · macrophage on real tissue."
} as const;

export const RESULTS_FIGURES = [
  {
    "src": "/media/fig_spatial.png",
    "alt": "Spatial maps of tumor stroma macrophage proportions",
    "caption": "Spatial maps — tumor · stroma · macrophage on real tissue."
  },
  {
    "src": "/media/fig_rare.png",
    "alt": "Rare cell type recovery",
    "caption": "Rare-type mixing regimes on simulated and real ground truth."
  },
  {
    "src": "/media/fig_crossdonor.png",
    "alt": "Cross-donor replication",
    "caption": "Donor held out — spots from one patient, reference from another."
  }
] as const;

export const EVIDENCE_TILES = [
  {
    "value": "0.91 / 0.84 / 0.55",
    "label": "tumor / stroma / macrophage PCC"
  },
  {
    "value": "3/40",
    "label": "controlled paired losses vs comparison panel"
  },
  {
    "value": "0",
    "label": "dataset-specific tuning knobs"
  }
] as const;

export const METHODS_SUMMARY = "Specificity-weighted Poisson self-gating estimator with platform correction. Thirteen methods on eight substrates with bootstrap CIs. Algorithmic constants fixed a priori — training-free, GPU-free, zero-tuning budget versus default comparison configs." as const;

export const CLAIMS = [
  {
    "claim": "Composition RMSE and spatial-map concordance, not leaderboard rank, are the measured objects. A bounded set of paired losses occurs on MERFISH and simulation.",
    "scope": "42-cell rank pool · six metrics · bootstrap CIs.",
    "refutation": "Show a single method dominates all substrates under the same zero-tuning budget."
  },
  {
    "claim": "Spatial maps — not leaderboard rank — carry the biological read.",
    "scope": "Tumor/stroma/macrophage on real tissue; cross-donor replication.",
    "refutation": "Demonstrate rank-only gains without map-level concordance on the locked references."
  }
] as const;

/**
 * SPGD-site — spot-lattice leaf (not a shared science-gateway shell).
 */
export const SITE = {
  slug: 'SPGD-site',
  shortName: 'SPGD',
  mark: 'SP',
  title: 'Spot composition across platform, compartment, and donor',
  kicker: 'Spot lattice · openST / MERFISH / STARmap',
  lead: 'SPGD estimates the cell-type mix inside each spatial spot. The object that moves is that mix — imaging platform, tissue compartment, mixing regime, donor — not a rank table on the same mixtures.',
  physicalObject: 'Spot-level cell-type composition across openST, MERFISH, and STARmap substrates.',
  primaryClaim:
    'This public leaf describes the object only. It does not host article figures or numeric results.',
  landingNote:
    'This repository is the public site leaf for that object. It is not a published article and has no article DOI.',
  repoUrl: 'https://github.com/PeterPonyu/SPGD-site',
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
  externalLeaves: [
    { href: 'https://peterponyu.github.io/', label: 'Lab home' },
    { href: 'https://peterponyu.github.io/scportal/', label: 'Spatial index' },
  ],
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
    href: 'https://peterponyu.github.io/SPGD-site/',
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
    disabledReason: 'No article DOI for this composition leaf',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  {
    href: '/results',
    label: 'Mix',
    number: '01',
    blurb:
      'Spot-level cell-type mix across openST, MERFISH, and STARmap — maps are not served here.',
  },
  {
    href: '/methods',
    label: 'Protocol',
    number: '02',
    blurb: 'How composition is estimated under a zero-tuning budget on those substrates.',
  },
  {
    href: '/evidence',
    label: 'Substrates',
    number: '03',
    blurb: 'Platform, compartment, and donor as axes of the mix, not a rank table.',
  },
  {
    href: '/claims',
    label: 'Limits',
    number: '04',
    blurb: 'Falsifiers for the composition object. This leaf does not host numeric locks.',
  },
] as const;

export type PageBinding = {
  pageId: string;
  runnerId: string;
  dataId: string;
  lawId: string;
  sharedRunner: 'chrome.spot-lattice';
};

export const PAGE_BINDINGS = {
  home: {
    pageId: 'spgd.page.home',
    runnerId: 'spgd.runner.home-spatial-hero',
    dataId: 'spgd.data.hero-fig-spatial',
    lawId: 'spgd.law.mix-varies-by-platform',
    sharedRunner: 'chrome.spot-lattice',
  },
  results: {
    pageId: 'spgd.page.results',
    runnerId: 'spgd.runner.results-maps-rare-donor',
    dataId: 'spgd.data.figures-spatial-rare-crossdonor',
    lawId: 'spgd.law.maps-not-rank',
    sharedRunner: 'chrome.spot-lattice',
  },
  methods: {
    pageId: 'spgd.page.methods',
    runnerId: 'spgd.runner.methods-poisson-gating',
    dataId: 'spgd.data.eight-substrates-13-methods',
    lawId: 'spgd.law.zero-tuning-budget',
    sharedRunner: 'chrome.spot-lattice',
  },
  evidence: {
    pageId: 'spgd.page.evidence',
    runnerId: 'spgd.runner.evidence-pcc-paired-loss',
    dataId: 'spgd.data.tumor-stroma-mac-pcc',
    lawId: 'spgd.law.no-method-dominates-axes',
    sharedRunner: 'chrome.spot-lattice',
  },
  claims: {
    pageId: 'spgd.page.claims',
    runnerId: 'spgd.runner.claims-rmse-and-maps',
    dataId: 'spgd.data.claims-paired-loss-maps',
    lawId: 'spgd.law.falsifiable-spot-composition',
    sharedRunner: 'chrome.spot-lattice',
  },
} as const satisfies Record<string, PageBinding>;

export const STATS = [] as const;
export const HERO_FIGURE = null;
export const RESULTS_FIGURES = [] as const;
export const EVIDENCE_TILES = [] as const;
export const METHODS_SUMMARY = SITE.landingNote;
export const CLAIMS = [] as const;

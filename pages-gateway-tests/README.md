# SPGD-site Pages landing tests (Playwright)

Browser policy gate for **this repo's** GitHub Pages leaf only (`https://peterponyu.github.io/SPGD-site/`). It does **not** crawl sibling paper sites.

Daily cron (`30 3 * * *`) was removed: the leaf is static, push + Pages `workflow_run` already cover regressions, and the old schedule mailed failures whenever sibling chrome drifted.

## Contract

| Check | Rule |
|---|---|
| Home | HTTP 200 figure-free leaf |
| Leak tokens | No `0.203` / `SOTA` / `unpublished` / `未发表空间图` / `fig_spatial` / `<img>` |
| Bookmark routes | `/results/` `/methods/` `/evidence/` `/claims/` stay **200** with the same leaf copy (do not restore result pages) |
| Retired asset | `/media/fig_spatial.png` stays **404** |
| Chrome | Sticky header with Homepage + SCPortal |
| Layout | No horizontal overflow on Home @ 1280 and 390 |
| Packaging | No venue-intended / under review / BibTeX kit |
| Links | Public `PeterPonyu/SPGD-site`; no HetCLOP href; no invented article DOI (Zenodo OK) |

## Run locally

```bash
cd pages-gateway-tests
npm ci
npx playwright install chromium
npm test
```

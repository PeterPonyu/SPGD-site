import { badgeEntries } from '@/lib/badges';
import { withBase } from '@/lib/base-path';
import { ROUTES, SITE } from '@/lib/site';

export default function FooterSitemap() {
  return (
    <footer className="spot-foot">
      <div className="spot-foot-row">
        <span>{SITE.shortName} spot lattice</span>
        {ROUTES.map((route) => (
          <a key={route.href} href={withBase(route.href)}>
            {route.label}
          </a>
        ))}
        {SITE.externalLeaves.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        {badgeEntries()
          .filter(({ badge }) => badge.enabled && badge.href)
          .map(({ key, badge }) => (
            <a key={key} href={badge.href} target="_blank" rel="noopener noreferrer">
              {badge.label}
            </a>
          ))}
      </div>
    </footer>
  );
}

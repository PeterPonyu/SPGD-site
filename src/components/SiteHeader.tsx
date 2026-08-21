'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { badgeEntries, isExternalHref } from '@/lib/badges';
import { ROUTES, SITE } from '@/lib/site';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname() || '/';

  return (
    <header className="spot-head" data-chrome="spot-lattice">
      <div className="spot-head-row">
        <Link href="/" className="spot-mark">
          <span className="spot-mark-disc" aria-hidden="true">
            {SITE.mark}
          </span>
          <span>{SITE.shortName}</span>
        </Link>
        <nav className="spot-nav" aria-label="Spot lattice">
          {ROUTES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? 'is-on' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="spot-chips">
          {SITE.externalLeaves.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          {badgeEntries().map(({ key, badge }) =>
            badge.enabled && badge.href ? (
              <a
                key={key}
                href={badge.href}
                {...(isExternalHref(badge.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {badge.label}
              </a>
            ) : (
              <span key={key} className="spot-chip-off" aria-disabled="true" title={badge.disabledReason}>
                {badge.label}
              </span>
            ),
          )}
        </div>
      </div>
    </header>
  );
}

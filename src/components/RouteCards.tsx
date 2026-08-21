import Link from 'next/link';
import { ROUTES } from '@/lib/site';

export default function RouteCards() {
  return (
    <div className="spot-grid">
      {ROUTES.map((route) => (
        <Link key={route.href} href={route.href} className="spot-card">
          <span className="spot-num">{route.number}</span>
          <div>
            <h3>{route.label}</h3>
            <p>{route.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

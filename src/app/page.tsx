import FigurePanel from '@/components/FigurePanel';
import { ClaimBlock } from '@/components/PageShell';
import RouteCards from '@/components/RouteCards';
import StatTile from '@/components/StatTile';
import { HERO_FIGURE, SITE, STATS } from '@/lib/site';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
        {SITE.kicker}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{SITE.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-700">{SITE.lead}</p>

      <section className="mt-8" aria-label="Spatial map hero">
        <FigurePanel src={HERO_FIGURE.src} alt={HERO_FIGURE.alt} caption={HERO_FIGURE.caption} />
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {STATS.map((tile) => (
          <StatTile key={tile.label} value={tile.value} label={tile.label} />
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Physical object
        </h2>
        <p className="mt-2 text-slate-800">{SITE.physicalObject}</p>
      </section>

      <div className="mt-8">
        <ClaimBlock />
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Explore
        </h2>
        <RouteCards />
      </section>
    </div>
  );
}

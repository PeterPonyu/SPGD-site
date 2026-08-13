import PageShell from '@/components/PageShell';
import { CLAIMS } from '@/lib/site';

export default function ClaimsPage() {
  return (
    <PageShell title="Claims" kicker="Falsifiable statements">
      <div className="space-y-6">
        {CLAIMS.map((item) => (
          <article key={item.claim} className="rounded-2xl border border-slate-200 bg-white/80 p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.claim}</h2>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Scope:</strong> {item.scope}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              <strong>Would refute:</strong> {item.refutation}
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

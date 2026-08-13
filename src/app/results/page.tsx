import FigurePanel from '@/components/FigurePanel';
import PageShell from '@/components/PageShell';
import { RESULTS_FIGURES } from '@/lib/site';

export default function ResultsPage() {
  return (
    <PageShell title="Results" kicker="Primary outcomes">
      <p>Primary outcomes and figure panels — labeled as results, not a generic figures dump.</p>
      <div className="mt-8 grid gap-8">
        {RESULTS_FIGURES.map((fig) => (
          <FigurePanel key={fig.src} src={fig.src} alt={fig.alt} caption={fig.caption} />
        ))}
      </div>
    </PageShell>
  );
}

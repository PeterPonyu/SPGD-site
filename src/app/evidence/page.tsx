import PageShell from '@/components/PageShell';
import StatTile from '@/components/StatTile';
import { EVIDENCE_TILES } from '@/lib/site';

export default function EvidencePage() {
  return (
    <PageShell title="Evidence" kicker="Metrics and controls">
      <p>Verifier-gated numerals and negative controls supporting the primary claim.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {EVIDENCE_TILES.map((tile) => (
          <StatTile key={tile.label} value={tile.value} label={tile.label} />
        ))}
      </div>
    </PageShell>
  );
}

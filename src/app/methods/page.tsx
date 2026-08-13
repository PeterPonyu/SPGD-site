import PageShell from '@/components/PageShell';
import { METHODS_SUMMARY } from '@/lib/site';

export default function MethodsPage() {
  return (
    <PageShell title="Methods" kicker="Protocol and scope">
      <p>{METHODS_SUMMARY}</p>
      <p className="text-sm text-slate-500">
        Reproducibility: public code is not published yet. Archive DOI in the header when enabled.
      </p>
    </PageShell>
  );
}

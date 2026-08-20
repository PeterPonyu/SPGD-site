import PageShell from '@/components/PageShell';
import { BADGES, SITE } from '@/lib/site';

export default function LandingLeaf({ title }: { title?: string }) {
  return (
    <PageShell title={title ?? SITE.title} kicker={SITE.kicker}>
      <p>{SITE.lead}</p>
      <p>{SITE.physicalObject}</p>
      <p>{SITE.primaryClaim}</p>
      <p>{SITE.landingNote}</p>
      <p>
        <a href={SITE.repoUrl} className="text-teal-800 underline underline-offset-2">
          GitHub repository
        </a>
        {' · '}
        <a
          href={BADGES.archive.href}
          className="text-teal-800 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Archive
        </a>
      </p>
    </PageShell>
  );
}

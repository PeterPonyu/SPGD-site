import PageShell from '@/components/PageShell';
import RouteCards from '@/components/RouteCards';
import { BADGES, SITE } from '@/lib/site';

export default function LandingLeaf({
  title,
  showExplore = false,
}: {
  title?: string;
  showExplore?: boolean;
}) {
  return (
    <PageShell title={title ?? SITE.title} kicker={SITE.kicker}>
      <p>{SITE.lead}</p>
      <p>{SITE.physicalObject}</p>
      <p>{SITE.primaryClaim}</p>
      <p>{SITE.landingNote}</p>
      <p>
        <a href={SITE.repoUrl}>GitHub repository</a>
        {' · '}
        <a href={BADGES.archive.href} target="_blank" rel="noopener noreferrer">
          Archive
        </a>
      </p>
      {showExplore ? (
        <>
          <h2>Explore this mix</h2>
          <RouteCards />
        </>
      ) : null}
    </PageShell>
  );
}

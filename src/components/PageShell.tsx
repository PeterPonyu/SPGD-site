export default function PageShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="spot-wrap">
      {kicker ? <p className="spot-kicker">{kicker}</p> : null}
      <h1 className="spot-title">{title}</h1>
      <div className="spot-body">{children}</div>
    </div>
  );
}

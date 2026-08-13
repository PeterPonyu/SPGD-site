export default function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
      <strong className="block font-mono text-2xl text-brand">{value}</strong>
      <span className="mt-1 block text-sm text-slate-600">{label}</span>
    </div>
  );
}

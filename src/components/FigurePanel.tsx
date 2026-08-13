import Image from 'next/image';

export default function FigurePanel({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80">
      <Image src={src} alt={alt} width={1600} height={900} className="h-auto w-full" unoptimized />
      <figcaption className="border-t border-slate-100 px-5 py-4 text-sm text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

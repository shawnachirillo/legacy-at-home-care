type ImagePlaceholderProps = {
    label: string;
    className?: string;
  };
  
  export default function ImagePlaceholder({
    label,
    className = ""
  }: ImagePlaceholderProps) {
    return (
      <div
        className={`relative overflow-hidden rounded-[2rem] bg-white shadow-soft ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,209,154,0.85),transparent_32%),linear-gradient(135deg,rgba(166,176,155,0.7),rgba(247,243,235,0.85)_45%,rgba(140,106,74,0.35))]" />
  
        <div className="absolute left-8 top-8 h-24 w-20 rounded-t-full border border-white/70 bg-white/60 backdrop-blur-sm" />
  
        <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/80 p-5 backdrop-blur-sm">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#4D97E8]">
            Image Placeholder
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-[#4D97E8]">
            {label}
          </p>
        </div>
      </div>
    );
  }
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-[#4D97E8]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#4D97E8] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-6 font-sans text-lg leading-8 text-muted">{text}</p>}
    </div>
  );
}

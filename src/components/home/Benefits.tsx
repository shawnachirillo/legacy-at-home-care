export default function Benefits() {
  const items = [
    ["Comfort", "Support that respects familiar routines."],
    ["Trust", "Caregivers who feel steady, kind, and reliable."],
    ["Relief", "Peace of mind for family caregivers who need rest."]
  ];

  return (
    <section className="bg-evergreen px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
          For families who need help, but still want home to feel like home.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map(([title, text]) => (
            <div key={title} className="border-t border-white/30 pt-7">
              <h3 className="font-serif text-3xl">{title}</h3>
              <p className="mt-3 font-sans leading-7 text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
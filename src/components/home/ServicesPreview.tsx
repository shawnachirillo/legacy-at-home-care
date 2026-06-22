import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-linen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-wood">
          Services
        </p>

        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Gentle support for everyday life.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-[#d6cbb8] bg-cream p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-6 h-14 w-14 rounded-full bg-sunlight shadow-inner" />

              <h3 className="font-serif text-2xl font-semibold text-evergreen">
                {service.title}
              </h3>

              <p className="mt-3 font-sans text-sm leading-6 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-10 inline-flex rounded-full bg-evergreen px-7 py-4 font-sans text-sm font-semibold text-white transition hover:bg-[#3d4a3d]"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-white/80" />

      <div className="relative mx-auto max-w-7xl">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#4D97E8]">
          Services
        </p>

        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#2F4A35] md:text-5xl">
          Gentle support for everyday life.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-[#E8E0D0] bg-white/85 p-7 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-6 h-14 w-14 rounded-full bg-[#FFFDF6]/80 shadow-inner" />

              <h3 className="font-serif text-2xl font-semibold text-[#4D97E8]">
                {service.title}
              </h3>

              <p className="mt-3 font-sans text-sm leading-6 text-[#26382B]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-10 inline-flex rounded-full bg-[#2F4A35] px-7 py-4 font-sans text-sm font-semibold text-white transition hover:bg-[#26382B]"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
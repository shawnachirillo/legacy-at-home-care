import ContactForm from "@/components/shared/ContactForm";

export default function ContactCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-linen p-8 shadow-soft md:grid-cols-2 md:p-12">
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-wood">
            Start here
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Let’s talk about what kind of care feels right.
          </h2>

          <p className="mt-6 font-sans text-lg leading-8 text-muted">
            Tell us what your family needs. We’ll listen first, then help you
            understand what level of support may make sense.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
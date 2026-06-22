import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Care for the everyday moments that matter."
          text="Choose a few hours of support, ongoing care, or a plan shaped around your loved one’s daily life."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl bg-linen p-8">
              <h2 className="font-serif text-3xl font-semibold text-evergreen">{service.title}</h2>
              <p className="mt-4 font-sans leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

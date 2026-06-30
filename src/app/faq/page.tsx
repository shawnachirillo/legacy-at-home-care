import SectionHeading from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faq";

export default function FAQPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Questions families often ask." />
        <div className="mt-12 space-y-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-3xl bg-white p-7">
              <h2 className="font-serif text-2xl font-semibold text-[#4D97E8]">{faq.question}</h2>
              <p className="mt-3 font-sans leading-7 text-[#4D97E8]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

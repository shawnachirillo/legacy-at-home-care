import ContactForm from "@/components/shared/ContactForm";
import SectionHeading from "@/components/shared/SectionHeading";
import { site } from "@/lib/constants";

export default function ContactPage() {
  return (
    <main className="px-6 pt-40 pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <SectionHeading
          
            title="Start with a simple care conversation."
            text="Tell us what is happening at home and what kind of support your family may need."
          />
          <div className="mt-10 rounded-3xl bg-white p-8 font-sans leading-8 text-[#4D97E8]">
            <p><strong className="text-ink">Phone:</strong> {site.phone}</p>
            <p><strong className="text-ink">Email:</strong> {site.email}</p>
            <p><strong className="text-ink">Service Area:</strong> {site.serviceArea}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

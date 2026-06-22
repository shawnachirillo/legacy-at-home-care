import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Intro from "@/components/home/Intro";
import ServicesPreview from "@/components/home/ServicesPreview";
import Approach from "@/components/home/Approach";
import Benefits from "@/components/home/Benefits";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Intro />
      <ServicesPreview />
      <Approach />
      <Benefits />
      <ContactCTA />
    </main>
  );
}
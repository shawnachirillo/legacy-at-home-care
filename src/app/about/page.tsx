import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="Rooted in comfort, dignity, and the familiar feeling of home."
          text="Legacy At Home Care exists for families who want dependable support without making home feel clinical or unfamiliar."
        />
        <div className="mt-12 grid gap-8 font-sans text-lg leading-8 text-muted md:grid-cols-2">
          <p>We believe care should feel steady, respectful, and personal. The best home care notices the details: the preferred chair, the morning routine, the cup someone likes for tea, the way a room feels after fresh sheets are placed on the bed.</p>
          <p>Our goal is to help older adults remain connected to the homes, routines, and relationships that give life meaning — while giving families more peace of mind.</p>
        </div>
      </div>
    </main>
  );
}

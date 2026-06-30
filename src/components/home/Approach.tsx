import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

export default function Approach() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <ImagePlaceholder
        label="Favorite chair, plants, wood furniture"
        className="h-[480px]"
      />

      <div>
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#4D97E8]">
          Our Approach
        </p>

        <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Familiar care, built around the person.
        </h2>

        <div className="mt-8 space-y-6 font-sans text-lg leading-8 text-[#4D97E8]">
          <p>
            We begin by understanding your loved one’s routines, preferences,
            personality, home environment, and family concerns.
          </p>

          <p>
            From there, we create a care plan that supports daily living without
            removing independence, dignity, or the feeling of being at home.
          </p>

          <p>
            Whether your family needs a few hours of help each week or more
            consistent support, Legacy At Home Care is designed to feel calm,
            steady, and reassuring.
          </p>
        </div>
      </div>
    </section>
  );
}
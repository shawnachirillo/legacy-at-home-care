import Button from "@/components/shared/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Soft overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-#f4d55b/80 to-white/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[#4D97E8]">
           
          </p>

          <h1 className="font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-[#4D97E8] md:text-7xl">
            Care that feels like home.
          </h1>

          <p className="mt-7 max-w-xl font-sans text-lg leading-8 text-[#26382B]">
            Legacy At Home Care helps your loved one stay safe, supported, and
            comfortable in the place they know best — surrounded by familiar
            routines, favorite chairs, clean sheets, morning light, and the quiet
            dignity of home.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Schedule a Care Call</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
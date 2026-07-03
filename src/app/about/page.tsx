import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF6]">
      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/comfort.jpg')" }}
        />

        <div className="absolute inset-0 bg-white/75" />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#FFFDF6]" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl ">
          <h1 className="pt-44 font-serif text-6xl font-semibold text-[#4D97E8]">
            About Us
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-6xl">
          {/* Mission */}
          <section className="mb-20">
            <h2 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8]">
              Our Mission:
            </h2>

            <p className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight text-[#8f5c36]">
              To help older adults remain safe, comfortable, and connected in
              the place they know best—home.
            </p>

            <p className="mt-10 max-w-4xl font-sans text-lg leading-8 text-[#26382B]">
              We believe exceptional home care is built on trust, consistency,
              and genuine relationships. Every visit is an opportunity to
              preserve independence, honor familiar routines, and bring peace of
              mind to the families who entrust us with their loved ones.
            </p>
          </section>

          {/* Vision */}
          <section className="mb-24">
            <h2 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8]">
              Our Vision:
            </h2>

            <p className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight text-[#8f5c36]">
              A future where aging at home feels natural, dignified, and deeply
              supported.
            </p>

            <p className="mt-10 max-w-4xl font-sans text-lg leading-8 text-[#26382B]">
              We envision communities where older adults continue living
              meaningful lives surrounded by familiar spaces, treasured routines,
              and compassionate caregivers who make every day feel a little
              lighter.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8]">
              The Legacy Difference
            </h2>

            <p className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight text-[#8f5c36]">
              Everything we do is guided by a simple belief: great care should
              feel personal.
            </p>

            <p className="mt-10 max-w-4xl font-sans text-lg leading-8 text-[#26382B]">
              We honor the quiet details that make a person feel known: familiar
              routines, favorite meals, meaningful conversation, clean linens,
              and the comfort of being cared for with patience and respect.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF6] px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <section className="pt-20 pb-20">
  <h1 className="font-serif text-6xl font-semibold text-[#4D97E8]">
    About Us
  </h1>
</section>

        {/* Mission */}
        <section className="mb-20">
  <h2 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8]">
    Our Mission:
  </h2>
  <p className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight text-[#4D97E8]">
    To help older adults remain safe, comfortable, and connected in the place
    they know best—home.
  </p>
          <div className="mt-10 max-w-4xl">
            <p className="text-left font-sans text-lg leading-8 text-[#26382B]">
              We believe exceptional home care is built on trust, consistency,
              and genuine relationships. Every visit is an opportunity to
              preserve independence, honor familiar routines, and bring peace
              of mind to the families who entrust us with their loved ones.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-24">
  <h2 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8]">
    Our Vision </h2>
    <p className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight text-[#4D97E8]">
    A future where aging at home feels natural, dignified, and deeply supported.
  </p>
  <div className="mt-10 max-w-4xl">
            <p className="text-left font-sans text-lg leading-8 text-[#26382B]">
            We envision communities where older adults continue living
              meaningful lives surrounded by familiar spaces, treasured
              routines, and compassionate caregivers who make every day feel a
              little lighter.
            </p>
          </div>
         
         
        </section>

        {/* Values */}

        <section className="mb-24">
  <h2 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8]">
  The Legacy Difference </h2>
    <p className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight text-[#4D97E8]">
    Everything we do is guided by a simple belief: great care should feel personal.
  </p>
  <div className="mt-10 max-w-4xl">
            <p className="text-left font-sans text-lg leading-8 text-[#26382B]">
            We envision communities where older adults continue living
              meaningful lives surrounded by familiar spaces, treasured
              routines, and compassionate caregivers who make every day feel a
              little lighter.
            </p>
          </div>
        </section>

       
    

      </div>
    </main>
  );
}
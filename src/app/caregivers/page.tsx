import Image from "next/image";

export default function CaregiversPage() {
  return (
<main className="bg-[#FFFDF6] px-6 pt-40 pb-20">
        <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <section className="max-w-4xl">
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[#4D97E8] md:text-6xl">
            The right caregiver should bring calm into the home.
          </h1>

          <p className="mt-6 max-w-3xl font-sans text-xl leading-9 text-[#26382B]">
            Caregiving is not only about completing tasks. It is about
            presence, patience, reliability, and respect.
          </p>
        </section>

        {/* Content */}
        <section className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* Left card */}
          <div className="rounded-[2rem] bg-white p-10 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold text-[#4D97E8]">
              What we look for
            </h2>

            <ul className="mt-6 space-y-4 font-sans text-lg leading-8 text-[#26382B]">
              <li>• Warm communication and dependability</li>
              <li>• Respect for family routines and household preferences</li>
              <li>
                • Patience with aging, memory changes, and emotional transitions
              </li>
              <li>• A calm, trustworthy presence</li>
            </ul>
          </div>

          {/* Right image */}
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/images/caregiver.jpg"
              alt="Professional caregiver with older adult"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
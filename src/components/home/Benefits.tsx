import Image from "next/image";

export default function Benefits() {
  return (
    <section className="bg-[#FFFDF6] px-8 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

        <h2 className="font-serif text-5xl font-semibold text-[#4D97E8]">
          Why Legacy At Home Care?
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-10 text-[#26382B]">
          We believe home care should continue feeling like home.
          
          That means honoring routines, favorite meals, and quiet mornings.
         
        </p>

        <div className="mt-16 grid w-full gap-10 md:grid-cols-3">

          {/* Comfort */}
          <div className="text-center">
            <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/comfort.jpg"
                alt="Comfort"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 font-serif text-4xl font-semibold text-[#C8891D]">
              Comfort
            </h3>

            <p className="mt-2 text-lg text-[#C8891D]">
              Support that respects familiar routines.
            </p>
          </div>

          {/* Trust */}
          <div className="text-center">
            <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/trust.jpg"
                alt="Trust"
                fill
                className="object-cover"
              />
               
            </div>

            <h3 className="mt-6 font-serif text-4xl font-semibold text-[#C8891D]">
              Trust
            </h3>

            <p className="mt-2 text-lg text-[#C8891D]">
              Caregivers who feel steady, kind, and reliable.
            </p>
          </div>

          {/* Relief */}
          <div className="text-center">
            <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/relief.jpg"
                alt="Relief"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 font-serif text-4xl font-semibold text-[#C8891D]">
              Relief
            </h3>

            <p className="mt-2 text-lg text-[#C8891D]">
              Peace of mind for family caregivers who need rest.
            </p>
          </div>

        </div>
        <Image
        src="/images/benefits_quote.png"
        alt="Quote"
        width={900}
        height={250}
        className="mt-8 w-full max-w-2xl h-auto"
      />
      </div>
    </section>
  );
}
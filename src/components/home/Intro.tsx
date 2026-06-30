import Image from "next/image";

export default function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-serif text-4xl font-semibold leading-tight text-[#9CCB3B] md:text-5xl">
        
      </h2>
      <Image
  src="/images/script_intro.png"
  alt="There's no place more familiar than home"
  width={1100}
  height={440}
  className="mx-auto w-full max-w-4xl"
/>
      <p className="mt-6 font-sans text-lg leading-8 text-[#4D97E8]">
        Home care is not just help with tasks. It is peace of mind. It is
        knowing someone kind is there to prepare a meal, offer a steady hand,
        change the linens, share conversation, and help your loved one move
        through the day with comfort and dignity.
      </p>
    </section>
  );
}
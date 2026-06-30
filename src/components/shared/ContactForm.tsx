export default function ContactForm() {
  return (
    <form className="space-y-4 rounded-[2rem] bg-white p-6 shadow-soft">
      <input
        className="w-full rounded-full border border-[#d8cdbb] bg-white px-5 py-4 font-sans outline-none focus:border-[#4D97E8]"
        placeholder="Your name"
      />

      <input
        className="w-full rounded-full border border-[#d8cdbb] bg-white px-5 py-4 font-sans outline-none focus:border-[#4D97E8]"
        placeholder="Phone number"
      />

      <input
        className="w-full rounded-full border border-[#d8cdbb] bg-white px-5 py-4 font-sans outline-none focus:border-[#4D97E8]"
        placeholder="Email address"
      />

      <textarea
        className="min-h-36 w-full rounded-[1.5rem] border border-[#d8cdbb] bg-white px-5 py-4 font-sans outline-none focus:border-[#4D97E8]"
        placeholder="How can we help?"
      />

      <button
        type="button"
        className="w-full rounded-full bg-[#4D97E8] px-6 py-4 font-sans font-semibold text-white transition hover:bg-[#3d4a3d]"
      >
        Request a Care Call
      </button>
    </form>
  );
}
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[800px] px-4 py-24 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-dark-text mb-4">
          404
        </h1>
        <p className="font-body text-body-text text-lg mb-8">
          Beklager – den side, du leder efter, findes ikke.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent-gold text-primary-black font-heading font-bold uppercase
                     text-sm px-8 py-3 rounded-sm hover:brightness-110 transition-all"
        >
          Gå til forsiden
        </Link>
      </div>
    </section>
  );
}

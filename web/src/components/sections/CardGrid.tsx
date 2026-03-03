import Image from "next/image";

interface Card {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
}

interface CardGridProps {
  heading?: string;
  cards: Card[];
}

export function CardGrid({ heading, cards }: CardGridProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        {heading && (
          <h2 className="mb-10 text-center font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-dark-text">
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article key={card.title} className="text-center">
              <h3 className="mb-4 font-heading text-lg font-semibold text-dark-text">
                {card.title}
              </h3>
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt ?? card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-body text-sm text-body-text leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

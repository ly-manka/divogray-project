import { Game } from "@/types/Game";
import Link from "next/link";

type GameCardProps = {
  card: Game;
};

export const GameCard = ({ card }: GameCardProps) => {
  const { imageUrl, category, title, priceType, id } = card;

  return (
    <article className="overflow-hidden rounded-3xl group">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
      >
        <Link
          href={`/games/${id}`}
          className="relative flex h-full w-full flex-col justify-end px-10 py-20 text-white sm:p-5 lg:px-4 lg:py-8"
        >
          <div className="pointer-events-none absolute bottom-0 left-0 h-4/5 w-full bg-gradient-to-t from-red-600/80 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
          <p className="z-10 text-3xl font-bold sm:text-xl xl:text-3xl 2xl:text-6xl">
            {title}
          </p>
          <p className="z-10 text-lg sm:text-xs md:text-base">
            {category} - {priceType}
          </p>
        </Link>
      </div>
    </article>
  );
};

import Link from "next/link";

type InfoCardProps = {
  link: string;
};

export const InfoCard = ({ link }: InfoCardProps) => {
  return (
    <article className="overflow-hidden rounded-3xl">
      <div className="bg-yellow-accent aspect-[3/4] w-full bg-cover">
        <Link
          href={link}
          className="group relative flex h-full w-full items-center justify-center text-amber-900"
        >
          <div className="pointer-events-none absolute bottom-0 left-0 h-4/5 w-full bg-gradient-to-t from-red-600/60 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

          <p className="text-center text-4xl font-bold sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl transition-transform duration-300 group-hover:scale-103">
            Дізнатись
            <br />
            про наші ігри
            <br />↓
          </p>
        </Link>
      </div>
    </article>
  );
};

type TopSectionProps = {
  title: string;
  subtitle: string;
  desc?: string;
};

export const TopSection = ({ title, subtitle, desc }: TopSectionProps) => {
  return (
    <section className="mx-5 pt-20 pb-15 md:mx-18 2xl:mx-24 2xl:pt-40 2xlpb-30">
      <header className="gap-6 flex flex-col">
        <h1 className="font-bold text-lg/5">{title}</h1>
        <p className="text-3xl/10 md:text-5xl/16 font-bold font-oswald max-w-3xl">
          {subtitle}
        </p>
        {desc && <p className="text-lg">{desc}</p>}
      </header>
    </section>
  );
};

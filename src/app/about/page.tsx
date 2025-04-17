import { TopSection } from "@/components/TopSection";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    id: 0,
    fullName: "Леся Хвіст",
    role: "Технічний директор",
    image: "/ghost-cat.avif",
  },
  {
    id: 1,
    fullName: "Роман Мороз",
    role: "Старший розробник",
    image: "/ghost-cat.avif",
  },
  {
    id: 2,
    fullName: "Степан Волик",
    role: "Старший розробник",
    image: "/ghost-cat.avif",
  },
  {
    id: 3,
    fullName: "Богдан Козак",
    role: "Старший розробник",
    image: "/ghost-cat.avif",
  },
];

const priopities = [
  {
    id: 0,
    title: "Досконалість",
    desc: "Це абзац. Натисніть, щоб додати та змінити текст. Тут ви можете написати історію або розказати користувачам про себе.",
  },
  {
    id: 1,
    title: "Креативність",
    desc: "Це абзац. Натисніть, щоб додати та змінити текст. Тут ви можете написати історію або розказати користувачам про себе.",
  },
  {
    id: 2,
    title: "Спільнота",
    desc: "Це абзац. Натисніть, щоб додати та змінити текст. Тут ви можете написати історію або розказати користувачам про себе.",
  },
];

const AboutPage = () => {
  return (
    <main>
      <TopSection
        title="Компанія «Дивограй»"
        subtitle="Cтворюємо найкращі інтерактивні розваги, змінюючи уявлення світу про ігри, щоб люди отримували насолоду."
      />

      <section className="grid grid-cols-[2fr_3fr]">
        <div className="h-full w-full bg-blue-950" />
        <div className="bg-red-accent flex h-full w-full items-center justify-center py-20">
          <div className="max-w-md text-lg text-white">
            <p className="">
              Це абзац. Натисніть, щоб додати та змінити контент. Усе просто.
              Натисніть «Редагувати текст» або клацніть двічі, щоб додати текст
              і налаштувати шрифт. Ви можете перемістити його в будь-яке місце
              на сторінці. Тут ви можете публікувати історії та розповідати
              користувачам більше про себе.
            </p>

            <p className="mt-7">
              Це чудове місце для написання довгих текстів про власну компанію
              та послуги. Скористайтеся цим простором, щоб детальніше
              представити свою компанію. Розкажіть про команду та послуги, які
              ви надаєте. Поділіться з відвідувачами історією започаткування
              вашого бізнесу та перевагами над конкурентами. Приверніть більше
              уваги до вашого бізнесу та покажіть відвідувачам, хто ви.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 place-items-center gap-13 py-30">
          <h2>Наші пріоритети</h2>

          <div className="grid max-w-[820px] grid-cols-2 gap-8">
            {priopities.map(({ id, title, desc }, index) => (
              <article
                key={id}
                className={clsx("rounded-xl bg-white p-10 shadow-2xl", {
                  "col-span-2": index === priopities.length - 1,
                })}
              >
                <h3 className="text-red-accent">{title}</h3>
                <p className="mt-3">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="text-light text-center">
        <div className="bg-dark px-15 py-20 lg:mx-20">
          <h2>Наші засновники</h2>

          <div className="mt-15 grid grid-cols-4 gap-8">
            {founders.map(({ id, fullName, role }) => (
              <article key={id}>
                <figure>
                  <Image
                    src="/games/girly-app.jpg"
                    alt={`${fullName} — ${role}`}
                    className="aspect-3/4 w-full rounded-2xl object-cover"
                    width={100}
                    height={100}
                  />
                  <figcaption className="mt-4">
                    <h4 className="text-lg font-semibold">{fullName}</h4>
                    <p className="text-sm">{role}</p>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>
          <p>Наші офіси</p>
          <h2>Сучасний офіс у Києві</h2>
          <p>
            Це абзац. Натисніть, щоб додати та змінити текст. Просто натисніть
            «Редагувати текст» або клацніть двічі, щоб додати текст і
            налаштувати шрифт. Тут ви можете написати історію та розказати
            користувачам більше про себе
          </p>
        </div>

        <div>
          <h3>Будемо раді співпрацювати</h3>

          <p>
            Це абзац. Натисніть, щоб додати й змінити контент. Розкажіть людям
            про себе.
          </p>

          <Link href="/career">Більше про вакансії</Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

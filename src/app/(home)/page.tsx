import { BoxButton } from "@/components/BoxButton/BoxButton";
import { CardList } from "@/components/CardList/CardList";
import { FadeInSection } from "@/components/FadeInSection/FadeInSection";
import { GameInfoCard } from "@/components/GameInfoCard/GameInfoCard";
import { Hero } from "@/components/Hero/Hero";
import { games } from "@/constants/games";
import Image from "next/image";
import yogaImg from "@/assets/images/decor/yoga.png";

export default function Home() {
  return (
    <main className="overflow-clip">
      <Hero />

      <div className="-top-20 w-full lg:relative">
        <div className="content-limit mt-5">
          <CardList />
        </div>
      </div>

      <section className="">
        <div className="content-limit mx-auto flex max-w-2xl flex-col items-center gap-4 text-center lg:gap-8">
          <FadeInSection>
            <h2 className="text-lg font-bold">Про Дивограй</h2>
          </FadeInSection>

          <FadeInSection>
            <p className="font-oswald text-2xl font-bold lg:text-5xl/16">
              Твоє джерело
              <br />
              мобільних розваг
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="text-base lg:text-lg">
              Це абзац. Тут міститься якийсь текст. Просто красивий та чудовий
              текст. Лаконічний текст, мегасуперпупер текст. Тут ви можете
              почитати про смішненький чепурненький текст. Дякую, що почитали
              &lt;3
            </p>
          </FadeInSection>
          <FadeInSection>
            <BoxButton text="Докладніше" variant="red" />
          </FadeInSection>

          {/* <div className="group relative mt-6 overflow-hidden rounded-2xl">
            <Image
              src="/team-work.avif"
              alt=""
              width={600}
              height={20}
              className="bg-cover w-full rounded-2xl"
            />
            <div className="pointer-events-none absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </div> */}
        </div>

        <div className="content-limit mt-15">
          <Image
            src="/team-work.avif"
            alt="team work"
            width={600}
            height={200}
            className="h-55 w-96 rounded-3xl object-cover"
          />

          <Image
            src={yogaImg}
            alt="yoga"
            width={600}
            height={200}
            className="relative -top-20 h-55 w-96 rounded-3xl object-contain"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 lg:mt-40">
        <div className="content-limit mx-auto max-w-2xl items-center text-center">
          <FadeInSection>
            <h2 className="heading-2">Наші ігри</h2>
          </FadeInSection>

          <FadeInSection>
            <p className="text-base lg:text-lg">
              Це абзац. Тут міститься якийсь текст. Просто красивий та чудовий
              текст. Лаконічний текст, мегасуперпупер текст. Дякую, що почитали
              &lt;3
            </p>
          </FadeInSection>
        </div>

        <div className="content-limit grid place-items-center gap-5 lg:grid-cols-2 lg:gap-y-80">
          {games.map((game) => (
            <GameInfoCard game={game} key={game.id} />
          ))}

          <Image
            src="/ghost-cat.avif"
            alt="cat"
            width={600}
            height={200}
            className="h-70 w-96 rounded-3xl object-contain p-8"
          />
        </div>
      </section>

      <section className="lg:mt-40">
        <div className="bg-[url('/bg/bg-red.jpg')] bg-cover bg-fixed bg-center lg:h-187">
          <div className="grid h-full lg:grid-cols-2">
            <div className="content-limit grid gap-7">
              <h2 className="text-lg font-bold text-white lg:text-xl">
                Приєднуйтесь до нас
              </h2>

              <p className="heading-2 text-white">
                Шукаємо талановитих фахівців,
                <br />
                що змінюють світ ігор.
              </p>

              <BoxButton text="Вакансії" variant="yellow" className="w-40" />
            </div>

            <div className="flex justify-center self-end">
              <div className="h-60 w-full bg-[url(/pop-up-kitty.avif)] bg-no-repeat bg-center bg-contain"></div>
            </div>
          </div>
        </div>

        <div className="lg:h-150 bg-[url('/bg/purple-bg.jpg')] bg-cover bg-fixed bg-center">
          <div className="grid h-full gap-10 lg:grid-cols-2 place-items-center content-limit py-10">
            <article className="text-dark w-full max-w-md rounded-xl bg-white p-10 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Зв&apos;язатися</h3>
              <p className="mb-4 text-lg">
                Це абзац. Натисніть, щоб додати й змінити контент.
              </p>

              <form className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="">
                    <label htmlFor="first-name">Ім’я *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 p-2"
                      id="first-name"
                    />
                  </div>

                  <div>
                    <label htmlFor="last-name">Прізвище *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 p-2"
                      id="last-name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="">Ел. пошта *</label>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-2"
                      id="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message">Залиште повідомлення</label>

                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-md border border-gray-300 p-2"
                    id="message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#1a1a3c] px-4 py-2 text-white transition hover:bg-[#2a2a5a]"
                >
                  Надіслати
                </button>
              </form>
            </article>

            <form action="" className="bg-red-accent rounded-xl px-6 py-8">
              <h4 className="text-xl text-white">Підписатись на розсилку</h4>

              <div className="text-sm text-white">
                <label htmlFor="mailing" className="mt-5 block">
                  Ел. пошта *
                </label>
                <div className="mt-3.5 flex flex-col lg:flex-row gap-1.5 text-black">
                  <input
                    type="email"
                    className="rounded-lg bg-white p-4"
                    id="mailing"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-accent rounded-lg p-4"
                  >
                    Приєднатися
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

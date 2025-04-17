import { Game } from "@/types/Game"
import Image from "next/image"
import { DowloadButton } from "../DowloadButton/DowloadButton";

type GameInfoCardProps = {
  game: Game;
}

export const GameInfoCard = ({ game }: GameInfoCardProps) => {
  const { mainImg, title, category, description } = game;

  return (
    <article className="rounded-3xl p-5 lg:p-13 max-w-96 bg-white shadow-2xl overflow-clip">
      <div className="grid gap-y-8">
        <div className="flex gap-5">
          <Image src={mainImg} alt="game" width={85} height={60} className="border-5 border-white shadow-2xl rounded-3xl w-20 h-20 object-cover" />
          <div className="flex flex-col justify-center">
            <h3>{title}</h3>
            <p className="text-sm lg:text-base">{category}</p>
          </div>
        </div>

        <p>{description}</p>

        <div className="flex justify-between">
          <DowloadButton marketplace="appstore"/>
          <DowloadButton marketplace="googleplay"/>
        </div>
      </div>
    </article>
  )
}
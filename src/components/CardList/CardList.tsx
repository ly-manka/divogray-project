import { games } from "@/constants/games";
import { GameCard } from "../GameCard/GameCard";
import { InfoCard } from "../InfoCard.tsx/InfoCard";

export const CardList = () => {
  return (
    <div className="grid gap-2 lg:gap-10 w-full grid-cols-1 sm:grid-cols-4">
      {games.map((card) => <GameCard card={card} key={card.id} />)}
      <InfoCard link="/" />
    </div>
  )
}
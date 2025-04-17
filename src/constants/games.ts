import { Game } from "@/types/Game";

export const games: Game[] = [
  {
    id: 0,
    imageUrl : '/games/foxy-app.png',
    title: 'Фоксі',
    category: "Казульна",
    priceType: "Безкоштовна",
    description: "Це абзац. Лаконічний текст, мегасуперпупер текст. Тут ви можете почитати про смішненький чепурненький текст. Дякую, що почитали <3",
    mainImg: '/dog-app.jpg'
  },
  {
    id: 1,
    imageUrl : '/games/cat-app.jpg',
    title: 'Котик-Муркотик',
    category: "Пригоди",
    priceType: "Безкоштовна",
    description: "Це абзац. Лаконічний текст, мегасуперпупер текст. Тут ви можете почитати про смішненький чепурненький текст. Дякую, що почитали <3",
    mainImg: '/cat-app.jpg'
  },
  {
    id: 2,
    imageUrl : '/games/girly-app.jpg',
    title: 'Пес-Гавчик',
    category: "Рольова",
    priceType: "Безкоштовна",
    description: "Це абзац. Лаконічний текст, мегасуперпупер текст. Тут ви можете почитати про смішненький чепурненький текст. Дякую, що почитали <3",
    mainImg: '/girly-app.jpg'
  },
];
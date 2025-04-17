export interface Game {
  id: number;
  imageUrl: string;
  mainImg: string
  title: string;
  category: 'Казульна' | 'Рольова' | 'Пригоди';
  priceType: 'Безкоштовна' | 'Платна'
  description: string;
}

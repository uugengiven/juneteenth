export type Flyer = {
  slug: string;
  file: string;
  title: string;
};

export const flyers: Flyer[] = [
  { slug: 'black_tie', file: 'black_tie.jpg', title: 'Black Tie Gala' },
  { slug: 'boat_party', file: 'boat_party.jpg', title: 'All Black Boat Party' },
  { slug: 'in_the_square', file: 'in_the_square.jpg', title: 'Juneteenth in the Square' },
  { slug: 'celebration', file: 'celebration.jpg', title: 'Juneteenth Celebration' },
  { slug: 'parade', file: 'parade.jpg', title: 'Grand Jubilee Parade' },
  { slug: 'after_party', file: 'after_party.jpg', title: 'All White After Party' },
];

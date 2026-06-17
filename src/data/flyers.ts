export type Flyer = {
  slug: string;
  file: string;
  title: string;
  url?: string;
};

export const flyers: Flyer[] = [
  { slug: 'black_tie', file: 'black_tie.jpg', title: 'Black Tie Gala', url: 'https://www.eventbrite.com/e/stvp-honorees-gala-tickets-1988570113741' },
  { slug: 'boat_party', file: 'boat_party.jpg', title: 'All Black Boat Party', url: 'https://www.eventbrite.com/e/2026-juneteenth-all-black-boatparty-thurs-june-18th-tickets-1720988686489' },
  { slug: 'in_the_square', file: 'in_the_square.jpg', title: 'Juneteenth in the Square' },
  { slug: 'celebration', file: 'celebration.jpg', title: 'Juneteenth Celebration' },
  { slug: 'parade', file: 'parade.jpg', title: 'Grand Jubilee Parade' },
  { slug: 'after_party', file: 'after_party.jpg', title: 'All White After Party', url: 'https://www.eventbrite.com/e/wpa-juneteenth-finale-fabolous-all-white-after-party-tickets-1986449827909' },
];

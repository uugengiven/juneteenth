export interface EventInterface {
    id: number;
    name: string;
    date: string;
    time: string;
    type: string;
    likes: number;
    image: string;
    description: string;
    }

const events = [
    {
        id: 1,
        name: 'Jubilee Parade',
        date: 'June 16',
        time: '10:00 AM',
        type: 'Parade',
        likes: 12,
        image: '/images/parade.png',
        description: 'Event 1 description',
    },
    {
        id: 2,
        name: 'Vendor Fair',
        date: 'June 14-16',
        time: '12:00 PM',
        type: 'Market',
        likes: 87,
        image: '/images/IMG_20230902_150344718.jpg',
        description: 'Event 1 description',
    },
    {
        id: 3,
        name: 'Jazmin',
        date: 'June 15, 2023',
        time: '7:00 PM',
        type: 'Music',
        likes: 122,
        image: '/images/FB_IMG_1695686484619.jpg',
        description: 'Event 1 description',
    },
];

export default events;
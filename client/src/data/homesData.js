import House1 from "../images/house1.jpg";
import House2 from "../images/house2.jpg";
import House3 from "../images/house3.jpg";
export const homes = [
  {
    title: "11840 96Ave Delta, BC V4C 3W8",
    name: "3bdr House",
    images: [House1, House2, House3],
    price: 200000,
    type: "Apartment",
    date: "3 weeks ago",
    rooms: 3,
    washrooms: 2,
    pets: true,
    size: 1500,
    position: {
      lat: 49.17682,
      lng: -122.8944,
    },
  },
  {
    title: "Un-known address",
    name: "5bdr House",
    images: [House1, House2, House3],
    price: 300000,
    type: "House",
    date: "1 week ago",
    rooms: 3,
    washrooms: 2,
    pets: false,
    size: 1200,
    position: {
      lat: 49.17682,
      lng: -122.8904,
    },
  },
];

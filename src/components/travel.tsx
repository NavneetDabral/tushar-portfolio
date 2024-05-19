import { LayoutGrid } from "./layout-grid";
import bg from "../assets/images/travel/bg.jpg";
import bg1 from "../assets/images/travel/bg1.jpeg";
import bg2 from "../assets/images/travel/bh2.jpeg";
import bg3 from "../assets/images/travel/bg3.jpg";
import bg4 from "../assets/images/travel/bg4.jpg";

export const Travel = () => {
  return <LayoutGrid cards={cards} />;
};

const cards = [
  {
    id: 1,
    className: "col-span-1",
    thumbnail: bg,
  },
  {
    id: 2,
    className: "md:col-span-2",
    thumbnail: bg1,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: bg2,
  },
  {
    id: 4,
    className: "col-span-1",
    thumbnail: bg3,
  },
  {
    id: 5,
    className: "col-span-1",
    thumbnail: bg4,
  },
];

import { LayoutGrid } from "./layout-grid";
import com1 from "../assets/images/commercial/com1.jpg";
import com2 from "../assets/images/commercial/com2.jpg";
import com3 from "../assets/images/commercial/com3.jpg";
import com4 from "../assets/images/commercial/com4.jpg";
import com5 from "../assets/images/commercial/com5.jpg";

export const Commercial = () => {
  return <LayoutGrid cards={cards} />;
};

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: com1,
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: com2,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: com3,
  },
  {
    id: 4,
    className: "col-span-1",
    thumbnail: com4,
  },
  {
    id: 5,
    className: "col-span-1",
    thumbnail: com5,
  },
];

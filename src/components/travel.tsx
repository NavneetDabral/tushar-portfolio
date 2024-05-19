import { LayoutGrid } from "./layout-grid";

export const Travel = () => {
  return <LayoutGrid cards={cards} />;
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Destination</p>
      <p className="font-bold text-4xl text-white">Triyuginarayan temple</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Triyuginarayan Temple (Sanskrit: त्रियुगी-नारायण) is a Hindu temple
        located in the Triyuginarayan village in Rudraprayag district,
        Uttarakhand, India. The ancient temple is dedicated to god Vishnu. Its
        fame is credited to the legend of god Shiva’s marriage to goddess
        Parvati witnessed by Vishnu at this venue and is thus a popular Hindu
        pilgrimage sites.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Destination</p>
      <p className="font-bold text-4xl text-white">Jaipur</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Jaipur is the capital and the largest city of the north-western Indian
        state of Rajasthan.Located 268 km (167 miles) from the national capital
        New Delhi, Jaipur is also known as the Pink City due to the dominant
        color scheme of its buildings in old city.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Destination</p>
      <p className="font-bold text-4xl text-white">Jaipur</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Jaipur is the capital and the largest city of the north-western Indian
        state of Rajasthan.Located 268 km (167 miles) from the national capital
        New Delhi, Jaipur is also known as the Pink City due to the dominant
        color scheme of its buildings in old city.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Destination</p>
      <p className="font-bold text-4xl text-white">Jaipur</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Jaipur is the capital and the largest city of the north-western Indian
        state of Rajasthan.Located 268 km (167 miles) from the national capital
        New Delhi, Jaipur is also known as the Pink City due to the dominant
        color scheme of its buildings in old city.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Destination</p>
      <p className="font-bold text-4xl text-white">Jim Corbett National Park</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Jim Corbett National Park is a national park in India located in the
        Nainital district of Uttarakhand state.Corbett National Park comprises
        520.8 km2 (201.1 sq mi) area of hills, riverine belts, marshy
        depressions, grasslands and a large lake. The elevation ranges from
        1,300 to 4,000 ft (400 to 1,220 m). Winter nights are cold but the days
        are bright and sunny. It rains from July to September.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "../src/assets/images/travel/bg.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "../src/assets/images/travel/bg1.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "../src/assets/images/travel/bh2.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: "../src/assets/images/travel/bg3.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "../src/assets/images/travel/bg4.jpg",
  },
];

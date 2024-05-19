import User from "../assets/images/tushar.jpeg";

export const About = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 mt-20">
      <div className="flex relative justify-center rounded-full">
        <div className="border-4 -top-10 -left-10 border-yellow-300 border-solid absolute h-[100%] w-[360px] z-20 hidden sm:flex rounded-lg" />
        <img
          src={User}
          width={360}
          height={100}
          alt="me"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-1 font-sans text-xl p-4 border-solid items-center text-left">
        Step into the captivating world of Tushar, a visionary artist from
        Uttarakhand whose work seamlessly blends filmmaking, spirituality, and
        the enchanting beauty of nature. Specializing in wedding, travel, and
        commercial photography, Tushar captures the essence of each moment with
        an unparalleled eye for detail. Beyond capturing the natural landscapes
        of Uttarakhand, Tushar tells stories of love, adventure, and brand
        narratives. Through their lens, weddings become timeless tales, travel
        destinations are transformed into vivid memories, and commercial
        endeavors are elevated to captivating narratives.
      </div>
    </div>
  );
};

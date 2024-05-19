import { useState } from "react";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhoneCall,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Travel } from "./components/travel";
import { Commercial } from "./components/commercial";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { FAQs } from "./components/faqs";
import { Wedding } from "./components/wedding";
import { cn } from "./util/cn";

export default function Home() {
  const [section, setSection] = useState("wed");

  return (
    <main className="h-screen relative overflow-scroll">
      <div className="fixed bottom-4 right-4 z-50 bg-slate-300 p-4 opacity-65 rounded-full cursor-pointer">
        <IconPhoneCall />
      </div>
      <div className="bg-[url('../src/assets/images/travel/bg.jpg')] relative h-full w-full bg-cover bg-no-repeat overflow-hidden flex flex-col items-center justify-center">
        <div className="relative flex-col flex justify-center p-12 sm:py-20 sm:px-10">
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-white opacity-50 sm:rounded-lg" />
          <div className="absolute -top-10 right-10 -left-10 bottom-10 border-solid border-4 border-yellow-300 sm:rounded-lg" />
          <h1
            className={cn(
              "md:text-6xl font-mono text-xl font-bold text-black relative z-20 text-center"
            )}
          >
            TUSHAR DABRAL
          </h1>
          <p className="text-center font-mono font-semibold mt-2 text-gray-800 relative z-20">
            Filmmaker by Art, Wanderer by Virtue, Writer By Default.
          </p>
          <p className="text-center font-mono mt-2 text-black relative z-20">
            Filming since 2013
          </p>
          <p className="justify-center flex flex-row gap-4 font-mono mt-6 text-black relative z-20">
            <Link to="https://linkedin.com/in/navneet-dabral-859707117">
              <IconBrandInstagram size="36" className="cursor-pointer" />
            </Link>
            <Link to="https://twitter.com/medabral">
              <IconBrandWhatsapp size="36" className="cursor-pointer" />
            </Link>
            <Link to="https://twitter.com/medabral">
              <IconBrandYoutube size="36" className="cursor-pointer" />
            </Link>
          </p>
        </div>
      </div>
      <div className="flex relative justify-center align-middle sm:p-5 bg-yellow-50">
        <div className="container max-w-screen-xl">
          <h1 className="text-6xl text-center font-serif m-10">Work</h1>
          <div className="flex justify-center align-middle">
            <div className="flex justify-center flex-1 gap-12">
              <div className="text-sm font-medium text-center text-gray-500   dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="me-2">
                    <a
                      onClick={() => setSection("wed")}
                      href="#"
                      className={`uppercase inline-block p-4  border-b-2 rounded-t-lg ${
                        section === "wed"
                          ? "active text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                          : ""
                      }`}
                      aria-current="page"
                    >
                      Wedding
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      onClick={() => setSection("travel")}
                      href="#"
                      className={`uppercase inline-block p-4  border-b-2 rounded-t-lg ${
                        section === "travel"
                          ? "active text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                          : ""
                      }`}
                      aria-current="page"
                    >
                      Travel films
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      onClick={() => setSection("com")}
                      className={`uppercase inline-block p-4  border-b-2 rounded-t-lg ${
                        section === "com"
                          ? "active text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                          : ""
                      }`}
                      aria-current="page"
                    >
                      Commercial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-5 w-full">
            {section === "wed" && <Wedding />}
            {section === "com" && <Commercial />}
            {section === "travel" && <Travel />}
          </div>

          <div className="my-10 w-full">
            <h1 className="text-4xl font-serif text-center uppercase">
              Discover Tushar's World
            </h1>
            <About />
          </div>
          <FAQs />
        </div>
      </div>
      <Footer />
    </main>
  );
}

"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

interface CarouselItem {
  src: string;
  alt: string;
}

const items: CarouselItem[] = [
  {
    src: "/SS_Kombucha_bottles/Blue Algae_duo.png",
    alt: "Blue Algae",
  },
  {
    src: "/SS_Kombucha_bottles/Chaga Chai_duo.png",
    alt: "Chaga Chai",
  },
  {
    src: "/SS_Kombucha_bottles/Elderflower Ginger_duo.png",
    alt: "Elderflower Ginger",
  },
  {
    src: "/SS_Kombucha_bottles/Hibiscus Lemon Balm_duo.png",
    alt: "Hibiscus Lemon Balm",
  },
  {
    src: "/SS_Kombucha_bottles/Lavender Mint_duo.png",
    alt: "Lavender Mint",
  },
  {
    src: "/SS_Kombucha_bottles/Strawberry Mint_duo.png",
    alt: "Strawberry Mint",
  },
  {
    src: "/SS_Kombucha_bottles/Wild Rose_duo.png",
    alt: "Wild Rose",
  },
];

const carouselHeight = 583;
const carouselWidth = 1320;

export default function DefaultCarousel() {
  useEffect(() => {
    const init = async () => {
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative my-4"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {items.map((item, index) => (
          <button
            key={item.alt}
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={index}
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-pink-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/SS_Kombucha_bottles/Blue Algae_duo.png"
            className="block w-full"
            alt="Blue Algae"
            width={carouselWidth}
            height={carouselHeight}
          />
          {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center  md:block">
            <h5 className={`text-3xl text-pink-700 ${amatic.className}`}>
              Blue Algae
            </h5>
          </div> */}
        </div>

        {items.slice(1).map((item) => (
          <div
            key={item.alt}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={item.src}
              className="block w-full"
              alt={item.alt}
              width={carouselWidth}
              height={carouselHeight}
            />
            {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center md:block">
              <h5 className={`text-3xl text-pink-700 ${amatic.className}`}>
                {item.alt}
              </h5>
            </div> */}
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-pink-600 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-pink-800 hover:no-underline hover:opacity-90 hover:outline-none focus:text-pink-800 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
      >
        <span className="inline-block h-20 w-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-20 w-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-pink-600 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-pink-800 hover:no-underline hover:opacity-90 hover:outline-none focus:text-pink-800 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
      >
        <span className="inline-block h-20 w-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-20 w-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}

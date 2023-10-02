import { Spinner } from "flowbite-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import FeatureList from "../FeatureList";

const DynamicCarousel = dynamic(() => import("../Carousel"), {
  ssr: false,
});

export default function UpperFold() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fetchingLocation, setFetchingLocation] = useState(false);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  const getUserLocation = (
    callback: (position: GeolocationPosition) => void,
    errorCallback: (error: GeolocationPositionError) => void
  ) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          callback(position);
        },
        (error: GeolocationPositionError) => {
          errorCallback(error);
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

  const handleButtonClick = () => {
    setFetchingLocation(true);

    // Example usage
    getUserLocation(
      (position: GeolocationPosition) => {
        setFetchingLocation(false);
        setLocation(position);
      },
      (error: GeolocationPositionError) => {
        setFetchingLocation(false);
      }
    );
  };

  return (
    <div className="relative isolate pt-4 flex flex-1 flex-col pb-10">
      {/* add div with background image to cover whole page */}
      <div className="absolute inset-0 bg-cover bg-center z-[-1] opacity-25">
        <Image
          alt="Salt Spring Island Kombucha"
          src="/pexels-red-nguyen-17924736.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          layout="fill"
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="items-center justify-center flex flex-1">
            <Image
              src="/logo.png"
              alt="Salt Spring Island Kombucha"
              height={124}
              width={330}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <DynamicCarousel />
      </div>

      <FeatureList />

      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-xl px-8 py-4 text-center mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900"
              onClick={handleButtonClick}
            >
              {fetchingLocation && (
                <Spinner aria-label="Loading location info" className="mr-2" />
              )}
              Find Kombucha Near Me
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <div className="text-gray-500 text-center">
          © 2023 Salt Spring Island Kombucha
        </div>
        <div className="text-gray-500 text-center">
          <a
            href="https://www.pexels.com/photo/river-in-summer-17924736/"
            target="_blank"
          >
            Photo by Red Nguyen
          </a>
        </div>
      </div>
    </div>
  );
}

import { amatic } from "@/app/fonts";
import { FaLocationDot } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";

export default function FeatureList() {
  return (
    <section className="bg-pink-200 opacity-70 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h1
          className={`text-4xl font-thin tracking-tight text-black sm:text-6xl  ${amatic.className}`}
        >
          From Our Farm To Your Bottle
        </h1>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <IoBusiness className="mx-auto mb-4 w-12 h-12 text-primary-600" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Family Owned and Operated
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              No corporate overlords here
            </p>
          </div>
          <div>
            <FaLocationDot className="mx-auto mb-4 w-12 h-12 text-primary-600" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">Location</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We are located in beautiful Salt Spring Island, B.C.
            </p>
          </div>
          <div>
            <svg
              className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Organic</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We use locally sourced, organic ingredients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

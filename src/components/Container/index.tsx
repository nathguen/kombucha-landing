import Image from "next/image";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate pt-4 flex flex-1 flex-col pb-10">
      {/* add div with background image to cover whole page */}
      <div className="absolute inset-0 bg-cover bg-center z-[-1] opacity-25">
        <Image
          alt="Salt Spring Island Kombucha"
          src="/pexels-red-nguyen-17924736.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          fill
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

      {children}

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

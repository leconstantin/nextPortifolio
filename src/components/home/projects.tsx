import { images } from "@/lib";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <div className="mt-16 sm:mt-6 ">
        <p className="text-base text-zinc-600 mb-20">
          Some of the side{" "}
          <span className="dark:text-zinc-300 font-bold">projects</span>{" "}
          i&apos;m currently working on:
        </p>

        <div className="-my-4 flex justify-center gap-5  py-4 sm:gap-8 group">
          {images.map((image, index) => (
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-transparent sm:w-72 sm:rounded-2xl rotate-2 hover:-rotate-2 ease-in-out duration-300"
              key={index}
            >
              <Image
                width={800}
                height={800}
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

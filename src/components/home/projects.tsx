import { images } from "@/lib";

export default function Projects() {
  return (
    <div>
      <div className="mt-16 sm:mt-6 ">
        <p className="text-base text-zinc-600 mb-20">
          Some of the side projects i&apos;m currently working on:
        </p>

        <div className="-my-4 flex justify-center gap-5  py-4 sm:gap-8">
          {images.map((image, index) => (
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2"
              key={index}
            >
              <img
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

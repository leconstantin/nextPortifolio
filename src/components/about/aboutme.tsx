import { contents } from "@/lib";

export default function AboutMe() {
  return (
    <div className="lg:order-first lg:row-span-2">
      {contents.map((side, index) => (
        <div key={index}>
          <h1 className="text-4xl font-roboto font-medium tracking-tight text-zinc-800 sm:text-5xl">
            {side.title}
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 font-roboto">
            <p>{side.textA}</p>

            <p>{side.textB}</p>

            <p>{side.textC}</p>

            <p>{side.textD}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { work } from "@/lib";

export default function WorkStation() {
  return (
    <section className="md:border-l md:border-zinc-100  md:pl-6">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold text-zinc-800">Workstation</h2>
        <div className="md:col-span-3">
          <ul className="space-y-16">
            {work.map((item, index) => (
              <li className="flex flex-col items-start" key={index}>
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 ">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
                  {item.subtitile}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

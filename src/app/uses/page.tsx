import Design from "@/components/uses/design";
import Development from "@/components/uses/development";
import Productivity from "@/components/uses/productivity";
import WorkStation from "@/components/uses/workstation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
};
export default function Uses() {
  return (
    <main>
      <div>
        <div className="pt-14 sm:pt-18">
          <div className="max-w-2xl px-1">
            <h1 className="text-4xl font-bold font-roboto  tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Software I use, gadgets I love, and other things I recommend.
            </h1>
            <p className="mt-6 text-base font-roboto text-zinc-600 dark:text-zinc-400">
              I get asked a lot about the things I use to build software, stay
              productive, or buy to fool myself into thinking I&apos;m being
              productive when I&apos;m really just procrastinating. Here&apos;s
              a big list of all of my favorite stuff.
            </p>
          </div>
        </div>
        <div className="pt-16">
          <div className="space-y-20">
            <WorkStation />

            <Development />

            <Design />

            <Productivity />
          </div>
        </div>
      </div>
    </main>
  );
}

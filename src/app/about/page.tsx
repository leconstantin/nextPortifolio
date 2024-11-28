import AboutMe from "@/components/about/aboutme";
import Follow from "@/components/about/follow";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <main>
      <div className="py-20 mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto_1fr]">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none  mx-auto">
              <Image
                width={800}
                height={800}
                src="/images/me.jpeg"
                alt="My about image"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
              />
            </div>
          </div>

          <AboutMe />

          <div className="lg:pl-20">
            <Follow />
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Certificates",
};
export default function Certificates() {
  return (
    <main>
      <section>
        <div className="pt-14 sm:pt-18">
          <div className="max-w-2xl px-1">
            <h1 className="text-4xl font-bold font-roboto  tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Professional Certification
            </h1>
            <p className="mt-6 text-base font-roboto text-zinc-600 dark:text-zinc-300">
              A Comprehensive Collection of Industry-Recognized Certifications
              That Highlight My Dedication to Professional Growth, Mastery of
              Relevant Technologies, and Commitment to Staying Ahead in an
              Ever-Evolving Digital Landscape.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        {/* TODO: Leadership */}
        <article>
          <h1 className="text-teal-400 font-roboto font-bold py-12">
            LeaderShip
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Name:</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold">
                  I LeadS
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Oragization:</p>
                <div>
                  <Image
                    src="/images/ilead.png"
                    alt=""
                    width={800}
                    height={800}
                    className="h-16 w-full object-cover dark:invert"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Place :</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold">
                  {" "}
                  Ecole des science Byimana
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Life span :</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold">
                  Forever
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-roboto text-zinc-600 leading-7 dark:text-zinc-400">
                A Comprehensive Collection of Industry-Recognized Certifications
                That Highlight My Dedication to Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape.
              </p>
            </div>
          </div>
        </article>

        <article className="pt-12">
          <h1 className="text-teal-400 font-roboto font-bold pb-6">
            Programming
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Name:</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold flex flex-wrap">
                  <span>Programming for Everybody</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Oragization:</p>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/unMichigan.png"
                    className="h-16 w-full  object-cover dark:invert"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Place :</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold">
                  {" "}
                  Coursera
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Life span :</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold">
                  Forever
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-roboto text-zinc-600 dark:text-zinc-400 leading-7">
                A Comprehensive Collection of Industry-Recognized Certifications
                That Highlight My Dedication to Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14 pt-14">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Name:</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold flex flex-wrap">
                  Python Data Structures
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Oragization:</p>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/unMichigan.png"
                    className="h-16 w-full  object-cover dark:invert"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Place :</p>
                <p className="text-zinc-600 font-semibold dark:text-zinc-200">
                  {" "}
                  Coursera
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Life span :</p>
                <p className="text-zinc-600 font-semibold dark:text-zinc-200">
                  Forever
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-roboto text-zinc-600 dark:text-zinc-400 leading-7">
                A Comprehensive Collection of Industry-Recognized Certifications
                That Highlight My Dedication to Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14 pt-14">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Name:</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold flex flex-wrap">
                  <span>Programming for Everybody</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Oragization:</p>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/unMichigan.png"
                    className="h-16 w-full  object-cover dark:invert"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Place :</p>
                <p className="text-zinc-600 font-semibold dark:text-zinc-200">
                  {" "}
                  Coursera
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Life span :</p>
                <p className="text-zinc-600 font-semibold dark:text-zinc-200">
                  Forever
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-roboto text-zinc-600 dark:text-zinc-400 leading-7">
                A Comprehensive Collection of Industry-Recognized Certifications
                That Highlight My Dedication to Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape.
              </p>
            </div>
          </div>
        </article>

        <article className="pt-12">
          <h1 className="text-teal-400 font-roboto font-bold pb-8">
            Digital Skills
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Name:</p>
                <p className="text-zinc-600 dark:text-zinc-200 font-semibold flex flex-wrap">
                  <span>Digital skills Foundation</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-zinc-400">Oragization:</p>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/gsflogo.png"
                    className="h-14 w-full object-cover dark:invert"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Place :</p>
                <p className="text-zinc-600 font-semibold dark:text-zinc-200">
                  {" "}
                  Coursera
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400">Life span :</p>
                <p className="text-zinc-600 font-semibold dark:text-zinc-200">
                  Forever
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-roboto text-zinc-600 dark:text-zinc-400 leading-7">
                A Comprehensive Collection of Industry-Recognized Certifications
                That Highlight My Dedication to Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape Professional Growth, Mastery of
                Relevant Technologies, and Commitment to Staying Ahead in an
                Ever-Evolving Digital Landscape.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

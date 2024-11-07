import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
export default function Hero() {
  return (
    <main>
      <div className="pt-12">
        <div className="backdrop-blur rounded-full">
          <Image
            width={500}
            height={500}
            src="/images/me.jpeg"
            alt="Leo constantin image"
            title="Muhirwe Leo Constantin"
            loading="lazy"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover bg-zinc-300"
          />
        </div>
      </div>

      <div className="max-w-2xl">
        <div className="pt-12 pb-2">
          <h1 className="text-4xl font-roboto font-semibold text-zinc-800 sm:text-3xl flex flex-col justify-center gap-2">
            👋 Hello! I&apos;m Constantin,{" "}
            <mark className="text-zinc-700 bg-teal-200 w-80">
              FrontEnd developer
            </mark>{" "}
            <span className="text-lg text-zinc-700 ">
              based in Kigali , Rwanda.
            </span>
          </h1>
          <p className="pt-6 font-roboto text-base text-zinc-600">
            I love building tools that are user-friendly, simple and delightful.
            I was student at coursera learning FrontEnd Development course
            provided by meta where i have gained different modern skills about
            FrontEnd development.
          </p>
          <p className="py-6 font-roboto text-base text-zinc-600 ">
            I&apos;m currently looking for a new role as developer.
            <mark id="hire" className="bg-teal-200">
              Hire me?
            </mark>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white hover:bg-transparent h-10 w-10 text-black dark:hover:text-white flex items-center justify-center rounded-full shadow shadow-teal-400 dark:shadow-none hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
          <BsTwitterX size={20} />
        </div>
        <div className="bg-white hover:bg-transparent h-10 w-10 text-black dark:hover:text-white flex items-center justify-center rounded-full shadow shadow-teal-400 dark:shadow-none hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
          <FaYoutube size={20} />
        </div>
        <div className="bg-white hover:bg-transparent h-10 w-10 text-black dark:hover:text-white flex items-center justify-center rounded-full shadow shadow-teal-400 dark:shadow-none hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
          <FaFacebookF size={20} />
        </div>
        <div className="bg-white hover:bg-transparent h-10 w-10 text-black dark:hover:text-white flex items-center justify-center rounded-full shadow shadow-teal-400 dark:shadow-none hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
          <FaInstagram size={20} />
        </div>
        <div className="bg-white hover:bg-transparent h-10 w-10 text-black dark:hover:text-white flex items-center justify-center rounded-full shadow shadow-teal-400 dark:shadow-none hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
          <FaWhatsapp size={20} />
        </div>
      </div>
    </main>
  );
}

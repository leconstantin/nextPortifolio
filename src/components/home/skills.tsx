import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="py-10 max-w-2xl">
      <div>
        <p className="font-roboto text-teal-400 text-lg">
          Development Proficiencies
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5">
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <FaHtml5 size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <FaCss3Alt size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <IoLogoJavascript size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <SiTypescript size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <FaReact size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <RiNextjsFill size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <RiTailwindCssFill size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <SiPhp size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <FaPython size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <FaJava size={39} />
        </div>
        <div className="ring-1 ring-zinc-200  size-20 flex justify-center items-center rounded-xl shadow-md hover:ring-teal-500 hover:scale-110 hover:rotate-3 ease-in duration-300 cursor-pointer">
          <TbBrandCpp size={39} />
        </div>
      </div>
    </div>
  );
}

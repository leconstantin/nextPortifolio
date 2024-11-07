import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
export default function Follow() {
  return (
    <div>
      <ul>
        <li className="flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <BsTwitterX />
            <span>Follow on x</span>
          </a>
        </li>
        <li className="mt-4 flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <FaInstagram />
            <span>Follow on instagram</span>
          </a>
        </li>
        <li className="mt-4 flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <FaGithub />
            <span>Follow on Github</span>
          </a>
        </li>
        <li className="mt-4 flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <FaLinkedin />
            <span>Follow on LinkedIn</span>
          </a>
        </li>
        <li className="mt-8 border-t border-zinc-100 pt-8 flex">
          <a
            href=""
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <SiGmail />
            <span className="ml-4">muhirweleoconstantin@gamil.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

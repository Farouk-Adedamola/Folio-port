import { motion } from "framer-motion";
import { fadeUp } from "../data";
import {
  FaCss3Alt,
  FaGitSquare,
  FaHtml5,
  // FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import {
  // SiExpress,
  SiFirebase,
  // SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  // SiCypress,
  // SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <motion.section
      className="flex w-full h-full items-center justify-between flex-col-reverse md:flex-row font-Poppins px-4"
      {...fadeUp}
    >
      <div className="flex-1 h-full flex justify-center flex-col px-4 md:px-8 lg:px-16">
        <h2 className="title mt-5 md:mt-0">My Skills</h2>
        <div className="flex gap-4 xl:gap-6 2xl:gap-8 flex-wrap mt-6 xl:mt-8 mb-5 md:mb-0">
          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <FaHtml5 className="text-3xl lg:text-5xl 2xl:text-7xl fill-[#e34c26]" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Html5
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <FaCss3Alt className="text-3xl lg:text-5xl 2xl:text-7xl fill-primary" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              CSS3
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <IoLogoJavascript className="text-3xl lg:text-5xl 2xl:text-7xl fill-[#c2c201]" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              JavaScript
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <FaReact className="text-3xl lg:text-5xl 2xl:text-7xl fill-blue" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              React JS
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <TbBrandNextjs className="text-3xl lg:text-5xl 2xl:text-7xl fill-black stroke-white" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Next JS
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <SiTailwindcss className="text-3xl lg:text-5xl 2xl:text-7xl fill-blue" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Tailwind
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <FaSass className="text-3xl lg:text-5xl 2xl:text-7xl fill-primary" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Sass
            </h3>
          </div>

          <div className="flex flex-col items-center skill">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <SiStyledcomponents className="text-3xl lg:text-5xl 2xl:text-7xl fill-primary" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Styled
            </h3>
          </div>

          <div className="flex flex-col items-center skill">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow">
              <FaGitSquare className="text-3xl lg:text-5xl 2xl:text-7xl fill-[#f34f29]" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Git
            </h3>
          </div>

          <div className="flex flex-col items-center skill">
            <span className="inline-block p-2 sm:p-3 2xl:p-4 rounded-full duration-700 hover:scale-110 skill-shadow">
              <SiFirebase className="text-3xl lg:text-5xl 2xl:text-7xl fill-[#ffa611]" />
            </span>
            <h3 className="hidden md:block text-gray text-sm lg:text-base mt-2 2xl:text-lg font-semibold">
              Firebase
            </h3>
          </div>
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center rounded-lg p-4 w-[80%] max-h-[40rem] md:h-[80%] mt-8 md:mt-0 md:mr-4 overflow-hidden  my-shadow2 move swing">
        <img
          src="/images/Programmer-cuate.png"
          alt="avatar"
          className="w-56 md:w-[30rem] 2xl:w-[40rem] h-56 md:h-[30rem] 2xl:h-[40rem] scale-125 md:scale-100 object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Skills;

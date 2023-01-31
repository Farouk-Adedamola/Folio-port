import { motion } from "framer-motion";
import { fadeUp, projects } from "../data";
import {
  FaChevronCircleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [index, setIndex] = useState(1);
  const [disable, setDisable] = useState(false);

  const handleLeftClick = () => {
    if (index === 1) return;

    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 400);

    const div = document.querySelector("#slider");
    const article = document.querySelector("article");

    div.scrollLeft = div.scrollLeft - article.clientWidth - 40;
    setIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    if (index === projects.length) return;

    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 400);

    const div = document.querySelector("#slider");
    const article = document.querySelector("article");

    div.scrollLeft = div.scrollLeft + article.clientWidth + 40;
    setIndex((prev) => prev + 1);
  };

  return (
    <motion.section
      className="flex w-full h-full flex-col-reverse md:flex-row items-center justify-between font-Poppins px-4"
      {...fadeUp}
    >
      <div className="w-full md:w-[60%] h-full flex justify-center items-center flex-col">
        <h2 style={{ margin: "1rem 0", textAlign: "left" }} className="title">
          Projects
        </h2>
        <div
          className="w-full flex overflow-hidden gap-10 px-4 md:px-8 py-4 scroll-smooth duration-200"
          id="slider"
        >
          {projects.map((data, index) => {
            const { name, img, tech, link } = data;

            return (
              <article
                key={index}
                className="min-w-full h-[38vh] md:h-[60vh] rounded-xl overflow-hidden my-shadow2"
              >
                <img
                  src={"/projects/" + img}
                  alt="project-image"
                  className="w-full h-[72%] object-cover"
                  style={{ borderBottom: "2px solid black" }}
                />
                <div className="px-2 md:px-4">
                  <div className="mt-1 md:mt-2 flex justify-between items-center">
                    <a href={link}>
                      <h3 className="font-semibold text-base md:text-xl lg:text-2xl button">
                        {name}
                      </h3>
                    </a>

                    <a href={link} target="_blank">
                      <FaChevronCircleRight className="text-xl lg:text-3xl title" />
                    </a>
                  </div>
                  <h4 className="text-gray text-xs md:text-base">
                    Technology Used:
                  </h4>
                  <div className="lg:ml-4 flex gap-2 lg:gap-4">
                    {tech.map((data, index) => (
                      <li
                        key={index}
                        className="list-none md:list-disc font-bold text-sm md:text-base lg:text-lg button"
                      >
                        {data}
                      </li>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <button
            className={`btn ${index === 1 ? "text-slate-400" : ""}`}
            onClick={handleLeftClick}
            disabled={disable}
          >
            <FaChevronLeft />
          </button>
          <div className="p-2 bg-slate-300 rounded-lg flex gap-2 text-blue font-bold text-base md:text-lg">
            <span>{index}</span>
            <span>/</span>
            <span>{projects.length}</span>
          </div>
          <button
            className={`btn ${
              index === projects.length ? "text-slate-400" : ""
            }`}
            onClick={handleRightClick}
            disabled={disable}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center rounded-lg p-4 w-[80%] max-h-[40rem] md:h-[80%] mt-8 md:mt-0 md:mr-4 overflow-hidden bg-fade-red my-shadow2 move swing">
        <img
          src="/images/Nerd-amico.png"
          alt="avatar"
          className="w-56 md:w-[30rem] 2xl:w-[40rem] h-56 md:h-[30rem] 2xl:h-[40rem]  object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Projects;

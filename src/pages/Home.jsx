import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
// import Farouk from "../resume/Farouk.pdf"

import { fadeUp } from "../data";

const Home = () => {
  return (
    <motion.section
      className="flex w-full h-full items-center justify-between flex-col-reverse md:flex-row font-Poppins px-4"
      {...fadeUp}
    >
      <div className="flex-1 flex items-center justify-center text-center flex-col px-0 md:px-8 lg:px-16">
        <h2 className="title leading-relaxed">
          Hi 👋 I am <br />
          {/* <span style={{ color: "#6500e0" }}>Farouk Adedamola Ejalonibu</span> */}
          <TypewriterComponent
            // className="title"
            options={{
              strings: [
                "Farouk Adedamola Ejalonibu",
                "A Frontend Developer",
                "End to End Developer",
              ],
              delay: 100,
              deleteSpeed: 150,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h3 className="text-lg md:text-xl xl:text-3xl mt-4 font-semibold text-darkblack">
          A Frontend Developer. 💻
        </h3>
        <div className=" mt-4">
          <span style={{ fontWeight: "bold" }} className="text-sm md:text-base">
            {"<help> "}
          </span>
          <span className="button text-sm md:text-base">
            How can I help you?
          </span>
          <span
            style={{ fontWeight: "bold" }}
            className=" text-sm md:text-base"
          >
            {" </help>"}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-8">
          <Link to="/about">
            <button className="btn">Explore ...</button>
          </Link>
          {/* <form method="get" target="_blank" download="new" action="Farouk.pdf"> */}
          <button className="btn">
            <a href="/src/resume/Farouk.pdf" download="Farouk.pdf">
              Open CV!
            </a>
          </button>
          {/* </form> */}
        </div>
      </div>
      <div className="md:flex-1 flex items-center justify-center rounded-lg p-4 w-[80%] max-h-[40rem] md:h-[80%] mt-8 md:mt-0 md:mr-4 overflow-hidden move my-shadow2 swing">
        <img
          src="/images/world.png"
          alt="avatar"
          className="w-52 md:w-[25rem] 2xl:w-[35rem] h-52 md:h-[25rem] 2xl:h-[35rem] object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Home;

import { motion } from "framer-motion";
import { fadeUp } from "../data";
import {
  FaEnvelope,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="flex w-full h-full items-center justify-between flex-col-reverse md:flex-row font-Poppins px-4"
      {...fadeUp}
    >
      <div className="flex-1 h-full flex justify-center flex-col px-4 md:px-8 lg:px-16">
        <h2 className="title mt-5 md:mt-0">Have A New Project?</h2>
        <div className="mt-2 md:mt-10 mb-5 md:mb-0 text-gray">
          <h2
            style={{ color: "#191716" }}
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Would you like to have me in your team? <br /> Or hire me as a
            Freelancer on your next Project ? <br /> Drop a mail for me below
          </h2>
          <a href="mailto:faroukadedamola1@gmail.com">
            <button className="btn mt-4">
              Send Message <FaEnvelope className="inline-block text-lg ml-2" />
            </button>
          </a>
          <h2
            style={{ color: "#191716" }}
            className="font-bold text-sm md:text-base lg:text-lg mt-4 md:mt-8"
          >
            Or Contact me on my social media handles.
          </h2>
          <div className="mt-4 flex gap-4">
            <a
              target="_blank"
              href="https://github.com/Farouk-Adedamola"
              className="inline-block p-2 md:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow"
            >
              <FaGithub className="text-xl md:text-2xl 2xl:text-4xl fill-black" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/farouk-adedamola/"
              className="inline-block p-2 md:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow"
            >
              <FaLinkedin className="text-xl md:text-2xl 2xl:text-4xl fill-blue" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Farouk_fish"
              className="inline-block p-2 md:p-3 2xl:p-4 rounded-full duration-300 hover:scale-110 skill-shadow"
            >
              <FaTwitter className="text-xl md:text-2xl 2xl:text-4xl fill-blue" />
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center rounded-lg p-4 w-[80%] max-h-[40rem] md:h-[80%] mt-8 md:mt-0 md:mr-4 overflow-hidden  my-shadow2 move">
        <img
          src="/images/Share link-pana.png"
          alt="avatar"
          className="w-56 md:w-[30rem] 2xl:w-[40rem] h-56 md:h-[30rem] 2xl:h-[40rem] object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { fadeUp } from "../data";

const About = () => {
  return (
    <motion.section
      className="flex w-full h-full items-center justify-between flex-col-reverse md:flex-row font-Poppins px-4"
      {...fadeUp}
    >
      <div className="flex-1 h-full flex justify-center flex-col px-4 md:px-8 lg:px-16">
        <h2 className="title mt-5 md:mt-0">About Me</h2>
        <div className="mt-5 md:mt-10 mb-5 md:mb-0 text-[#333]">
          <h2
            style={{ color: "#191716" }}
            className="font-bold text-[15px] md:text-base lg:text-lg"
          >
            <span className="button font-semibold mr-2">Name:</span> Farouk
            Adedamola
          </h2>
          <h2
            style={{ color: "#191716" }}
            className="font-bold text-[15px] md:text-base lg:text-lg mt-1 md:mt-2 lg:mt-3"
          >
            <span className="button font-semibold mr-2">Role:</span>
            Frontend Developer
          </h2>

          <h2
            style={{ color: "#191716" }}
            className="font-bold text-[15px] md:text-base lg:text-lg mt-1 md:mt-2 lg:mt-3"
          >
            <span className="button font-semibold mr-2">Country:</span>
            Nigeria
          </h2>
          <h2
            style={{ color: "#191716" }}
            className="font-bold text-[15px] md:text-base lg:text-lg mt-1 md:mt-2 lg:mt-3"
          >
            <span className="button font-semibold mr-2">Location:</span>
            Abuja
          </h2>
          <h2
            style={{ color: "#191716" }}
            className="font-bold leading-loose text-[15px] md:text-base lg:text-lg mt-1 md:mt-2 lg:mt-3"
          >
            <span className="button font-semibold mr-2">Note about me:</span>I
            am a detail oriented, organized and meticulous person. I works at
            fast pace to meet tight deadlines. I am enthuastic person ready to
            contribute to your success.
          </h2>
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center rounded-lg p-4 w-[80%] max-h-[40rem] md:h-[80%] mt-8 md:mt-0 md:mr-4 overflow-hidden bg-fade-red my-shadow2 move swing">
        <img
          src="/images/Nerd-bro.png"
          alt="avatar"
          className="w-56 md:w-[30rem] 2xl:w-[40rem] h-56 md:h-[30rem] 2xl:h-[40rem] scale-125 md:scale-100 object-cover"
        />
      </div>
    </motion.section>
  );
};

export default About;

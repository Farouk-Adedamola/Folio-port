export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "linear" },
};

export const fadeUp = {
  initial: { y: 300, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -300, opacity: 0 },
  transition: { damping: 20, duration: 0.7 },
};

export const fadeRight = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { damping: 20, duration: 0.5, delay: 2 },
};

export const projects = [
  {
    name: "vacanxie",
    img: "vacancy.png",
    tech: ["React JS"],
    link: "https://vacanxe-sigma.vercel.app/",
  },
  {
    name: "Interno",
    img: "interno.png",
    tech: ["CSS", "Styled-components", "ReactJS"],
    link: "https://interno-woad.vercel.app/",
  },
  {
    name: "Icelandic",
    img: "icelandic.png",
    tech: ["ReactJS"],
    link: "https://icelandic-ui.vercel.app/",
  },
  {
    name: "Omni Food",
    img: "omni-food.png",
    tech: ["ReactJS"],
    link: "http://omni-food-eight.vercel.app/",
  },
  {
    name: "Data Analytics",
    img: "dataanalytics.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://data-analytics-eja.netlify.app/",
  },
  {
    name: "GPT Website",
    img: "gpt-3.png",
    tech: ["ReactJS"],
    link: "https://gpt-3-theta.vercel.app/",
  },
];

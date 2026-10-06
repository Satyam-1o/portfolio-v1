import habitzy from "../assets/ProjectThumbs/Habitzy.png";
import skippz from "../assets/ProjectThumbs/Skippz.png";

export type Project = {
  title: string;
  desc: string;
  stack?: string[];
  image: string;
  url: string;
};

export const projects: { personal: Project[]; commercial: Project[] } = {
  personal: [
    {
      title: "Habitzy",
      desc: "a habit-tracking platform that lets users track their habits with progress.",
      stack: ["React", "Node.js", "MongoDB", "Express.js", "Docker"],
      image: habitzy,
      url: "https://github.com/DevHanza/habitzy",
    },
  ],
  commercial: [
    {
      title: "Skippz.com",
      desc: "Website for a video hosting platform company built for creators, educators, and teams.",
      image: skippz,
      url: "https://skippz.com/",
    },
  ],
};
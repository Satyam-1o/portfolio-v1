import habitzy from "../assets/ProjectThumbs/Habitzy.png";

export type Project = {
  title: string;
  desc: string;
  stack?: string[];
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "Habitzy",
    desc: "a habit-tracking platform that lets users track their habits with progress.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Docker"],
    image: habitzy,
    url: "https://github.com/DevHanza/habitzy",
  },
];
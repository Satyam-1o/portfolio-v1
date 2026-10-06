import eduQuest from "../assets/ProjectThumbs/edu-quest-cover.png";
import haikei from "../assets/ProjectThumbs/haikei.png";

export type Project = {
  title: string;
  desc: string;
  stack?: string[];
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "EduQuest",
    desc: "EduQuest is a platform where you gamify your environmental learning journey with interactive lessons, projects, and a vibrant community.",
    stack: ["React", "Tailwind CSS", "Supabase"],
    image: eduQuest,
    url: "https://github.com/Satyam-1o/EduQuest",
  },
  {
    title: "Haikei",
    desc: "High-quality wallpapers for desktop and mobile — from minimal to vibrant, with seamless browsing and quick downloads.",
    stack: ["React", "Tailwind CSS", "Firebase"],
    image: haikei,
    url: "https://haikei-wallpapers.vercel.app/",
  },
];
import habitzy from "../assets/ProjectThumbs/Habitzy.png";
import cafesy from "../assets/ProjectThumbs/Cafesy.png";
import schoolNotes from "../assets/ProjectThumbs/SchoolNotes.png";
import nextjsWPBlog from "../assets/ProjectThumbs/NextjsWPBlog.png";

import siterwell from "../assets/ProjectThumbs/Siterwell.png";
import skippz from "../assets/ProjectThumbs/Skippz.png";
import redwaveCN from "../assets/ProjectThumbs/RedwaveCN.png";
import solviaInc from "../assets/ProjectThumbs/SolviaInc.png";
import danuAlp from "../assets/ProjectThumbs/DanuALP.png";
import motiveOps from "../assets/ProjectThumbs/MotiveOps.png";
import shineCleaning from "../assets/ProjectThumbs/ShineCleaning.png";
import glitzfairry from "../assets/ProjectThumbs/Glitzfairry.png";

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
    {
      title: "Next.js WP Blog",
      desc: "A modern tech blog website with headless WordPress focused on UI/UX.",
      stack: ["Next.js", "TypeScript", "WordPress"],
      image: nextjsWPBlog,
      url: "https://github.com/DevHanza/nextjs-wordpress-blog",
    },
    {
      title: "Cafesy",
      desc: "An online store for a coffee shop where you can buy products, contact, email newsletter, and more.",
      stack: ["JavaScript", "Express.js", "Node.js", "HTML", "SCSS"],
      image: cafesy,
      url: "https://github.com/DevHanza/cafesy",
    },
    {
      title: "SchoolNotes",
      desc: "Note taking app that lets users manage their notes in a user-friendly interface.",
      stack: ["Angular", "Node.js", "MongoDB", "Express.js"],
      image: schoolNotes,
      url: "https://github.com/DevHanza/SchoolNotes",
    },
  ],
  commercial: [
    {
      title: "Skippz.com",
      desc: "Website for a video hosting platform company built for creators, educators, and teams.",
      image: skippz,
      url: "https://skippz.com/",
    },
    {
      title: "Siterwellhome.com",
      desc: "Modern website for a smart security ecosystems manufactuirng company.",
      stack: [],
      image: siterwell,
      url: "https://siterwell.huddleful.com/",
    },
    {
      title: "Redwavecn.com",
      desc: "Website for a digital marketing agency that helps chinese businesses.",
      image: redwaveCN,
      url: "https://redwavecn.com/",
    },
    {
      title: "Solviainc.com",
      desc: "Website for a US-based company specializing in patient recruitment solutions.",
      image: solviaInc,
      url: "https://solviainc.com/",
    },
    {
      title: "Danualp.com",
      desc: "Website for a Austria-based patient recruitment company for clinical trials.",
      image: danuAlp,
      url: "https://danualp.com/",
    },
    {
      title: "Motiveops.com",
      desc: "Website for an AI automation agency based in Australia.",
      image: motiveOps,
      url: "https://motiveops.com/",
    },
    {
      title: "Glitzfairry",
      desc: "An E-commerce website for a online women's bag brand in Sri Lanka.",
      image: glitzfairry,
      url: "#",
    },
    {
      title: "Shinecleaning.it",
      desc: "Website for a eco-friendly cleaning service company, based in Milan, Italy.",
      image: shineCleaning,
      url: "https://sandbox-2.xcodelabs.online/",
    },
  ],
};

import goIcon from "../assets/logos/go.svg?raw";
import typescriptIcon from "../assets/logos/typescript.svg?raw";
import javascriptIcon from "../assets/logos/javascript.svg?raw";
import pythonIcon from "../assets/logos/python.svg?raw";
import reactIcon from "../assets/logos/react.svg?raw";
import nextjsIcon from "../assets/logos/nextjs.svg?raw";
import nodejsIcon from "../assets/logos/nodejs.svg?raw";
import expressIcon from "../assets/logos/express.svg?raw";
import tailwindIcon from "../assets/logos/tailwind.svg?raw";
import postgresqlIcon from "../assets/logos/postgresql.svg?raw";
import mongodbIcon from "../assets/logos/mongodb.svg?raw";
import sqliteIcon from "../assets/logos/sqlite.svg?raw";
import redisIcon from "../assets/logos/redis.svg?raw";
import dockerIcon from "../assets/logos/docker.svg?raw";
import gitIcon from "../assets/logos/git.svg?raw";
import vercelIcon from "../assets/logos/vercel.svg?raw";

export type Skill = {
  name: string;
  /** Inline SVG, bundled locally so it always renders. */
  icon?: string;
  /** Invert the icon for dark-colored logos (Next.js, Express, Vercel). */
  invert?: boolean;
  /** Start this chip on a new row inside its group. */
  newRow?: boolean;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "Go", icon: goIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Python", icon: pythonIcon },
    ],
  },
  {
    label: "Frameworks & tools",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextjsIcon, invert: true },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressIcon, invert: true },
      { name: "Tailwind CSS", icon: tailwindIcon, newRow: true },
    ],
  },
  {
    label: "Infra & data",
    skills: [
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "SQLite", icon: sqliteIcon },
      { name: "Redis", icon: redisIcon },
      { name: "Vercel", icon: vercelIcon, invert: true },
      { name: "Docker", icon: dockerIcon, newRow: true },
      { name: "Git", icon: gitIcon },
    ],
  },
];
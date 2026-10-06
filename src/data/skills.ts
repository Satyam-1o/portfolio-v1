export type Skill = {
  title: string;
  iconURL: string;
  /** Invert the icon color (for dark logos on the dark theme). */
  invert?: boolean;
};

export const skills: Skill[] = [
  {
    title: "Go",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
  },
  {
    title: "TypeScript",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    title: "JavaScript",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    title: "React",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    title: "Node.js",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Express.js",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    invert: true,
  },
  {
    title: "MongoDB",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "PostgreSQL",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    title: "SQLite",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
  {
    title: "Tailwind CSS",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Docker",
    iconURL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];
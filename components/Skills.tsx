"use client";
import LogoLoop from "./reactbits/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGraphql,
  SiApollographql,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiRedux,
  SiExpo,
  SiBootstrap,
  SiGit,
  SiJest,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiGraphql />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
  {
    node: <SiApollographql />,
    title: "Apollo GraphQL",
    href: "https://www.apollographql.com",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node : <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node : <SiSequelize />,
    title: "Sequelize",
    href: "https://sequelize.org",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org",
  },
  {
    node : <SiExpo />,
    title: "Expo",
    href: "https://expo.dev",
  },
  {
    node : <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiJest />,
    title: "Jest",
    href: "https://jestjs.io",
  }
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="p-6 md:p-10 md:px-12 max-w-screen-2xl mx-auto bg-white text-black"
    >
      <h1 className="font-bold mb-10 text-2xl md:text-3xl">SKILLS</h1>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
        className="mb-10"
      />
    </section>
  );
};

export default Skills;

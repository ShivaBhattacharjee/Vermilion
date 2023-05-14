import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "AnimeTrix",
    imgSrc: "project-imgs/animetrix-website.png",
    code: "https://github.com/ShivaBhattacharjee/AnimeTrix",
    projectLink: "https://animetrix.vercel.app/",
    tech: ["Javascript","ReactJs", "CSS", "MongoDb", "Express","NodeJs"],
    description:
      "Animetrix is a project that utilizes the Anilist platform to obtain information on various anime titles, and it combines this data with the Gogoanime API to provide ad-free streaming of anime content.",
    modalContent: (
      <>
        <p>
        Anime Trix is an anime streaming / downloading site that offers a vast collection of anime shows for streaming and downloading. 
        </p>
        <p>
        With a user-friendly interface, you can easily find your favorite anime shows and watch them in high-definition quality. 
        </p>
        <p>
        Our platform is updated regularly with the latest anime episodes, so you can stay up-to-date with your favorite shows.
          {":)"}
        </p>
        <p>
        Anime Trix is the go-to destination for anime lovers who want to watch their favorite shows anytime, anywhere.
        </p>
        <p>
          AnimTrix is hosted in vercel
        </p>
      </>
    ),
  },
  {
    title: "Vermilion",
    imgSrc: "project-imgs/portfolio.png",
    code: "https://github.com/ShivaBhattacharjee/Griffith-WhatsappBot",
    projectLink: "",
    tech: ["TypeScript","NextJs", "EmailJs","Framer-Motion", "SCSS"],
    description:
      "Vermilion is a stunning portfolio template designed to showcase your creative work with style and sophistication. Built using the cutting-edge Next.js framework, this template offers lightning-fast page loading times and a smooth user experience.",
    modalContent: (
      <>
        <p>
        Griffith is an opensource whatsapp bot built using javascript with little but useful features
        </p>
        <p>
          I work primarily on the backend, a collection of Node & Express
          microservices. Data is stored primarily in Postgres & cached in Redis.
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },

];

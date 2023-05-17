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
    imgSrc: "/project-imgs/animetrix-website.png",
    code: "https://github.com/ShivaBhattacharjee/AnimeTrix",
    projectLink: "https://animetrix.vercel.app/",
    tech: ["Javascript", "ReactJs", "CSS", "MongoDb", "Express", "NodeJs"],
    description:
      "Animetrix is a project that utilizes the Anilist platform to obtain information on various anime titles, and it combines this data with the Gogoanime API to provide ad-free streaming of anime content.",
    modalContent: (
      <>
      <p>AnimeTrix is an anime streaming website built using react js , expressjs , mongoDB and nodejs the website features a wide variety of shows and movies and many more features</p>
      <p>AnimeTrix offers an anime image search feature which lets users to know the source of the anime with the help of a screenshot</p>
      <p>Get anime airing date and time on the home screen </p>
      <p>Ai chat bot which engage with users and have a conversation with them and suggest anime users can also copy the response</p>
      <p>Streaming is paired with art player to offer an ad free streaming experience</p>
      <p>Users can create an account to save their watch history create bookmark and comment on the anime using our custom comment box</p>
      <p>Users can filter out anime based on genre</p>
      </>
    ),
  },
  {
    title: "Vermilion",
    imgSrc: "/project-imgs/portfolio.png",
    code: "https://github.com/ShivaBhattacharjee/vermilion",
    projectLink: "https://immashiva.vercel.app/",
    tech: ["TypeScript", "NextJs", "EmailJs", "Framer-Motion", "SCSS"],
    description:
      "Vermilion is a stunning portfolio template designed to showcase your creative work with style and sophistication. Built using the cutting-edge Next.js framework, this template offers lightning-fast page loading times and a smooth user experience.",
    modalContent: (
      <>
        <p>
          Vermilion is an exceptional portfolio template designed to showcase your creative work in a stunning and dynamic way. The template is built using TypeScript, which provides static type checking and helps ensure your code is robust and error-free.
        </p>
        <p>
          Vermilion is built on the Next.js framework, which offers many benefits such as fast page loading times and server-side rendering. This ensures that your portfolio website is performant, responsive, and delivers an excellent user experience.
        </p>
        <p>
          The template also integrates with EmailJS, a simple and reliable email delivery service that allows you to send messages via the contact form.
        </p>
        <p>
          Overall, Vermilion is an outstanding portfolio template that combines the latest technologies and libraries to deliver a modern, professional, and highly effective website for showcasing your creative work.
        </p>
      </>
    ),
  },

];

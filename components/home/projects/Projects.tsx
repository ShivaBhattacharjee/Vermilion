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
    imgSrc: "/project-imgs/portfolio.png",
    code: "https://github.com/ShivaBhattacharjee/Griffith-WhatsappBot",
    projectLink: "",
    tech: ["TypeScript","NextJs", "EmailJs","Framer-Motion", "SCSS"],
    description:
      "Vermilion is a stunning portfolio template designed to showcase your creative work with style and sophistication. Built using the cutting-edge Next.js framework, this template offers lightning-fast page loading times and a smooth user experience.",
    modalContent: (
      <>
        <p>
        Vermilion is an exceptional portfolio template designed to showcase your creative work in a stunning and dynamic way. The template is built using TypeScript, which provides static type checking and helps ensure your code is robust and error-free.
        </p>
        <p>
        <p>
        Vermilion is built on the Next.js framework, which offers many benefits such as fast page loading times and server-side rendering. This ensures that your portfolio website is performant, responsive, and delivers an excellent user experience.
        </p>
        The SCSS preprocessor is used for styling, enabling you to create customized styles that perfectly match your brand and personality. The result is a beautiful and modern design that is both eye-catching and user-friendly.
        </p>
        <p>
        The template also integrates with EmailJS, a simple and reliable email delivery service that allows you to send messages via the contact form. This ensures that your website visitors can easily get in touch with you, providing an easy way to connect and collaborate on new projects.
        </p>
        <p>
        The Framer Motion library is used for animations, enabling you to create engaging and visually appealing transitions and effects that bring your portfolio to life. Additionally, the AnimeJS library is utilized to create grid animations that add an extra layer of depth and interactivity to your website.
        </p>
        <p>
          Overall, Vermilion is an outstanding portfolio template that combines the latest technologies and libraries to deliver a modern, professional, and highly effective website for showcasing your creative work.
        </p>
      </>
    ),
  },

];

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
  {
    title: "Muxik",
    imgSrc: "/project-imgs/Muxik.png",
    code: "https://github.com/ShivaBhattacharjee/Muxik",
    projectLink: "https://muxik.netlify.app/",
    tech: ["JavaScript", "ReactJs", "Vite", "Framer-Motion", "TailwindCSS"],
    description:
      "Muxik is a music streaming and downloading platform developed on ReactJs. It provides users with a wide variety of songs, albums, playlists, and artists across different genres. Users can enjoy a seamless and immersive music listening experience through the platform.",
    modalContent: (
      <>
        <p>
          Muxik is a music streaming / downloading site that offers a vast library for streaming and downloading. With a user-friendly interface, you can easily find your favorite song and stream them in high-definition quality. Our platform is updated regularly with the songs, so you can stay up-to-date with your favorite songs.Muxik is the go-to destination for audiophiles who want to stream or download their favorite music anytime, anywhere
        </p>
        <p>
          Users can conveniently batch download their favorite music and enjoy it offline, making it perfect for road trips or areas with limited internet connectivity. Muxik&apos;s Progressive Web Application (PWA) support ensures seamless access across devices without the need for separate installations.
        </p>
        <p>
          Enhancing the listening experience, Muxik allows users to adjust volume levels, auto-skip songs, and repeat tracks with ease. Personalized song recommendations and curated top playlists help users discover new music and diversify their library. With Muxik, users can enjoy a tailored and immersive audio experience, thanks to its volume change feature that adapts to individual preferences.
        </p>
        <p>
          In summary, Muxik offers a convenient solution for music lovers. It provides batch downloading and offline streaming capabilities, along with features like PWA support, volume control, auto-skip, recommended songs, top playlists, and repeat functionality. With Muxik, users can effortlessly enjoy their favorite music, discover new tracks, and personalize their listening experience.
        </p>
      </>
    ),
  },
];

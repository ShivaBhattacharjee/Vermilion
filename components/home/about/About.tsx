import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Hi</span> there! My name is Shiva Bhattacharjee, and I&apos;m a Computer Science student with a passion for creating and designing websites. I have two years of experience in web development, specializing in the MERN stack. I enjoy coding and strive to build modern and visually appealing websites that provide excellent user experiences. I am proficient in front-end technologies such as HTML, CSS, JavaScript, and React, as well as back-end technologies like Node.js and MongoDB. I am always eager to learn and explore new technologies and frameworks. If you&apos;re looking for a developer who can deliver high-quality websites with a creative touch, I&apos;m here to help. Let&apos;s collaborate and bring your vision to life!
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

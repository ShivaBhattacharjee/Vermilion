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
              <span>Hi</span> there! My name is Shiva Bhattacharjee and I&apos;m a MERN stack developer. I&apos;m currently pursuing a Bachelor&apos;s degree in Computer Science, and I absolutely love to code. I&apos;m passionate about building modern and responsive websites that provide great user experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I have experience with front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies like Node.js and MongoDB. I&apos;m always eager to learn and explore new technologies and frameworks, and I enjoy working on challenging projects that push my skills to the limit.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you&apos;re looking for a developer who can deliver high-quality websites at a reasonable price, you&apos;ve come to the right place. I take pride in my work and always strive to exceed my clients&apos; expectations. So whether you need a simple landing page or a complex web application, I&apos;m here to help. Let&apos;s work together and bring your vision to life!
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

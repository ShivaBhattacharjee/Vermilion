import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md"
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>My Arsenal </span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">C++</span>
            <span className="chip">Rust</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">SCSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">NextJs</span>
            <span className="chip">Redux</span>
            <span className="chip">Redis</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySql</span>
            <span className="chip">Docker</span>
            <span className="chip">Prisma</span>
            <span className="chip">kubernetes</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdDevicesOther size="2.4rem" color="var(--brand)" />
            <span>Others</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Linux</span>
            <span className="chip">Vs Code</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Vercel</span>
            <span className="chip">Netlify</span>
            <span className="chip">Railway</span>
            <span className="chip">Postman</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

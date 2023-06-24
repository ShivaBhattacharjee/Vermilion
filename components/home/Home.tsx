import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { ScrollTop } from "../buttons/ScrollTop"
export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <ScrollTop />
          <div
            style={{
              height: "100px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          >
          </div>
        </main>
      </div>
    </>
  );
};

import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai"
export const Heading = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [selected, setSelected] = useState("");
  const handleMobileViewOpen = () => {
    setOpenMobile(true);
  };
  const handleMobileViewClose = () => {
    setOpenMobile(false);
  };
  let toggleref = useRef();
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if ((toggleref.current ?? document).contains(e.target as Node)) {
        setOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.mobile}>
        {openMobile ? (
          <AiOutlineClose onClick={handleMobileViewClose} />
        ) : (
          <div onClick={handleMobileViewOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )
        }
        <div
          className={
            openMobile
              ? styles.navbarMobileOpenActive
              : styles.navbarMobileOpen
          }
          onClick={handleMobileViewClose}
          ref={toggleref}
        >
          <nav>
            <a
              href="#"
              onClick={() => {
                setSelected("");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                setSelected("about");
              }}
            >
              About
            </a>
            <a href="#projects" onClick={() => setSelected("projects")}>Projects</a>
            <a
              href="#contact"
              onClick={() => setSelected("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div >
    </header >
  );
};

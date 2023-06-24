import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai"
import {RiMenuUnfoldLine} from "react-icons/ri"
export const Heading = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [selected, setSelected] = useState("");
  const handleMobileViewOpen = () => {
    setOpenMobile(true);
  };
  const handleMobileViewClose = () => {
    setOpenMobile(false);
  };
  const toggleref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleref.current && !toggleref.current.contains(event.target as Node)) {
        setOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleref]);

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.mobile}>
        {openMobile ? (
          <AiOutlineClose onClick={handleMobileViewClose} />
        ) : (
            <RiMenuUnfoldLine onClick={handleMobileViewOpen}/>
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

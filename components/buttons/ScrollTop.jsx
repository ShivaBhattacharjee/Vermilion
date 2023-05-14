import styles from "./ScrollTop.module.scss";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let hidden = 800;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className={styles["scroll-wrapper"]}>
      {isVisible && (
        <button onClick={goToBtn} className={styles.scroll}>
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
};

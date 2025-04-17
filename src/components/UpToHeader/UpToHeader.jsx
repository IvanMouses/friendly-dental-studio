import styles from "./UpToHeader.module.css";
import { useState, useEffect } from "react";

export default function UpToHeader() {
  const [upToHeader, setUpToHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      document.documentElement.scrollTop >= 500
        ? setUpToHeader(true)
        : setUpToHeader(false);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        document.documentElement.scrollTop >= 500
          ? setUpToHeader(true)
          : setUpToHeader(false);
      });
    };
  }, [upToHeader]);

  return (
    <img
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className={
        upToHeader
          ? `${styles["up-to-header-icon"]} ${styles["active"]}`
          : `${styles["up-to-header-icon"]}`
      }
      src="/friendly-dental-studio/img/UpToHeader/arrow_up.svg"
      alt=""
    />
  );
}

import { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children, active, setActive }) {
  useEffect(() => {
    if (active) {
      document.documentElement.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          setActive(false);
        }
      });
    }
  }, [active]);

  return (
    <div
      onClick={() => {
        active ? setActive(false) : null;
      }}
      className={
        active
          ? `${styles["modal-container"]} ${styles["active"]}`
          : `${styles["modal-container"]}`
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal-body"]}
      >
        {children}
      </div>
    </div>
  );
}

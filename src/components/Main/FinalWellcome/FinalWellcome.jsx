import ArrowButton from "../../Buttons/ArrowButton";
import styles from "./FinalWellcome.module.css";
import { useOutletContext } from "react-router";

export default function FinalWellcome({ title, text, extraClass }) {
  const [active, setActive] = useOutletContext();

  return (
    <div
      className={
        extraClass
          ? `${styles["final-wellcome-container"]} ${
              styles[`${extraClass}`]
            }`
          : `${styles["final-wellcome-container"]}`
      }
    >
      <div className={styles["final-wellcome-body"]}>
        <h2 className={styles["final-wellcome-title"]}>{title}</h2>
        <p className={styles["final-wellcome-text"]}>{text}</p>
        <ArrowButton
          onClick={() => setActive(true)}
          color="white"
          icon="arrow_white"
        >
          Записаться на прием
        </ArrowButton>
      </div>
    </div>
  );
}

import styles from "./Slider.module.css";

export default function Slide({ text, bgColor, textColor, imgSrc }) {
  return (
    <div
      style={{ background: bgColor }}
      className={styles["slider-slide"]}
    >
      <div className={styles["slider-left"]}>
        <h2 className={styles["slider-slide-title"]}>{text}</h2>
        <p
          style={{ color: textColor }}
          className={styles["slider-slide-text"]}
        >
          нам это близко
        </p>
      </div>
      <div className={styles["slider-right"]}>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}

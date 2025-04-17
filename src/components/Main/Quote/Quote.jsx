import styles from "./Quote.module.css";

export default function Quote({
  bgColor,
  icon,
  textColor,
  quoteLabelColor,
  text,
}) {
  return (
    <div className={`${styles["quote-container"]} ${styles[`${bgColor}`]}`}>
      <div className={styles["quote-body"]}>
        <img
          src={`/friendly-dental-studio/img/Main/HeroQuote/${icon}.svg`}
          alt="quote icon"
        />
        <p className={`${styles["quote-text"]} ${styles[`${textColor}`]}`}>
          {text}
        </p>
        <span
          className={`${styles["quote-label"]} ${styles[`${quoteLabelColor}`]}`}
        >
          Амил Яшарович Мухдарлы, <br /> основатель и главный врач FDS
        </span>
      </div>
    </div>
  );
}

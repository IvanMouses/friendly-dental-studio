import styles from "./Kids.module.css";
import { useEffect } from "react";

export default function Kids() {
  useEffect(() => {
    const pinkBear = document.querySelector(`.${styles["kids-pinkbear"]}`);
    const yellowBear = document.querySelector(
      `.${styles["kids-yellowbear"]}`
    );
    const ball = document.querySelector(`.${styles["kids-ball"]}`);
    const target = document.querySelector(`.${styles["kids-body"]}`);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          entry.isIntersecting
            ? pinkBear.classList.add(`${styles["animated-pinkbear"]}`) +
              yellowBear.classList.add(`${styles["animated-yellowbear"]}`) +
              ball.classList.add(`${styles["animated-ball"]}`)
            : pinkBear.classList.remove(`${styles["animated-pinkbear"]}`) +
              yellowBear.classList.remove(`${styles["animated-yellowbear"]}`) +
              ball.classList.remove(`${styles["animated-ball"]}`);
        });
      },
      {
        root: document,
        rootMargin: "100px",
        threshold: 0.8,
      }
    );
    observer.observe(target);
  }, []);

  return (
    <div className={styles["kids-container"]}>
      <div className={styles["kids-body"]}>
        <h2 className={styles["kids-title"]}>
          Превращаем поход к стоматологу в увлекательную игру
        </h2>
        <p className={styles["kids-text"]}>
          Детские врачи нашей студии любят общаться с детьми и трансформируют
          лечение в приключение с героями любимых мультфильмов и приятными
          подарками. Осторожно: вашим детям может так понравиться, что они будут
          уговаривать вас вернуться.
        </p>
      </div>
      <img
        className={styles["kids-bg"]}
        src="/img/Main/HeroKids/kids.png"
        alt=""
      />
      <img
        className={styles["kids-pinkbear"]}
        src="/img/Main/HeroKids/pink_bear.svg"
        alt=""
      />
      <img
        className={styles["kids-yellowbear"]}
        src="/img/Main/HeroKids/yellow_bear.svg"
        alt=""
      />
      <img
        className={styles["kids-ball"]}
        src="/img/Main/HeroKids/ball.svg"
        alt=""
      />
    </div>
  );
}

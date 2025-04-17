import styles from "./Comfort.module.css";
import { useEffect } from "react";

export default function Comfort() {
  useEffect(() => {
    const target = document.querySelector(`.${styles["comfort-body"]}`);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            document
              .querySelectorAll(`.${styles["comfort-item"]}`)
              .forEach((element) => {
                setTimeout(() => {
                  element.style.opacity = 1;
                  element.style.transform = "scale(1)";
                }, count);
                count += 300;
              });
            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: "1px",
        threshold: 0.5,
      }
    );
    observer.observe(target);
  }, []);

  return (
    <div className={styles["comfort-container"]}>
      <div className={styles["comfort-body"]}>
        <h2 className={styles["comfort-title"]}>
          Продумываем комфорт до мелочей
        </h2>
        <div className={styles["comfort-items"]}>
          <div className={styles["comfort-item"]} data-item="1">
            <img
              src="/friendly-dental-studio/img/Main/HeroComfort/1.jpg"
              alt=""
            />
            <div className={styles["comfort-item-description"]}>
              Уютные интерьеры
            </div>
          </div>
          <div className={styles["comfort-item"]} data-item="2">
            <img
              src="/friendly-dental-studio/img/Main/HeroComfort/2.jpg"
              alt=""
            />
            <div className={styles["comfort-item-description"]}>
              Зона самообслуживания с напитками и полезными снеками
            </div>
          </div>
          <div className={styles["comfort-item"]} data-item="3">
            <img
              src="/friendly-dental-studio/img/Main/HeroComfort/3.jpg"
              alt=""
            />
            <div className={styles["comfort-item-description"]}>
              Экраны для просмотра кино во время лечения
            </div>
          </div>
          <div className={styles["comfort-item"]} data-item="4">
            <img
              src="/friendly-dental-studio/img/Main/HeroComfort/4.jpg"
              alt=""
            />
            <div className={styles["comfort-item-description"]}>
              Удобная парковка
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

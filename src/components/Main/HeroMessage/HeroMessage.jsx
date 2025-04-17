import { useEffect } from "react";
import styles from "./HeroMessage.module.css";

export default function HeroMessage() {
  useEffect(() => {
    const target = document.querySelector(`.${styles["hero-message-title"]}`);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            document
              .querySelectorAll(`.${styles["hero-message-decor"]}`)
              .forEach((element) => {
                setTimeout(() => {
                  element.style.transform = "scale(1)";
                  element.style.opacity = 1;
                }, count);
                count += 300;
              });
            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: "-10px",
        threshold: 1,
      }
    );
    observer.observe(target);
  }, []);

  return (
    <>
      <div className={styles["hero-message-container"]}>
        <div className={styles["hero-message-title"]}>
          <h2>
            В кресле специалиста Friendly Dental Studio вы почувствуете...
          </h2>
          <img
            // style={{ top: "-200px", left: "-200px" }}
            className={styles["hero-message-decor"]}
            src="/friendly-dental-studio/img/Main/HeroMessage/1.svg"
            alt=""
          />
          <img
            // style={{ bottom: "70px", left: "-250px" }}
            className={styles["hero-message-decor"]}
            src="/friendly-dental-studio/img/Main/HeroMessage/3.svg"
            alt=""
          />
          <img
            // style={{ bottom: "-100px", left: "-250px" }}
            className={styles["hero-message-decor"]}
            src="/friendly-dental-studio/img/Main/HeroMessage/4.svg"
            alt=""
          />
          <img
            // style={{ bottom: "-100px", right: "-220px" }}
            className={styles["hero-message-decor"]}
            src="/friendly-dental-studio/img/Main/HeroMessage/5.svg"
            alt=""
          />
          <img
            // style={{ bottom: "0px", right: "-250px" }}
            className={styles["hero-message-decor"]}
            src="/friendly-dental-studio/img/Main/HeroMessage/6.svg"
            alt=""
          />
          <img
            // style={{ top: "-200px", right: "-250px" }}
            className={styles["hero-message-decor"]}
            src="/friendly-dental-studio/img/Main/HeroMessage/2.svg"
            alt=""
          />
        </div>
        <div className={styles["hero-message-text"]}>
          <p>
            Будем друзьями — мы Friendly Dental Studio — стоматологическая
            студия, в которой вам помогут решить проблемы с зубами любой
            сложности.
          </p>
          <p>
            Наши врачи выслушают и поддержат разговор. Не осудят, если вы
            затянули с лечением. Помогут освободиться от боли и снова
            почувствовать себя собой. Здесь вас считают другом.
          </p>
        </div>
      </div>
      <div className={styles["hero-message-img"]}></div>
    </>
  );
}

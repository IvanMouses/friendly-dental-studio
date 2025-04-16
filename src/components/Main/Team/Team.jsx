import styles from "./Team.module.css";
import { useEffect } from "react";
import DoctorsItems from "../../Doctors/DoctorsItems/DoctorsItems";

export default function Team() {
  useEffect(() => {
    const target = document.querySelector(`.${styles["team-columns"]}`);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(`.${styles["team-label"]}`)
              .forEach((element) => {
                element.style.opacity = 1;
                element.style.transform = "translate(0px, 0px)";
              });
            setTimeout(() => {
              document
                .querySelectorAll(`.${styles["team-text"]}`)
                .forEach((element) => {
                  element.style.opacity = 1;
                  element.style.transform = "translate(0px, 0px)";
                });
            }, 800);
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
    <div className={styles["team-container"]}>
      <div className={styles["team-body"]}>
        <h2 className={styles["team-title"]}>
          Заботимся о вашем здоровье, как о своём
        </h2>
        <div className={styles["team-columns"]}>
          <p className={styles["team-label"]}>
            Тщательно отбираем врачей в нашу команду
          </p>
          <p className={styles["team-text"]}>
            Собеседование проходят примерно 10% всех кандидатов. Мы обращаем
            внимание не только на профессионализм (образование, опыт работы,
            стремление к обучению), но и на желание помогать людям. На
            отзывчивость и умение слышать.
          </p>
        </div>
        <DoctorsItems />
      </div>
    </div>
  );
}

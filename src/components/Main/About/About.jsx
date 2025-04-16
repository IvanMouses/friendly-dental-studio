import { useEffect } from "react";
import styles from "./About.module.css";
import ArrowButton from "../../Buttons/ArrowButton";
import { useOutletContext } from "react-router";

export default function About({
  bgStyle,
  bodyPosition,
  iconStyle,
  titlePosition,
  textPosition,
  title,
  items,
}) {
  const [active, setActive] = useOutletContext();

  useEffect(() => {
    const target = document.querySelector(`.${styles[`${bodyPosition}`]}`);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(`.${styles[`${titlePosition}`]}`)
              .forEach((element) => {
                element.style.opacity = 1;
                element.style.transform = "translate(0px, 0px)";
              });
            setTimeout(() => {
              document
                .querySelectorAll(`.${styles[`${textPosition}`]}`)
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
    <div
      className={`${styles["about-container"]} ${styles[`${bgStyle}`]}`}
    >
      <div
        className={`${styles["about-body"]} ${styles[`${bodyPosition}`]}`}
      >
        <h2 className={styles["about-title"]}>{title}</h2>
        <ul className={styles["about-list"]}>
          {items.map((item, index) => (
            <li key={index} className={styles["about-item"]}>
              <img
                src={`img/Main/HeroAbout/${iconStyle}.svg`}
                alt="circle icon"
              />
              <h3
                className={`${styles["about-item-title"]} ${
                  styles[`${titlePosition}`]
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`${styles["about-item-text"]} ${
                  styles[`${textPosition}`]
                }`}
              >
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <ArrowButton
          onClick={() => setActive(true)}
          color="white"
          icon="arrow_white"
        >
          Составить план лечения
        </ArrowButton>
      </div>
    </div>
  );
}

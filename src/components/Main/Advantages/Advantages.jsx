import styles from "./Advantages.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import { useRef, useCallback } from "react";

export default function Advantages() {
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  useEffect(() => {
    const target = document.querySelector(`.${styles["advantages-columns"]}`);
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(`.${styles["advantages-title"]}`)
              .forEach((element) => {
                element.style.opacity = 1;
                element.style.transform = "translate(0px, 0px)";
              });
            setTimeout(() => {
              document
                .querySelectorAll(`.${styles["advantages-text"]}`)
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
    <>
      <div className={styles["advantages-container"]}>
        <div className={styles["advantages-body"]}>
          <div className={styles["advantages-columns"]}>
            <div className={styles["advantages-row"]}>
              <img
                src="/friendly-dental-studio/img/Main/HeroAdvantages/sticker_healthy_smile.svg"
                alt="sticker"
              />
              <p className={styles["advantages-title"]}>
                Проводим полную диагностику
              </p>
              <div className={styles["advantages-text"]}>
                <p>
                  Она помогает не только подобрать индивидуальное лечение, но и
                  выявить проблемы, о которых вы не знали. Мы сможем устранить
                  их на начальной стадии, что избавит вас от дополнительного
                  лечения в будущем.
                </p>
              </div>
            </div>
            <div className={styles["advantages-row"]}>
              <img
                src="/friendly-dental-studio/img/Main/HeroAdvantages/sticker_safe_comfort.svg"
                alt="sticker"
              />
              <p className={styles["advantages-title"]}>
                Выбираем современное оборудование и лучшие на рынке материалы
              </p>
              <div className={styles["advantages-text"]}>
                <p>
                  Только так мы можем гарантировать точные диагнозы и комфорт, а
                  главное – добиться надёжного результата, который не придётся
                  переделывать.
                </p>
                <button
                  onClick={() => {
                    lightGallery.current.openGallery(0);
                  }}
                  className={styles["advantages-button"]}
                >
                  Посмотреть оборудование
                </button>
              </div>
            </div>
            <div className={styles["advantages-row"]}>
              <img
                src="/friendly-dental-studio/img/Main/HeroAdvantages/sticker_care.svg"
                alt="sticker"
              />
              <img
                src="/friendly-dental-studio/img/Main/HeroAdvantages/sticker_quality.svg"
                alt="sticker"
              />
              <p className={styles["advantages-title"]}>Гарантия качества</p>
              <div className={styles["advantages-text"]}>
                <p>
                  Если что-то пойдет не так — бесплатно переделаем в течение
                  полугода.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {createPortal(
        <>
          <LightGallery
            download={false}
            onInit={onInit}
            elementClassNames={"gallery"}
            dynamic={true}
            dynamicEl={[
              {
                subHtml: `.${styles["caption"]}`,
                src: "/friendly-dental-studio/img/Main/HeroAdvantages/1.jpg",
              },
              {
                src: "/friendly-dental-studio/img/Main/HeroAdvantages/2.jpg",
                subHtml: `.${styles["caption"]}`,
              },
            ]}
          ></LightGallery>
          <div className={styles["caption"]} style={{ display: "none" }}>
            <h4 className={styles["caption-title"]}>
              Стоматологический микроскоп Leica
            </h4>
            <p className={styles["caption-text"]}>
              Позволяет поставить верный диагноз и обеспечить долговечность
              лечения. С помощью микроскопа удаётся работать только с
              пораженными тканями, не затрагивая здоровые.
            </p>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

import styles from "./Contacts.module.css";

export default function Contacts({}) {
  return (
    <div className={styles["contacts-items"]}>
      <div className={styles["contacts-item"]}>
        <span className={styles["contacts-label"]}>Адрес:</span>
        <p className={styles["contacts-text"]}>
          м. Московские ворота, ул. Малая Митрофаньевская, д.5, к.1
        </p>
        <a
          target="_blank"
          href="https://yandex.ru/maps/?um=constructor%3A0d3e6decf13bbc4dfc92bb61c3800db64468647e22676edf7d3161a8d0e70181&source=constructorLink"
        >
          Как добраться
        </a>
      </div>
      <div className={styles["contacts-item"]}>
        <span className={styles["contacts-label"]}>Парковка:</span>
        <p className={styles["contacts-text"]}>
          Измайловский Бульвар. Большая вероятность свободного парковочного
          места.
        </p>
      </div>
      <div className={styles["contacts-item"]}>
        <span className={styles["contacts-label"]}>Время работы:</span>
        <p className={styles["contacts-text"]}>С 9:00 до 21:00</p>
      </div>
      <div className={styles["contacts-item"]}>
        <span className={styles["contacts-label"]}>Телефон:</span>
        <p className={styles["contacts-text"]}>
          <a href="tel:+7(911)100-82-22">+7 (911) 100-82-22</a>
        </p>
      </div>
    </div>
  );
}

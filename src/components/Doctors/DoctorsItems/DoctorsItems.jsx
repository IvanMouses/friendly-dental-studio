import styles from "./DoctorsItems.module.css";

export default function DoctorsItems() {
  return (
    <div className={styles["doctors-items"]}>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/1.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Александр Багдасаров</p>
        <span className={styles["doctors-job"]}>
          Стоматолог хирург-имплантолог, пародонтолог, челюстно-лицевой хирург
        </span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/2.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Дарья Терлецкая</p>
        <span className={styles["doctors-job"]}>
          Стоматолог хирург-имплантолог
        </span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/3.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Станислав Гринкевич</p>
        <span className={styles["doctors-job"]}>Стоматолог-ортопед</span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/4.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Елизавета Терзи</p>
        <span className={styles["doctors-job"]}>Стоматолог, пародонтолог</span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/5.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Александр Балоев</p>
        <span className={styles["doctors-job"]}>
          Стоматолог- терапевт, эндодонтист
        </span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/6.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Нина Филипова</p>
        <span className={styles["doctors-job"]}>Стоматолог детский</span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/8.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Коновалюк Екатерина</p>
        <span className={styles["doctors-job"]}>Стоматолог-терапевт</span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/7.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Амил Мухдарлы</p>
        <span className={styles["doctors-job"]}>
          Главный врач, cтоматолог-терапевт, ортопед
        </span>
      </div>
      <div className={styles["doctors-item"]}>
        <img src="/img/Doctors/9.png" alt="doctor image" />
        <p className={styles["doctors-name"]}>Штина Дарья</p>
        <span className={styles["doctors-job"]}>
          Стоматолог ортодонт, гнатолог
        </span>
      </div>
    </div>
  );
}

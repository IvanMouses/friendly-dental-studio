import ArrowButton from "../../Buttons/ArrowButton";
import styles from "./Services.module.css";
import { Link } from "react-router";

export default function Services() {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["services-body"]}>
        <h2 className={styles["services-title"]}>
          Любые стоматологические услуги рядом с домом
        </h2>
        <div className={styles["services-cards"]}>
          <Link
            to="/services-and-price/#therapy"
            className={styles["services-card"]}
            style={{
              background: "#7ab883",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
          >
            <p className={styles["services-card-text"]}>Лечение</p>
          </Link>
          <div
            className={styles["services-card"]}
            style={{
              background: "#F6DC43",
              borderRadius: "64% 36% 37% 63% / 61% 64% 36% 39% ",
            }}
          >
            <p className={styles["services-card-text"]}>
              Исправление прикуса
            </p>
          </div>
          <Link
            to="/services-and-price/#surgery"
            className={styles["services-card"]}
            style={{
              background: "#738fe5",
              borderRadius: "26% 74% 15% 85% / 38% 25% 75% 62%",
            }}
          >
            <p className={styles["services-card-text"]}>Импланты</p>
          </Link>
          <Link
            to="/services-and-price/#orthopedics"
            className={styles["services-card"]}
            style={{
              background: "#f98c8c",
              borderRadius: "57% 43% 78% 22% / 38% 72% 28% 62%",
            }}
          >
            <p className={styles["services-card-text"]}>Виниры</p>
          </Link>
          <div
            className={styles["services-card"]}
            style={{
              background: "#f98c8c",
              borderRadius: "90% 10% 94% 6% / 24% 92% 8% 76%",
            }}
          >
            <p className={styles["services-card-text"]}>Протезы</p>
          </div>
          <Link
            to="/services-and-price/#hygiene"
            className={styles["services-card"]}
            style={{
              background: "#738fe5",
              borderRadius: "50% 50% 86% 14% / 49% 60% 40% 51%",
            }}
          >
            <p className={styles["services-card-text"]}>Отбеливание</p>
          </Link>
          <Link
            to="/services-and-price/#hygiene"
            className={styles["services-card"]}
            style={{
              background: "#F6DC43",
              borderRadius: "29% 71% 34% 66% / 49% 60% 40% 51%",
            }}
          >
            <p className={styles["services-card-text"]}>Гигиена</p>
          </Link>
          <Link
            to="/services-and-price/#kids"
            className={styles["services-card"]}
            style={{
              background: "#7ab883",
              borderRadius: "12% 88% 5% 95% / 84% 24% 76% 16%",
            }}
          >
            <p className={styles["services-card-text"]}>Детям</p>
          </Link>
        </div>
        <Link to="/services-and-price">
          <ArrowButton color="black" icon="arrow_black">
            Все услуги
          </ArrowButton>
        </Link>
      </div>
    </div>
  );
}

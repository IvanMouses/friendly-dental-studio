import styles from "./ServicesAndPriceHeader.module.css";

export default function ServicesAndPriceHeader() {
  return (
    <div className={styles["services-and-price-header-container"]}>
      <div className={styles["services-and-price-header-body"]}>
        <h2 className={styles["services-and-price-header-title"]}>
          Услуги и цены
        </h2>
        <ul className={styles["services-and-price-header-menu"]}>
          <li className={styles["services-and-price-header-menu-item"]}>
            <a href="#images"> Снимки</a>
          </li>
          <li className={styles["services-and-price-header-menu-item"]}>
            <a href="#hygiene"> Гигиена и отбеливание</a>
          </li>
          <li className={styles["services-and-price-header-menu-item"]}>
            <a href="#surgery">Хирургия</a>
          </li>
          <li className={styles["services-and-price-header-menu-item"]}>
            <a href="#orthopedics">Ортопедия</a>
          </li>
          <li className={styles["services-and-price-header-menu-item"]}>
            <a href="#therapy">Лечение</a>
          </li>
          <li className={styles["services-and-price-header-menu-item"]}>
            <a href="#kids">Детская стомотология</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

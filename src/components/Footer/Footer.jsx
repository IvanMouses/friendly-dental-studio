import styles from "./Footer.module.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-body"]}>
        <div className={styles["footer-logo"]}>
          <Link to="/friendly-dental-studio">
            <img
              src="/friendly-dental-studio/img/Header/logo_circle.svg"
              alt="Логотип"
            />
          </Link>
        </div>
        <div className={styles["footer-contacts"]}>
          <div className={styles["footer-contacts-email"]}>
            <p className={styles["footer-contacts-label"]}>Email</p>
            <a href="mailto:hello@friendlydental.ru">hello@friendlydental.ru</a>
          </div>
          <div className={styles["footer-contacts-phone"]}>
            <p className={styles["footer-contacts-label"]}>Телефон</p>
            <a href="tel:+7(911)100-82-22">+7 (911) 100-82-22</a>
          </div>
          <div className={styles["footer-contacts-socialmedia"]}>
            <p className={styles["footer-contacts-label"]}>Социальные сети</p>
            <div className={styles["footer-contacts-socialmedia-icons"]}>
              <a
                href="https://api.whatsapp.com/send?phone=79111008222"
                target="_blank"
              >
                <img
                  src="/friendly-dental-studio/img/Footer/whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
              <a target="_blank" href="https://vk.com/public211334353">
                <img src="/friendly-dental-studio/img/Footer/vk.svg" alt="vk" />
              </a>
              <a href="https://telegram.me/sfriendly_dental" target="_blank">
                <img
                  src="/friendly-dental-studio/img/Footer/telegram.png"
                  alt="telegram"
                />
              </a>
            </div>
          </div>
        </div>
        <ul className={styles["footer-menu-list"]}>
          <li className={styles["footer-menu-item"]}>
            <Link to="friendly-dental-studio/services-and-price">
              Услуги и цены
            </Link>
          </li>
          <li className={styles["footer-menu-item"]}>
            <Link to="friendly-dental-studio/doctors">Врачи</Link>
          </li>
          <li className={styles["footer-menu-item"]}>
            <Link to="friendly-dental-studio/discounts">Акции</Link>
          </li>
          <li className={styles["footer-menu-item"]}>
            <Link to="friendly-dental-studio/journal">Журнал</Link>
          </li>
          <li className={styles["footer-menu-item"]}>
            <Link to="friendly-dental-studio/contacts">Контакты</Link>
          </li>
        </ul>
        <div className={styles["footer-privacy"]}>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
}

import styles from "./DiscountsPage.module.css";
import FinalWellcome from "../../components/Main/FinalWellcome/FinalWellcome";
import ContactsMain from "../../components/Main/ContactsMain/ContactsMain";

export default function DiscountsPage() {
  return (
    <>
      <div className={styles["discounts-container"]}>
        <div className={styles["discounts-body"]}>
          <h2 className={styles["discounts-title"]}>Наши акции</h2>
          <p className={styles["discounts-text"]}>
            Совсем скоро здесь появятся новые акции. Вы всегда можете уточнить
            актуальные акции, позвонив нам по номеру{" "}
            <a href="tel:+7 (911) 100-82-22">+7 (911) 100-82-22</a>
          </p>
        </div>
      </div>
      <FinalWellcome
        title="Готовы изменить своё мнение о стоматологии?"
        text=" Запишитесь на консультацию и почувствуйте разницу"
      />
      <ContactsMain />
    </>
  );
}

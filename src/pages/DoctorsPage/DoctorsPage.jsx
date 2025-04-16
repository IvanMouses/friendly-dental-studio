import styles from "./DoctorsPage.module.css";
import DoctorsItems from "../../components/Doctors/DoctorsItems/DoctorsItems";
import FinalWellcome from "../../components/Main/FinalWellcome/FinalWellcome";
import ContactsMain from "../../components/Main/ContactsMain/ContactsMain";

export default function DoctorsPage() {
  return (
    <>
      <div className={styles["doctors-container"]}>
        <div className={styles["doctors-body"]}>
          <h2 className={styles["doctors-title"]}>
            Врачи, которые ждут вас в гости
          </h2>
          <DoctorsItems />
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

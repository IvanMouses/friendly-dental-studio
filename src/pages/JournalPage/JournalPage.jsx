import styles from "./JournalPage.module.css";
import FinalWellcome from "../../components/Main/FinalWellcome/FinalWellcome";
import ContactsMain from "../../components/Main/ContactsMain/ContactsMain";

export default function JournalPage() {
  return (
    <>
      <div className={styles["journal-container"]}>
        <div className={styles["journal-body"]}></div>
      </div>
      <FinalWellcome
        extraClass="journal"
        title="Страница в разработке..."
        text="Запишитесь на приём-консультацию и приходите спокойно"
      />
      <ContactsMain />
    </>
  );
}

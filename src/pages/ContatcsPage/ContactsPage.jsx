import styles from "./ContactsPage.module.css";
import Contacts from "../../components/Contacts/Contacts";

export default function ContactsPage() {
  return (
    <div className={styles["contacts-container"]}>
      <div className={styles["contacts-body"]}>
        <h2 className={styles["contacts-title"]}>Friendly Dental Studio</h2>
        <span className={styles["contacts-subtitle"]}>
          м. Московские Ворота
        </span>
        <Contacts />
      </div>
    </div>
  );
}

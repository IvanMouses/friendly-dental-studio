import styles from "./ContactsMain.module.css";
import Contacts from "../../Contacts/Contacts";

export default function ContactsMain() {
  return (
    <div className={styles["contacts-main-container"]}>
      <div className={styles["contacts-main-body"]}>
        <h2 className={styles["contacts-main-title"]}>Мы подружимся</h2>
        <Contacts />
      </div>
    </div>
  );
}

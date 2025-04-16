import { useState } from "react";
import CallBackForm from "../../Forms/CallBackForm";
import styles from "./CallBack.module.css";

export default function CallBack() {
  const [showPopup, setShowPopup] = useState(false);
  function handlePopup() {
    setShowPopup(!showPopup);
  }
  return (
    <>
      <button
        onClick={() => handlePopup()}
        className={
          showPopup
            ? `${styles["call-back-popup-button"]} ${styles["close"]}`
            : `${styles["call-back-popup-button"]}`
        }
      >
        <img
          src={`/img/Popups/${showPopup ? `close` : `phone-call`}.svg`}
          alt=""
        />
      </button>
      <dialog
        open
        className={
          showPopup
            ? `${styles["call-back-popup"]} ${styles["shown"]}`
            : `${styles["call-back-popup"]}`
        }
      >
        <div className={styles["call-back-popup-body"]}>
          <CallBackForm />
        </div>
      </dialog>
    </>
  );
}

import styles from "./SignForm.module.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

export default function SignForm({ active, setActive }) {
  const [inputName, setInputName] = useState("");
  const [inputTel, setInputTel] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  function handleName(e) {
    setInputName(e.target.value);
  }
  function handleTel() {
    setInputTel(inputTel);
  }
  function formValidation(inputName, inputTel) {
    const form = document.querySelector(`.${styles["form"]}`);
    const data = new FormData(form);
    if (data.get("name") && data.get("tel")) {
      setIsFormValid(true);
      console.log("Форма отправлена");
    }
  }

  return (
    <div
      className={
        active
          ? `${styles["form-body"]} ${styles["active"]}`
          : `${styles["form-body"]}`
      }
    >
      <h2 className={styles["form-title"]}>Запись на прием к врачу</h2>
      <form
        className={styles["form"]}
        onSubmit={(e) => {
          e.preventDefault();
          formValidation(inputName, inputTel);
        }}
        name="form"
        id="form"
        action=""
        method="POST"
      >
        <div className={styles["form-input-item"]}>
          <input
            className={styles["form-input"]}
            value={inputName}
            type="text"
            name="name"
            id="name"
            autoComplete="false"
            required
            onChange={handleName}
          />
          <label htmlFor="name" className={styles["form-label"]}>
            Имя Фамилия
          </label>
        </div>
        <div className={styles["form-input-item"]}>
          <PhoneInput
            className={styles["form-input"]}
            defaultCountry="RU"
            name="tel"
            id="tel"
            required
            autoComplete="false"
            value={inputTel}
            onChange={handleTel}
          />
          <label htmlFor="tel" className={styles["form-label"]}>
            Телефон
          </label>
        </div>
        <button className={styles["form-submit-button"]} type="submit">
          Записаться
        </button>
      </form>
      <p className={styles["form-description"]}>
        После заполнения формы с вами свяжется специалист и назначит прием на
        удобное время.
      </p>
      <button
        onClick={() => {
          active ? setActive(false) : null;
        }}
        className={styles["form-close-button"]}
      >
        X
      </button>
    </div>
  );
}

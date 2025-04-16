import styles from "./CallBackForm.module.css";
import PhoneInput from "react-phone-number-input/input";
import { useState } from "react";

export default function CallBackForm() {
  const [inputPhone, setInputPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  function handlePhone() {
    setInputPhone(inputPhone);
  }
  function formValidation(inputPhone) {
    const form = document.getElementById("call-back-form");
    const data = new FormData(form);
    if (data.get("phone")) {
      setIsFormValid(true);
      console.log("Форма отправлена");
    }
  }

  return (
    <>
      <h2 className={styles["call-back-form-title"]}>
        Оставьте свой номер телефона, и мы с вами свяжемся!
      </h2>
      <form
        className={styles["call-back-form"]}
        onSubmit={(e) => {
          e.preventDefault();
          formValidation(inputPhone);
        }}
        action=""
        id="call-back-form"
        name="call-back-form"
        method="POST"
      >
        <div className={styles["call-back-form-input-item"]}>
          <PhoneInput
            className={styles["call-back-form-input"]}
            defaultCountry="RU"
            name="phone"
            id="phone"
            required
            autoComplete="false"
            value={inputPhone}
            onChange={handlePhone}
            placeholder="8 (000) 000-00-00"
          />
          <button
            className={styles["call-back-form-submit-button"]}
            type="submit"
          >
            Связаться с нами
          </button>
          <p className={styles["call-back-form-text"]}>
            Или вы можете позвонить нам: <br />
            <a href="tel:+79111008222">+7 (911) 100-82-22</a>
          </p>
          <p className={styles["call-back-form-label"]}>
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c политикой конфиденциальности.
          </p>
        </div>
      </form>
    </>
  );
}

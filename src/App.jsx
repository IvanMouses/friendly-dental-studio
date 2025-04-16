import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UpToHeader from "./components/UpToHeader/UpToHeader";
import { Outlet, ScrollRestoration } from "react-router";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import SignForm from "./components/Forms/SignForm";
import CallBack from "./components/Popups/CallBack/CallBack";

function App() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("scroll-disabled");
    } else {
      document.body.classList.remove("scroll-disabled");
    }
  }, [active]);

  return (
    <>
      <ScrollRestoration />
      <UpToHeader />
      <Header active={active} setActive={setActive} />
      <div className={styles["wrapper"]}>
        <Outlet context={[active, setActive]} />
      </div>
      <Footer />
      {createPortal(
        <Modal active={active} setActive={setActive}>
          <SignForm active={active} setActive={setActive} />
        </Modal>,
        document.body
      )}
      {createPortal(<CallBack />, document.body)}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router";

export default function Header({ active, setActive }) {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenuActive() {
    setShowMenu(!showMenu);
  }

  function fadingBody(e) {
    if (showMenu) {
      if (
        e.target.classList.contains("scroll-disabled-faded") ||
        e.target.classList.contains(`${styles["header-container"]}`)
      ) {
        handleMenuActive();
      }
    }
  }

  useEffect(() => {
    document.documentElement.addEventListener("click", fadingBody);
    if (showMenu) {
      document.body.classList.add("scroll-disabled-faded");
    } else if (!showMenu) {
      document.body.classList.remove("scroll-disabled-faded");
    }
    return () =>
      document.documentElement.removeEventListener("click", fadingBody);
  }, [showMenu]);

  useEffect(() => {
    if (active) {
      document
        .querySelector(`.${styles["header-container"]}`)
        .classList.add(`${styles["scroll-disabled"]}`);
    } else {
      document
        .querySelector(`.${styles["header-container"]}`)
        .classList.remove(`${styles["scroll-disabled"]}`);
    }
  }, [active]);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let header = document.querySelector(`.${styles["header-container"]}`);
    let headerBottom = header.offsetTop + header.offsetHeight;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
        header.style.top = "0";
      } else {
        header.style.top = "-121px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <div className={styles["header-container"]}>
        <div
          className={
            showMenu
              ? `${styles["header-menu-body"]} ${styles["active"]}`
              : `${styles["header-menu-body"]}`
          }
        >
          <div className={styles["header-logo"]}>
            <Link
              onClick={() => showMenu && setShowMenu()}
              to="/friendly-dental-studio"
            >
              <img
                src={`/friendly-dental-studio/img/Header/${
                  showMenu ? "logo_circle-white" : "logo_circle"
                }.svg`}
                alt="Логотип"
              />
            </Link>
          </div>
          <ul className={styles["header-menu-list"]}>
            <li className={styles["header-menu-item"]}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? showMenu
                        ? "#fff"
                        : "#7ab883"
                      : "#1a1a1d",
                  };
                }}
                onClick={() => showMenu && setShowMenu()}
                to="/friendly-dental-studio/services-and-price"
              >
                Услуги и цены
              </NavLink>
            </li>
            <li className={styles["header-menu-item"]}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? showMenu
                        ? "#fff"
                        : "#7ab883"
                      : "#1a1a1d",
                  };
                }}
                onClick={() => showMenu && setShowMenu()}
                to="/friendly-dental-studio/doctors"
              >
                Врачи
              </NavLink>
            </li>
            <li className={styles["header-menu-item"]}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? showMenu
                        ? "#fff"
                        : "#7ab883"
                      : "#1a1a1d",
                  };
                }}
                onClick={() => showMenu && setShowMenu()}
                to="/friendly-dental-studio/discounts"
              >
                Акции
              </NavLink>
            </li>
            <li className={styles["header-menu-item"]}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? showMenu
                        ? "#fff"
                        : "#7ab883"
                      : "#1a1a1d",
                  };
                }}
                onClick={() => showMenu && setShowMenu()}
                to="/friendly-dental-studio/journal"
              >
                Журнал
              </NavLink>
            </li>
            <li className={styles["header-menu-item"]}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? showMenu
                        ? "#fff"
                        : "#7ab883"
                      : "#1a1a1d",
                  };
                }}
                onClick={() => showMenu && setShowMenu()}
                to="/friendly-dental-studio/contacts"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-buttons"]}>
            <button
              onClick={() => setActive(true)}
              className={styles["header-button"]}
            >
              Записаться на приём
            </button>
          </div>
        </div>

        <div
          onClick={() => handleMenuActive()}
          className={
            showMenu
              ? `${styles["header-menu-burger"]} ${styles["activeBurger"]}`
              : `${styles["header-menu-burger"]}`
          }
        >
          <span></span>
        </div>
      </div>
    </>
  );
}

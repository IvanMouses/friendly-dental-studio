import styles from "./ArrowButton.module.css";

export default function ArrowButton({ children, color, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles["arrow-button"]} ${styles[`${color}`]}`}
    >
      {children}
      <img
        src={`/friendly-dental-studio/img/Buttons/${icon}.svg`}
        alt="arrow icon"
      />
    </button>
  );
}

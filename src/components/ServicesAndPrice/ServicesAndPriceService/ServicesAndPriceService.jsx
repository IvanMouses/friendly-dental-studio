import styles from "./ServicesAndPriceService.module.css";

export default function ServicesAndPriceService({ title, services, id }) {
  return (
    <div className={styles["services-and-price-service-container"]}>
      <div className={styles["services-and-price-service-body"]}>
        <h2 id={id} className={styles["services-and-price-service-title"]}>
          {title}
        </h2>
        <div className={styles["services-and-price-service-items"]}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles["services-and-price-service-item"]}
            >
              <p className={styles["services-and-price-service-item-name"]}>
                {service.name}
              </p>
              <p className={styles["services-and-price-service-item-price"]}>
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

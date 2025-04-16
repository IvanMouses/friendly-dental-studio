import styles from "./ServicesAndPricePage.module.css";
import ServicesAndPriceHeader from "../../components/ServicesAndPrice/ServicesAndPriceHeader/ServicesAndPriceHeader";
import ServicesAndPriceService from "../../components/ServicesAndPrice/ServicesAndPriceService/ServicesAndPriceService";
import FinalWellcome from "../../components/Main/FinalWellcome/FinalWellcome";
import ContactsMain from "../../components/Main/ContactsMain/ContactsMain";

import { data } from "../../components/ServicesAndPrice/ServicesAndPriceService/data";

export default function ServicesAndPrices() {
  return (
    <div className={styles["services-and-price-container"]}>
      <ServicesAndPriceHeader />
      <ServicesAndPriceService
        title={data.images.title}
        id={data.images.id}
        services={data.images.services}
      />
      <ServicesAndPriceService
        title={data.hygiene.title}
        id={data.hygiene.id}
        services={data.hygiene.services}
      />
      <ServicesAndPriceService
        title={data.surgery.title}
        id={data.surgery.id}
        services={data.surgery.services}
      />
      <ServicesAndPriceService
        title={data.orthopedics.title}
        id={data.orthopedics.id}
        services={data.orthopedics.services}
      />
      <ServicesAndPriceService
        title={data.therapy.title}
        id={data.therapy.id}
        services={data.therapy.services}
      />
      <ServicesAndPriceService
        title={data.kids.title}
        id={data.kids.id}
        services={data.kids.services}
      />
      <FinalWellcome
        title="Готовы изменить своё мнение о стоматологии?"
        text=" Запишитесь на консультацию и почувствуйте разницу"
      />
      <ContactsMain />
    </div>
  );
}

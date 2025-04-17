import styles from "./Slider.module.css";
import "./swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import Slide from "./Slide";
import { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    if (document.documentElement.clientWidth <= 768) {
      document
        .querySelectorAll(".swiper-button-next")
        .forEach((button) => (button.style.display = "none"));
      document
        .querySelectorAll(".swiper-button-prev")
        .forEach((button) => (button.style.display = "none"));
    }
    window.addEventListener("resize", function () {
      if (document.querySelector(".swiper-button-next")) {
        if (document.documentElement.clientWidth <= 768) {
          document
            .querySelectorAll(".swiper-button-next")
            .forEach((button) => (button.style.display = "none"));
          document
            .querySelectorAll(".swiper-button-prev")
            .forEach((button) => (button.style.display = "none"));
        } else {
          document
            .querySelectorAll(".swiper-button-next")
            .forEach((button) => (button.style.display = "flex"));
          document
            .querySelectorAll(".swiper-button-prev")
            .forEach((button) => (button.style.display = "flex"));
        }
      }
    });
  }, []);

  return (
    <div className={styles["slider-container"]}>
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <Slide
            text={"Жить счастливо, не отвлекаясь на проблемы с зубами"}
            bgColor={"#7AB883"}
            textColor={"#578FCA"}
            imgSrc={"/friendly-dental-studio/img/Main/HeroSlider/1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            text={"Пить кофе каждый день и сохранить белизну эмали"}
            bgColor={"#738fe5"}
            textColor={"#f98c8c"}
            imgSrc={"/friendly-dental-studio/img/Main/HeroSlider/2.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            text={"Любить сладкое, но хотеть здоровые зубы"}
            bgColor={"#f98c8c"}
            textColor={"#578FCA"}
            imgSrc={"/friendly-dental-studio/img/Main/HeroSlider/3.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            text={"Прийти к специалисту, который будет вам искренне рад"}
            bgColor={"#7AB883"}
            textColor={"#578FCA"}
            imgSrc={"/friendly-dental-studio/img/Main/HeroSlider/4.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            text={"Найти ребёнку врача, который станет ему другом"}
            bgColor={"#f98c8c"}
            textColor={"#578FCA"}
            imgSrc={"/friendly-dental-studio/img/Main/HeroSlider/5.png"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

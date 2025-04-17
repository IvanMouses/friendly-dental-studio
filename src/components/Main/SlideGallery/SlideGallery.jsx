import styles from "./SlideGallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import { useEffect } from "react";

export default function SlideGallery() {
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (document.querySelector(".swiper-button-next")) {
        if (document.documentElement.clientWidth <= 768) {
          document.querySelector(".swiper-button-next").style.display = "none";
          document.querySelector(".swiper-button-prev").style.display = "none";
        } else {
          document.querySelector(".swiper-button-next").style.display = "flex";
          document.querySelector(".swiper-button-prev").style.display = "flex";
        }
      }
    });
  }, []);

  return (
    <div className={styles["slide-gallery-container"]}>
      <div className={styles["slide-gallery-body"]}>
        <Swiper
          modules={[Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <div className={styles["slide-gallery-img"]}>
              <img
                className={styles["slide-gallery-picture"]}
                src="/friendly-dental-studio/img/Main/HeroSlideGallery/1.jpg"
                alt="Фото из студии"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["slide-gallery-img"]}>
              <img
                className={styles["slide-gallery-picture"]}
                src="/friendly-dental-studio/img/Main/HeroSlideGallery/2.jpg"
                alt="Фото из студии"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["slide-gallery-img"]}>
              <img
                className={styles["slide-gallery-picture"]}
                src="/friendly-dental-studio/img/Main/HeroSlideGallery/3.jpg"
                alt="Фото из студии"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

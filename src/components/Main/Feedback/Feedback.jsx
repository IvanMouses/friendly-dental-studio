import styles from "./Feedback.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";

export default function Feedback() {
  return (
    <div className={styles["feedback-container"]}>
      <div className={styles["feedback-body"]}>
        <h2 className={styles["feedback-title"]}>Что про нас говорят</h2>
        <Swiper
          style={{
            "--swiper-navigation-color": "#00000",
            "--swiper-pagination-color": "#7AB883",
            "--swiper-pagination-bullet-position": "static",
          }}
          modules={[Navigation, EffectFade, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <div className={styles["feedback-slide"]}>
              <img
                src="/friendly-dental-studio/img/Main/HeroFeedback/1.png"
                alt="Фото клиента"
              />
              <div className={styles["feedback-text"]}>
                <p>
                  Доктора очень компетентны и отзывчивы, как и все помощники и
                  гигиенисты, с которыми мне посчастливилось встретиться. Очень
                  круто!
                </p>
                <span>Жданов Михаил</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["feedback-slide"]}>
              <img
                src="/friendly-dental-studio/img/Main/HeroFeedback/2.png"
                alt="Фото клиента"
              />
              <div className={styles["feedback-text"]}>
                <p>
                  До прихода в Friendly Dental Studio у меня были серьезные
                  проблемы с зубами. И я жутко боялась стоматологов. Здесь
                  смогли убедить меня, что стоматология это не страшно, а весело
                  и захватывающе!
                </p>
                <span>Алтушина Марьям</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["feedback-slide"]}>
              <img
                src="/friendly-dental-studio/img/Main/HeroFeedback/3.svg"
                alt="Фото клиента"
              />
              <div className={styles["feedback-text"]}>
                <p>
                  Мне кажется я наконец-то нашла свою клинику. Врачи и весь
                  персонал создают дружелюбную и комфортную атмосферу. Оказание
                  услуг на высоте. Пять звезд!
                </p>
                <span>Орлова Наталья</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

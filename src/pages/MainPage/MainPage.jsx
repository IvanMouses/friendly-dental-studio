import styles from "./MainPage.module.css";
import Slider from "../../components/Main/Slider/Slider";
import HeroMessage from "../../components/Main/HeroMessage/HeroMessage";
import About from "../../components/Main/About/About";
import Quote from "../../components/Main/Quote/Quote";
import Team from "../../components/Main/Team/Team";
import Advantages from "../../components/Main/Advantages/Advantages";
import Services from "../../components/Main/Services/Services";
import Kids from "../../components/Main/Kids/Kids";
import SlideGallery from "../../components/Main/SlideGallery/SlideGallery";
import Comfort from "../../components/Main/Comfort/Comfort";
import Feedback from "../../components/Main/Feedback/Feedback";
import FinalWellcome from "../../components/Main/FinalWellcome/FinalWellcome";
import ContactsMain from "../../components/Main/ContactsMain/ContactsMain";

export default function MainPage() {
  return (
    <>
      <Slider />
      <HeroMessage />
      <About
        bgStyle="green"
        bodyPosition="left"
        iconStyle="circle_yellow"
        titlePosition="title-left"
        textPosition="text-left"
        title="Строим доверие на открытости"
        items={[
          {
            title: "Фиксированные цены и понятный план лечения",
            text: "Уже на первой консультации вы точно узнаете, сколько будет стоить лечение и сколько времени оно продлится.",
          },
          {
            title: "Только та забота, которая вам нужна",
            text: "Мы не навязываем лечение, а вместе с вами обсуждаем все способы решения проблемы и выбор материалов. Вы всегда будете контролировать процесс.",
          },
          {
            title: "Гибкость и учёт ваших возможностей",
            text: "Нет времени ждать, когда речь заходит о проблемах с зубами. Поэтому вы можете оплатить лечение в рассрочку и получить необходимую стоматологическую помощь уже сейчас.",
          },
        ]}
      />
      <Quote
        bgColor="white"
        icon="quote"
        textColor="black-text"
        quoteLabelColor="dark-label"
        text="Мы меняем отношение людей к стоматологам и уходу за зубами. Превращаем это в приятное и полезное времяпрепровождениe. Для нас каждый человек индивидуален, он открывается нам, а взамен мы делаем его счастливее."
      />
      <About
        bgStyle="pink"
        bodyPosition="right"
        iconStyle="circle_white"
        titlePosition="title-right"
        textPosition="text-right"
        title="Сохраняем тёплую атмосферу"
        items={[
          {
            title: "Всегда поддержим",
            text: "Мы рады как чемпионам зубной нити, так и заядлым сладкоежкам. Мамам и их детям. Понимаем, что мало свободного времени, чтобы сходить к стоматологу, а для многих решиться на приём — это просто подвиг. И гордимся каждым, кто смог прийти к нам.",
          },
          {
            title: "Работаем чутко и прислушиваемся",
            text: "Наши специалисты внимательно следят за вашим самочувствием и настроением до и в процессе лечения, а главное — комментируют каждый шаг, чтобы вы чувствовали только спокойствие.",
          },
          {
            title: "Ответим на все вопросы",
            text: "Не надо стесняться. Для нас нет стыдных или глупых вопросов. С удовольствием ответим на всё, что вас интересует.",
          },
        ]}
      />
      <Team />
      <Advantages />
      <Quote
        bgColor="green"
        icon="quote_white"
        textColor="white-text"
        quoteLabelColor="light-label"
        text="Мы используем самые современные технологии. Безусловно. Но для нас современность — шире, чем просто новое оборудование. Нам важно быть клиникой современных взглядов. Клиникой нового подхода. Той, где ты чувствуешь себя комфортно и безопасно. Клиникой, куда приходишь с улыбкой."
      />
      <Services />
      <Kids />
      <SlideGallery />
      <Comfort />
      <Feedback />
      <FinalWellcome
        title="Готовы изменить своё мнение о стоматологии?"
        text=" Запишитесь на консультацию и почувствуйте разницу"
      />
      <ContactsMain />
    </>
  );
}

import "../../scss/aboutUs.scss";
import DiscordJOinButton from "./DiscordButton";
import poplavok from "../../assets/img/aboutUs/poplavok.png";

function AboutUsPage() {
  return (
    <div className="aboutUs">
      <span></span>
      <div className="aboutUs__content">
        <div className="aboutUs__box-about">
          <div className="aboutUs__box-img-container">
            <div className="aboutUs__box-img-border">
              <img
                className="aboutUs__box-img"
                src={poplavok}
                alt="поплавок"
              />
            </div>
            <h4 className="aboutUs__box-img-name">ArXAnGeL</h4>
          </div>
          <div className="aboutUs__box-about-text">
            <h3 className="aboutUs__box-about-text-h3">О НАС</h3>
            <p className="aboutUs__box-about-text-p">
              Команда единомышленников желающая скрасить твое время в
              постапокалиптическом PVE мире DayZ. Возник вопрос? Можешь задать
              его нам!
            </p>
            <DiscordJOinButton />
          </div>
        </div>

        <div className="aboutUs__box-about">
          <div className="aboutUs__box-about-text">
            <h3 className="aboutUs__box-about-text-h3">О Сервере</h3>
            <p className="aboutUs__box-about-text-p">
              Провести время в игре вы можете, как и в шумной компании, так и в
              одиночку. Побродить по улицам полуразрушенного, заброшенного
              города. Добывать или находить лут. Убивать и разделывать зомби и
              мутантов. Крафтить оружие, снаряжение или постройки. Проходить
              квесты и получать за их выполнение награду. Погодные условия так
              же могут затруднить или облегчить жизнь вашему игровому персонажу.
              Не попасться в аномалии! Они наносят значительный удар по здоровью
              или убивают!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsPage;

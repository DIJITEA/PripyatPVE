import "../../scss/aboutUs.scss";
import DiscordJOinButton from "./DiscordButton";
import poplavok from "../../assets/img/aboutUs/poplavok.png";
import { useAppSelector, useAppDispatch } from "../../hooks";

function AboutUsPage() {
  const lang = useAppSelector((state) => state.lang.value);
  const JSON_Text = require(`../../textData/siteTextData${lang}.json`);
  const JSON_Text_AboutUs = JSON_Text.AboutUs;
  const JSON_Text_AboutUs_p = JSON_Text_AboutUs.p_aboutUs.join(" ");
  const JSON_Text_Server_p = JSON_Text_AboutUs.p_server_info.join(" ");

  return (
    <div className="aboutUs">
      <span></span>
      <div className="aboutUs__content">
        <div className="aboutUs__box-about">
          <div className="aboutUs__box-img-container">
            <div className="aboutUs__box-img-border">
              <img className="aboutUs__box-img" src={poplavok} alt="поплавок" />
            </div>
            <h4 className="aboutUs__box-img-name">ArXAnGeL</h4>
          </div>
          <div className="aboutUs__box-about-text">
            <h3 className="aboutUs__box-about-text-h3">{JSON_Text_AboutUs.h2_about}</h3>
            <p className="aboutUs__box-about-text-p">{JSON_Text_AboutUs_p}</p>
            <DiscordJOinButton />
          </div>
        </div>

        <div className="aboutUs__box-about">
          <div className="aboutUs__box-about-text">
            <h3 className="aboutUs__box-about-text-h3">{JSON_Text_AboutUs.h2_about_server}</h3>
            <p className="aboutUs__box-about-text-p">{JSON_Text_Server_p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsPage;

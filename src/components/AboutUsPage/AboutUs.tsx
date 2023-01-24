import { useAppSelector, useAppDispatch } from "../../hooks";
import "../../scss/aboutUs.scss";

import screen1 from "../../assets/img/screenshots/20230118013717_1.jpg";
import screen2 from "../../assets/img/screenshots/20230121162317_1.jpg";
import screen3 from "../../assets/img/screenshots/20230121162354_1.jpg";
import screen4 from "../../assets/img/screenshots/20230121162954_1.jpg";

import Carousel from "../usefulСomponents/Carousel";
import { CaruselObj } from "../../models/models";

function AboutUs() {
  const lang = useAppSelector((state) => state.lang.value);
  const JSON_Text = require(`../../textData/siteTextData${lang}.json`);
  const JSON_Text_AboutUs = JSON_Text.AboutUs;
  console.log(JSON_Text_AboutUs.p_server_info);
  const screens: CaruselObj = {
    value: [screen1, screen2, screen3, screen4],
  };
  return (
    <article className="aboutUs aboutUs__container">
      {/* <div className="aboutUs__info-container aboutUs__info-container--first">
        <h2 className="aboutUs__h2">{JSON_Text_AboutUs.h2_about}</h2>
        <h3 className="aboutUs__h3">{JSON_Text_AboutUs.h3_main}</h3>
      </div> */}
      {/* <div className="aboutUs__info-container aboutUs__info-container--second">
        <h2 className="aboutUs__h2">{JSON_Text_AboutUs.h2_about_server}</h2>
        <p className="aboutUs__p">{JSON_Text_AboutUs.p_server_info}</p>
      </div> */}
      {/* <div className="carousel carousel__container"></div> */}
      <Carousel {...screens} />
    </article>
  );
}
export default AboutUs;

import { incrementByAmount } from "../../store/actions/textDataHandler";
import { useAppSelector, useAppDispatch } from "../../hooks";

//scss
import "../../scss/navigationBar.scss";
//assets
import logo from "../../assets/img/logo/logo-3.jpg";
//models
import { HiddenUlInputArary } from "../../models/models";
//components
import HiddenUl from "./HiddenUl";
import LanguageButton from "./languageButton";
//--------------------------------
function NavigationBar() {
  console.log(typeof logo);
  console.log(logo);
  //-----
  const lang = useAppSelector((state) => state.lang.value);
  //-----
  const JSON_Text = require(`../../textData/siteTextData${lang}.json`);
  const JSON_Text_NavigationBar = JSON_Text.NavigationBar;

  const HiddenUlinputObj: HiddenUlInputArary = {
    mainName: JSON_Text_NavigationBar.h2_screenshots,
    value: [
      {
        name: JSON_Text_NavigationBar.name_sites,
        src: "/sites",
      },
      {
        name: JSON_Text_NavigationBar.name_photos,
        src: "/photos",
      },
    ],
  };
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar__work-space">
        <img className="navigation-bar__logo" src={logo}></img>
        <ul className="navigation-bar__ul">
          <li className="navigation-bar__li">
            <a className="navigation-bar__a" href="#/about">
              <h2 className="navigation-bar__h2">
                {JSON_Text_NavigationBar.h2_about}
              </h2>
            </a>
          </li>
          <li className="navigation-bar__li">
            {/* <HiddenUl {...HiddenUlinputObj} /> */}
            <h2 className="navigation-bar__h2">
                {JSON_Text_NavigationBar.h2_screenshots}
              </h2>
          </li>
          <li className="navigation-bar__li">
            <a className="navigation-bar__a" href="../../../Wiki/home.html">
              <h2 className="navigation-bar__h2">
              {JSON_Text_NavigationBar.h2_wiki}
              </h2>
            </a>
          </li>
          <li className="navigation-bar__li">
            <a className="navigation-bar__a" href="/Contact">
              <h2 className="navigation-bar__h2">
              {JSON_Text_NavigationBar.h2_donate}
              </h2>
            </a>
          </li>
        </ul>
        <LanguageButton />
      </div>
    </nav>
  );
}

export default NavigationBar;

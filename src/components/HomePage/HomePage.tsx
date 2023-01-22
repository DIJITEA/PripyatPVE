import { useAppSelector, useAppDispatch } from '../../hooks'

import "../../scss/homePage.scss";
// import Petals from '../Petasl'
function Homepage() {
  const lang = useAppSelector(state => state.lang.value)
  const JSON_Text = require( `../../textData/siteTextData${lang}.json`)
  const JSON_Text_HomePage = JSON_Text.HomePage
  return (
    <main className="home-page">
      
      <div className="home-page__container">
      {/* <video className="Video" loop autoPlay muted>
        <source src="src/assets/video/trim5.mp4" />
      </video> */}
        <div className="home-page__content-container">
          <h2 className="home-page__h2">{JSON_Text_HomePage.h2_welcome}</h2>
          {/* <h1 className="home-page__h1">Pripyat</h1> */}
        </div>
      </div>
      {/* <Petals/> */}
    </main>
  );
}
export default Homepage;

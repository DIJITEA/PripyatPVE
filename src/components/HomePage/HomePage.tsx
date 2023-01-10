import "../../scss/homePage.scss";
// import Petals from '../Petasl'
function Homepage() {
  return (
    <main className="home-page">
      
      <div className="home-page__container">
      <video className="Video" controls loop autoPlay muted>
        <source src="src/assets/video/trim5.mp4" />
      </video>
        <div className="home-page__content-container">
          {/* <h1 className="home-page__h1">Pripyat</h1> */}
        </div>
      </div>
      {/* <Petals/> */}
    </main>
  );
}
export default Homepage;

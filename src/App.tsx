import { HashRouter, Route, Routes } from "react-router-dom";
import "../src/scss/deafultCssReset.scss";
import "../src/scss/main.scss";
import "../src/assets/fonts/fonts.css";
import NavigationBar from "./components/NavigationComponents/NavigationBar";
import Homepage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/DiscordComponents/AboutUsPage";
import ScreenShots from "./components/ScreenShots/ScreenShotsP";
import ScreenShotsFragment from "./components/ScreenShots/ScreenShotsFragment";
export default function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Homepage />
      <AboutUsPage />
      <ScreenShotsFragment/>
      {/* <ScreenShots /> */}
      {/* <AboutUsPage /> */}
      {/* <Homepage /> */}
      <Routes>
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
}

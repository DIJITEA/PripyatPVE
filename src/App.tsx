import { HashRouter, Route, Routes } from "react-router-dom";
import "../src/scss/deafultCssReset.scss";
import "../src/scss/main.scss";
import "../src/assets/fonts/fonts.css";
import HelloTest from "./components/Hello";
import Counter from "./components/Counter";
import LanguageButton from "./components/NavigationComponents/languageButton"
import NavigationBar from "./components/NavigationComponents/NavigationBar";
import Homepage from "./components/HomePage/HomePage";
import JoinDiscord from "./components/DiscordComponents/JoinDiscortd";
export default function App() {
  return (
    <div className="main">
      <NavigationBar />
      <LanguageButton />
      <Homepage />
      <JoinDiscord/>
      <Homepage />
      {/* <a href="/homepage">AAAAAAAAAAA</a> */}
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/about" element={<div>About</div>} />
      </Routes>

      {/* <HelloTest /> */}
      {/* <Counter /> */}
    </div>
  );
}

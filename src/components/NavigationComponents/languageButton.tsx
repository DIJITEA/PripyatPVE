import { incrementByAmount } from "../../store/actions/textDataHandler";
import { useAppSelector, useAppDispatch } from "../../hooks";

import "../../scss/languageButton.scss";

function LanguageButton() {

  function changeBackground(e) {
    const audio = new Audio("src/assets/sounds/lamp.mp3");
    audio.play();
    setTimeout(() => {
      e.target.classList.toggle("languageButton--active");
    }, 200);
  }

  const lang: string = useAppSelector((state) => state.lang.value);
  const dispatch = useAppDispatch();
  let prevLang: string = "RU";

  if (lang === "EN") {
    prevLang = "RU";
  } else {
    prevLang = "EN";
  }

  return (
    <button
      className="languageButton"
      onClick={() => dispatch(incrementByAmount())}
      onMouseOver={changeBackground}
      onMouseLeave={changeBackground}
    >
      {prevLang}
    </button>
  );
}
export default LanguageButton;

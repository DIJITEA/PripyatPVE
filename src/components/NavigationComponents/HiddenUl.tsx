import { useState } from "react";
//scss
import "../../scss/hiddenUI.scss";
//models

import { HiddenUlInputArary } from "../../models/models";

function HiddenUlLi(Component: { name: string; href: string }) {
  return (
    <li className="hiddenUI__list">
      <a className="hiddenUI__a" href={Component.href}>
        <h3>{Component.name}</h3>
      </a>
    </li>
  );
}

function HiddenUl(inputObj: HiddenUlInputArary) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <ul className="hiddenUI">
      <button className="hiddenUI__button" onClick={toggleClass}>
        <h2 className="hiddenUI__h2">{inputObj.mainName}</h2>
      </button>

      <div
        className={
          isActive
            ? "hiddenUI__list-container--open hiddenUI__list-container"
            : "hiddenUI__list-container"
        }
      >
        {[...Array(inputObj.value.length)].map((e, i: number) => (
          <HiddenUlLi
            key={i}
            name={inputObj.value[i].name}
            href={inputObj.value[i].src}
          />
        ))}
      </div>
    </ul>
  );
}

export default HiddenUl;

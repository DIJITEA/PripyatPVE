import React, { useState, useEffect } from "react";
import "../../scss/screenShots.scss";

function ScreenShotsFragment() {
  const cache = {};
  const contentC = [];

  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }

  importAll(
    require.context("../../assets/img/screenshots", true, /\.(png|jpg|svg)$/)
  );

  Object.keys(cache).forEach(
    (key, index) => (contentC[index] = cache[Object.keys(cache)[index]])
  );

  const [currentImg, setCurrentImgState] = useState([0, 0]);
  const [currentImgkey, setCurrentImgKeyState] = useState(0);
  let currentChangeRigths = true;

  function openCurrent() {
    currentChangeRigths
      ? (currentChangeRigths = false)
      : (currentChangeRigths = true);
    document
      .getElementById("FullScreen")
      .classList.toggle("fullScreenImg--active");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(currentChangeRigths);
      if (currentChangeRigths) {
        currentImgkey == 0
          ? setCurrentImgKeyState(1)
          : setCurrentImgKeyState(0);
        setCurrentImgState([
          Math.floor(Math.random() * contentC.length),
          currentImg[0],
        ]);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImg]);

  return (
    <article className="screenShots">
      <div id="FullScreen" className="fullScreenImg">
        <div className="fullScreenImg__content-box">
          <button
            className="fullScreenImg__button"
            onClick={() => openCurrent()}
          ></button>
          <img className="fullScreenImg__img" src={contentC[currentImg[0]]} />
        </div>
      </div>
      <div className="screenShots__content-box">
        <div className="currentImg currentImg__content-box">
          <img
            key={currentImgkey}
            className="currentImg__img currentImg__img--cur"
            src={contentC[currentImg[0]]}
            onClick={() => openCurrent()}
          />
          <img
            className="currentImg__img currentImg__img--prev"
            src={contentC[currentImg[1]]}
          />
        </div>
        <div className="imgGallery imgGallery__content-box">
          {[...Array(contentC.length)].map((e, i: number) => (
            <img
              className="imgGallery__img"
              key={i}
              src={contentC[i]}
              onClick={() => setCurrentImgState([Math.floor(i), currentImg[0]])}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ScreenShotsFragment;

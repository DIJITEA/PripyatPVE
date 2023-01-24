import React, { useState, useEffect } from "react";

import "../../scss/carousel.scss";

import { CaruselObj } from "../../models/models";

function CarouselItem(Component: {
  imgSrc: string;
  itemI: number;
  currentItemI: number;
}) {
  const classReturn = (itemI: number, currentItemI: number) => {
    let classSet: string;
    if (itemI == currentItemI) {
      classSet = "carousel__img-container carousel__img-container--active";
    } else {
      classSet = "carousel__img-container";
    }
    return classSet;
  };
  return (
    <div className={classReturn(Component.itemI, Component.currentItemI)}>
      <img className="carousel__img" src={Component.imgSrc} />
    </div>
  );
}

function Carousel(ImgsArray: CaruselObj) {
  const [currentItemState, setCurrentItemState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentItemState >= ImgsArray.value.length - 1) {
        setCurrentItemState(currentItemState + 1 - ImgsArray.value.length);
      } else {
        setCurrentItemState(currentItemState + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentItemState]);

  return (
    <div className="carousel">
      <div className="carousel__container">
        {[...Array(ImgsArray.value.length)].map((e, i: number) => (
          <CarouselItem
            itemI={i}
            key={i}
            imgSrc={ImgsArray.value[i]}
            currentItemI={currentItemState}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

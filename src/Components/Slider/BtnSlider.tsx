import React from 'react';
import rightArrow from "./icons/right-arrow.svg";
import leftArrow from "./icons/left-arrow.svg";
// const leftArrow = require("./icons/left-arrow.svg");

interface Props  {
	direction: string;
	moveSlide: () => void;
}

const BtnSlider:React.FC<Props> = ({direction, moveSlide}) => {
  return (
	  <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
	  			onClick={moveSlide} >
		  <img src={direction === "next" ? rightArrow : leftArrow} alt={direction === "next" ? "image suivante" : "image précédente"} />
	  </button>
  )
};

export default BtnSlider;

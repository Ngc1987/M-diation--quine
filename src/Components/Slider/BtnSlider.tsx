import React, { useEffect, useState } from 'react';
import rightArrow from "./icons/right-arrow.svg";
import leftArrow from "./icons/left-arrow.svg";

interface Props  {
	direction: string;
	moveSlide: () => void;
}

const BtnSlider:React.FC<Props> = ({direction, moveSlide}) => {

	// state for the window size, differents animations displayed for desktop or mobile device
	const [dimensions, setDimensions] = useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	})

	// Listen resize event, and set the state with the actual values
	useEffect(() => {
		function handleResize() {
			setDimensions({height: window.innerHeight, width: window.innerWidth})
		}
		window.addEventListener('resize', handleResize)
	
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})


  return (
	  <button className={`btn-slide ${direction === "next" ? "next" : "prev"} ${dimensions.width > 767 ? "big" : "small"}`}
	  			onClick={moveSlide} >
		  <img src={direction === "next" ? rightArrow : leftArrow} alt={direction === "next" ? "image suivante" : "image précédente"} />
	  </button>
  )
};

export default BtnSlider;

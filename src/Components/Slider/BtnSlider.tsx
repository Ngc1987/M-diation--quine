import React, { useEffect, useState } from 'react';
import rightArrow from "./icons/right-arrow.svg";
import leftArrow from "./icons/left-arrow.svg";

import useWindowSize from 'Hooks/useWindowSize';

interface Props  {
	direction: string;
	moveSlide: () => void;
	tabIndex: number;
}

const BtnSlider:React.FC<Props> = ({direction, moveSlide, tabIndex}) => {

	// Hook to fetch the window size and show the mobile or desktop version
	const dimensions = useWindowSize();

	return (
		<button className={`btn-slide ${direction === "next" ? "next" : "prev"} ${dimensions.width > 767 ? "big" : "small"}`}
				onClick={moveSlide} tabIndex={tabIndex}>
			<img src={direction === "next" ? rightArrow : leftArrow} 
				 alt={direction === "next" ? "image suivante" : "image précédente"} />
		</button>
	)
};

export default BtnSlider;

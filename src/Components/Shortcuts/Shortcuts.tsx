import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import "./Shortcuts.scss";
import { StyledDiv } from 'styles/styles';
import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const faPropIcon = faUserCircle as IconProp;

// Interface for the cmponent props
export interface Props  {
	anchorLink: (event: any) => void;
}


const Shortcuts:React.FC<Props> = ({anchorLink}) => {
	gsap.registerPlugin(ScrollToPlugin);

	//scroll #someID into view with 50 pixels from the top (like a margin)
	// const link = (e) => {
	// 	console.log(e)
	// 	return gsap.to(window, {duration: .5, scrollTo: {y: ".parcours", offsetY: -50}});
	// }




	return (
		<StyledDiv className="shortcuts" >
			{/* <a href="#desc"> */}
				<FontAwesomeIcon onClick={(e) => anchorLink(e)} icon={faPropIcon} data-pin=".description" size="2x" />
				<FontAwesomeIcon onClick={(e) => anchorLink(e)} icon={faPropIcon} data-pin=".forwho" size="2x" />
				<FontAwesomeIcon onClick={(e) => anchorLink(e)} icon={faPropIcon} data-pin=".parcours" size="2x" />
			{/* </a> */}
		</StyledDiv>
	)
}

export default Shortcuts;

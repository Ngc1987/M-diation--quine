// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React from "react";
import "./ForWho.scss";
import { StyledDiv } from '../../styles/styles';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>,
}

const ForWho:React.FC<Props> = ({innerRef}) => {

	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
	
	return (

		<section ref={innerRef} className="forwho" >

			<div className="forwho__image">
				<img src={"/assets/forwho.jpg"} alt="deux chevaux face à deux personnes" />
			</div>

			<div className="forwho__title">
				<h2>La médiation équine</h2>
				<h3>Oui mais pour qui ?</h3>
			</div>

			<div className="forwho__article" >
				<StyledDiv className="forwho__article-text">
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
				</StyledDiv>
			</div>

		</section>
	)
}

export default ForWho;

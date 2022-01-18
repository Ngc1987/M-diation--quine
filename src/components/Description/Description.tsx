// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React from "react";
import "./Description.scss";
import { StyledDiv } from '../../styles/styles';

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>,
}

const Description:React.FC<Props> = ({innerRef}) => {
	return (

		<section ref={innerRef} id="desc" className="description" >
			
			<div className="description__image">
				<img src={"/assets/description.jpg"} alt="deux chevaux face à deux personnes" />
			</div>

			<StyledDiv className="description__title">
				<h2>La médiation équine, qu'est-ce que ?</h2>
			</StyledDiv>

			<StyledDiv className="description__article" >
				<p>
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
				</p>
			</StyledDiv>

		</section>
	)
}

export default Description;

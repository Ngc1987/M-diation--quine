// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React from "react";
import { StyledDiv } from "styles/styles";
import "./Parcours.scss";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>,
}

const Parcours:React.FC<Props> = ({innerRef}) => {
	return (
		<section ref={innerRef} className="parcours" >
			<div className="parcours__image">
				<img src={"/assets/parcours.jpg"} alt="deux chevaux face à deux personnes" />
				{/* <div className="parcours__image-layout"></div> */}
			</div>

			<StyledDiv className="parcours__title">
					<h2>Mon parcours</h2>
				</StyledDiv>

			<StyledDiv className="parcours__article" >
				<p>
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
				</p>
			</StyledDiv>

		</section>
	)
}

export default Parcours;

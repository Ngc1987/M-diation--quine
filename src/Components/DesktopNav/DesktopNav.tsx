import React from "react";
import "./DesktopNav.scss";

export interface Props  {
	handleSectionToDisplay: (e: any) => void;
}


const DesktopNav:React.FC<Props> = ({handleSectionToDisplay}) => {

	return (
		<div className="desktopNav" >
			<div className="desktopNav__link" 
				data-section="description" 
				onClick={(e)=> handleSectionToDisplay(e)}
				>
				Description
			</div>
			<div className="desktopNav__link" 
				data-section="pourqui" 
				onClick={(e)=> handleSectionToDisplay(e)}
				>
				Pour qui ?
			</div>
			<div className="desktopNav__link" 
				data-section="parcours" 
				onClick={(e)=> handleSectionToDisplay(e)}
				>
				Mon parcours
			</div>
			<div className="desktopNav__link" 
				data-section="galerie" 
				onClick={(e)=> handleSectionToDisplay(e)}
				>
				Galerie
			</div>
			<div className="desktopNav__link" 
				data-section="contact" 
				onClick={(e)=> handleSectionToDisplay(e)}
				>
				Contact
			</div>
		</div>
	)
}

export default DesktopNav
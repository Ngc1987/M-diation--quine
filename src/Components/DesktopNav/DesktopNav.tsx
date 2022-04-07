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
				onKeyPress={(e)=> handleSectionToDisplay(e)}
				 tabIndex={0}
				>
				Description
			</div>
			<div className="desktopNav__link" 
				data-section="pourqui" 
				onClick={(e)=> handleSectionToDisplay(e)}
				onKeyPress={(e)=> handleSectionToDisplay(e)}
				 tabIndex={0}
				>
				Pour qui ?
			</div>
			<div className="desktopNav__link" 
				data-section="parcours" 
				onClick={(e)=> handleSectionToDisplay(e)}
				onKeyPress={(e)=> handleSectionToDisplay(e)}
				 tabIndex={0}
				>
				Mon parcours
			</div>
			<div className="desktopNav__link" 
				data-section="galerie" 
				onClick={(e)=> handleSectionToDisplay(e)}
				onKeyPress={(e)=> handleSectionToDisplay(e)}
				 tabIndex={0}
				>
				Galerie
			</div>
			<div className="desktopNav__link" 
				data-section="contact" 
				onClick={(e)=> handleSectionToDisplay(e)}
				onKeyPress={(e)=> handleSectionToDisplay(e)}
				 tabIndex={0}
				>
				Contact
			</div>
		</div>
	)
}

export default DesktopNav
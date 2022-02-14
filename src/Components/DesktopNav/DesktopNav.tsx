import React from 'react';
import { Link } from 'react-router-dom';
import "./DesktopNav.scss";

export interface Props  {
	handleSectionToDisplay: (e: any) => void;
}


const DesktopNav:React.FC<Props> = ({handleSectionToDisplay}) => {

	return (
		<div className="desktopNav" >
			<div className="desktopNav__link" 
				// to="/description" 
				data-section="description" 
				onClick={(e)=> handleSectionToDisplay(e)}
				>
				Description
			</div>
			<div className="desktopNav__link" 
				// to="/pourqui" 
				data-section="pourqui" 
				onClick={(e)=> handleSectionToDisplay(e)}
				// onClick={setOpen}
				>
				Pour qui ?
			</div>
			<div className="desktopNav__link" 
				// to="/parcours" 
				data-section="parcours" 
				onClick={(e)=> handleSectionToDisplay(e)}
				// onClick={setOpen}
				>
				Mon parcours
			</div>
			<div className="desktopNav__link" 
				// to="/gallerie" 
				data-section="galerie" 
				onClick={(e)=> handleSectionToDisplay(e)}
				// onClick={setOpen}
				>
				Galerie
			</div>
			<div className="desktopNav__link" 
				// to="/contact" 
				data-section="contact" 
				onClick={(e)=> handleSectionToDisplay(e)}
				// onClick={setOpen}
				>
				Contact
			</div>
		</div>
	)
}

export default DesktopNav
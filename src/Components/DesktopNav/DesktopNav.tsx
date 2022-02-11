import React from 'react';
import { Link } from 'react-router-dom';
import "./DesktopNav.scss";

export interface Props  {
	
}


const DesktopNav:React.FC<Props> = () => {

	return (
		<div className="desktopNav" >
			<Link className="desktopNav__link" 
				to="/description" 
				>
				Description
			</Link>
			<Link className="desktopNav__link" 
				to="/pourqui" 
				// onClick={setOpen}
				>
				Pour qui ?
			</Link>
			<Link className="desktopNav__link" 
				to="/parcours" 
				// onClick={setOpen}
				>
				Mon parcours
			</Link>
			<Link className="desktopNav__link" 
				to="/gallerie" 
				// onClick={setOpen}
				>
				Galerie
			</Link>
			<Link className="desktopNav__link" 
				to="/contact" 
				// onClick={setOpen}
				>
				Contact
			</Link>
		</div>
	)
}

export default DesktopNav
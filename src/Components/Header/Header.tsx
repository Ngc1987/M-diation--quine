import React from "react";
import "./Header.scss";

import useWindowSize from "Hooks/useWindowSize";

const Header:React.FC = () => {

	// Hook to fetch the window size and show the mobile or desktop version for the header
	const dimensions = useWindowSize();

	return (

		<header className="head" >

			<div className="head__layout"></div>
			<div className="head__brand" >

				{dimensions.width < 768 ? 
				<>
					<div className="head__brand-logoDiv">
						<img src={"/assets/headLogowebp.webp"} 
							className="head__brand-logoDiv-logo" 
							alt="logo de l'entreprise" 
							tabIndex={0} 
							aria-label="Logo de l'entreprise" 
						></img>
					</div>
					<div className="head__brand__name">
						<h1 tabIndex={0} 
							aria-label="Nom de l'entreprise" 
							className="head__brand__name-title"
							>Dom Equi Médiation
						</h1>
						<h2 tabIndex={0} 
							aria-label="Descriptif du service vendu" 
							className="head__brand__name-subtitle"
							>Séances de médiation équine en Vendée
						</h2>
					</div>
				</>
				:
				<>
					<h1 className="head__brand__name-title"
						tabIndex={0} 
						aria-label="Nom de l'entreprise" 
						>Dom Equi Médiation
					</h1>
					<div className="head__brand-logoDiv">
						<img src={process.env.PUBLIC_URL + "/assets/headLogowebp.webp"} 
							className="head__brand-logoDiv-logo" 
							tabIndex={0} 
							aria-label="Logo de l'entreprise" 
							alt="logo de l'entreprise">
						</img>
					</div>
					<h2 className="head__brand__name-subtitle"
						tabIndex={0} 
						aria-label="Descriptif du service vendu" 
						>Séances de médiation équine en Vendée
					</h2>
				</>
			}
			</div>
		</header>
	)
}

export default Header

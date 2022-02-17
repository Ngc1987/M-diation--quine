import React from 'react';
import "./Footer.scss"

const Footer = () => {
	return (
		<div className="footer" >
			{/* <div className="footer__layout"></div> */}
			<h1 className="footer__title">Dom Equi Médiation</h1>
			<div className="footer__logoDiv">
				<img src={process.env.PUBLIC_URL + "/assets/headLogowebp.webp"} className="footer__logoDiv-logo" alt="logo de l'entreprise"></img>
			</div>
		</div>
	)
}

export default Footer
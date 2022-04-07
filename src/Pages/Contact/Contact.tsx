import React, { ReactElement } from 'react';
import "./Contact.scss";

import Title from '../../Components/Title/Title';
import ContactForm from '../../Components/Form/Form';
import Map from '../../Components/Map/Map';

import { FaPhoneSquareAlt } from "react-icons/fa";

export interface ContactProps  {
	className: string;
	ariaHidden: boolean;
}

function Contact({className, ariaHidden}:ContactProps):ReactElement {

	console.log(ariaHidden)
	return (

		
		<section className={`contact ${className}`} >

			<Title title="Contact" 
					className="contact__title" 
					ariaHidden={ariaHidden}
			/>

			<div className="contact__infos">

				<p tabIndex={ariaHidden ? -1 : 0} 
					aria-hidden={ariaHidden}>Vous pouvez me contacter directement par téléphone en cliquant sur le lien suivant</p>
				
					<a className="contact__infos-tel" 
						href="tel:+33614382452" 
						aria-label="Bouton appeler"
						tabIndex={ariaHidden ? -1 : 0} >
						<FaPhoneSquareAlt/>
					</a>
				
				<p tabIndex={ariaHidden ? -1 : 0} 
					aria-hidden={ariaHidden}>Ou en remplissant le formulaire ci-dessous. </p>
			</div>
			<ContactForm/>
			<Title title="Localisation" 
					className="contact__place" 
					ariaHidden={ariaHidden}
			/>
			{
				!ariaHidden &&
				<Map ariaHidden={ariaHidden}/>
			}
		</section>
	)
};

export default Contact;

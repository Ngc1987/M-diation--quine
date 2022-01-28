import React from 'react';
import ContactForm from 'Components/Form/Form';
import Map from 'Components/Map/Map';
import "./Contact.scss";

export interface Props  {
	checkDisabled?: (self: any) => void;
}

const Contact:React.FC<Props> = () => {
	return (
		<div className='contact'>
			<h3 className='contact__title'>Contact</h3>
			<ContactForm/>
			<h3 className='contact__place'>Localisation</h3>
			<Map/>
		</div>
	)
};

export default Contact;

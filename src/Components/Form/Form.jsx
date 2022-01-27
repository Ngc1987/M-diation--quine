import React, {useState} from 'react';
import { StyledDiv } from 'styles/styles';
import "./Form.scss";
import { useForm } from 'react-hook-form';
// import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import emailjs, { init } from '@emailjs/browser';

const ContactForm = () => {
	init("user_Ch8zKqPzcFNo8oW0WqNgg");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();


	const [disabled, setDisabled] = useState(false);

	// Function that displays a success toast on bottom right of the page when form submission is successful
	const toastifySuccess = () => {
		toast('Form sent!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: 'submit-feedback success',
			toastId: 'notifyToast'
		});
	};

	const onSubmit = async (data) => {
		const { firstName, lastName, email, message } = data;

		console.log('First name: ', firstName);
		console.log('Last name: ', lastName);
		console.log('Email: ', email);
		console.log('Message: ', message);

		try {
			// Disable form while processing submission
			setDisabled(true);

			// Define template params
			const templateParams = {
				firstName,
				lastName,
				email,
				message
			};

			// Use emailjs to email contact form data
			await emailjs.send(
				"service_2if4nkm",
				"template_3z23f6p",
				templateParams,
				"user_Ch8zKqPzcFNo8oW0WqNgg"
			);

			// Reset contact form fields after submission
			reset();
			// Display success toast
			toastifySuccess();
			// Re-enable form submission
			setDisabled(false);
		} catch (e) {
			console.log(e);
		}
	};

  	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="form">

				<label htmlFor="firstName">Prénom</label>
				<input type="text" id="firstName" name='firstName'
					{...register('firstName', {
						required: { value: true, message: 'Veuillez indiquer votre prénom' },
						maxLength: {
							value: 30,
							message: 'Please use 30 characters or less'
						}
					})}/>
				{errors.firstName && <span className='form__errorMsg'>{errors.firstName.message}</span>}

				<label htmlFor="lastName">Nom</label>
				<input type="text" id="lastName" name='lastName'
					{...register('lastName', {
						required: { value: true, message: 'Veuillez indiquer votre nom' },
						maxLength: {
							value: 30,
							message: 'Please use 30 characters or less'
						}
					})} />
				{errors.lastName && <span className='form__errorMsg'>{errors.lastName.message}</span>}

				<label htmlFor="email" id="email">Email</label>
				<input type="email" name='email'
					{...register('email', {
						required: true,
						pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
					})}

					/>
				{errors.email && (<span className='form__errorMsg'>Veuillez indiquer une adresse email valide</span>)}

				<label htmlFor="message">Message</label>
				<textarea type="text" id="message" rows={5} 
					name='message'
					{...register('message', {
						required: true
					})}
				 />
				{errors.message && <span className='form__errorMsg'>Veuillez laisser un message avant validation</span>}

				<button>Envoyer</button>

			</form>
			<ToastContainer/>
		</>
	)
};

export default ContactForm;

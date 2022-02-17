import React, {useState} from 'react';
import "./Form.scss";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs, { init } from '@emailjs/browser';


const ContactForm = () => {

	// Initialize emailJs 
	init("user_Ch8zKqPzcFNo8oW0WqNgg");

	// Initialize React Hook Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	// State to enable or disable the form
	const [disabled, setDisabled] = useState(false);

	// Function that displays a success toast on bottom right of the page when form submission is successful
	const toastifySuccess = () => {
		toast.success('Votre message a bien été envoyé ! 🐎', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			transition: Flip,
			// className: 'submit-feedback success',
			toastId: 'notifyToast'
		});
	};

	// Function to take datas and send on an email
	const onSubmit = async (data) => {
		const { firstName, lastName, email, message, numberPhone } = data;

		console.log('First name: ', firstName);
		console.log('Last name: ', lastName);
		console.log('Email: ', email);
		console.log('Message: ', message);
		console.log('Téléphone: ', numberPhone);

		try {
			// Disable form while processing submission
			setDisabled(true);
			console.log(disabled)

			// Define template params
			const templateParams = {
				firstName,
				lastName,
				email,
				message
			};

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

				<label htmlFor="firstName"></label>
					<input type="text" id="firstName" name='firstName' placeholder='Prénom'
					{...register('firstName', {
						required: { value: true, message: 'Veuillez indiquer votre prénom' },
						maxLength: {
							value: 30,
							message: 'Veuillez saisir moins de 30 caractères.'
						}
					})}/>
				{errors.firstName && <span className='form__errorMsg'>{errors.firstName.message}</span>}

				<label htmlFor="lastName"></label>
					<input type="text" id="lastName" name='lastName' placeholder='Nom'
					{...register('lastName', {
						required: { value: true, message: 'Veuillez indiquer votre nom' },
						maxLength: {
							value: 30,
							message: 'Veuillez saisir moins de 30 caractères.'
						}
					})} />
				{errors.lastName && <span className='form__errorMsg'>{errors.lastName.message}</span>}

				<label htmlFor="email" id="email"></label>
					<input type="email" name='email' placeholder='Email'
					{...register('email', {
						required: true,
						pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
					})}

					/>
				{errors.email && (<span className='form__errorMsg'>Veuillez indiquer une adresse email valide</span>)}


				<label htmlFor="numberPhone"></label>
				<input type="text" id="numberPhone" name='numberPhone' placeholder='N° de téléphone'
					{...register('numberPhone', {
						required: { value: true, message: 'Saisissez votre numéro de téléphone' },
						maxLength: {
							value: 20,
							message: 'Veuillez rentrer un numéro de téléphone valide'
						},
						// pattern: /^[0-9]+$/
					})} />
					{errors.numberPhone && <span className='form__errorMsg'>{errors.numberPhone.message}</span>}



				<label htmlFor="message"></label>
					<textarea type="text" id="message" rows={5} placeholder='Message'
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

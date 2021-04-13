import React from 'react';
// import emailjs from 'emailjs-com';
// import { useForm } from 'react-hook-form';

export default function Contact() {
	// 	const [successMessage, setSuccessMessage] = useState('');
	// 	const { register, handleSubmit, errors } = useForm();

	// 	const serviceID = 'service_id';
	// 	const templateID = 'template_default';
	// 	const userID = 'user_YzQBSK3b0qdtzccL3lnIQ';

	// 	const onSubmit = (data, r) => {
	// 		sendEmail(
	// 			serviceID,
	// 			templateID,
	// 			{
	// 				name: data.name,
	// 				phone: data.phone,
	// 				email: data.email,
	// 				subject: data.subject,
	// 				description: data.description,
	// 			},
	// 			userID
	// 		)
	// 		r.target.reset();

	// 	}


	// const sendEmail = (serviceID, templateID, variables, userID) => {

	// 	emailjs
	// 		.send(serviceID, templateID, variables, userID)
	// 		.then(() => {
	// 			setSuccessMessage(
	// 				"Your message was successfully sent!  I'll contact you as soon as possible."
	// 			);
	// 		})
	// 		.catch(err => console.error(`Something went wrong ${err}`));
	// };

	return (
		<div id='contact' className='contacts'>
			<div className='text-center'>
				<h1>contact me</h1>
				<p>
					Fill out the form, briefly describe your project, and I will
					contact you as soon as possible.
				</p>
				{/* //<span className='success-message'>{successMessage}</span> */}
			</div>
			<div className='container'>
				<form name="contact"
					 >
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='First and last name'
									name='name'

								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>

							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Phone number'
									name='phone'

								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>

							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='email'
									placeholder='Email'
									name='email'

								/>
								<div className='line'></div>
							</div>
							<input type="hidden" name="form-name" value="contact" />
							<span className='error-message'>

							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Subject'
									name='subject'

								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>

							</span>
						</div>

						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<textarea
									className='form-control'
									type='text'
									placeholder='Brief Message'
									name='description'

								></textarea>
								<div className='line'></div>
							</div>
							<span className='error-message'>

							</span>
							<button
								className='btn-main-offer contact-btn'
								type='submit'
							>
								send message
							</button>
							
							
						</div>
					</div>
				</form>
				
		document.getElementById("root")
			</div>
		</div>
	);
}
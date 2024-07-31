import React, { useState } from 'react';

import { IconArrow } from '../assets/SvgIcons';

const initialFormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const validateForm = (data) => {
	const errors = {};
	if (!data.name) errors.name = 'This is a required field.';
	if (!data.email) errors.email = 'This is a required field.';
	if (!data.subject) errors.subject = 'This is a required field.';
	if (!data.message) errors.message = 'This is a required field.';
	return errors;
};

const ContactForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);

		if (Object.keys(newErrors).length) {
			setErrors(newErrors);
		} else {
			// Perform form submission actions here
			console.log('Form submitted:', formData);

			alert('Thank you!');
			setFormData(initialFormData);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='contact-form'>
			<div className='input-group'>
				<input
					type='text'
					name='name'
					placeholder={errors.name || 'Your Name'}
					value={formData.name}
					onChange={handleChange}
					className={errors.name ? 'input-error' : ''}
				/>
				<input
					type='email'
					name='email'
					placeholder={errors.email || 'Your Email'}
					value={formData.email}
					onChange={handleChange}
					className={errors.email ? 'input-error' : ''}
				/>
			</div>

			<div className='input-group'>
				<input
					type='text'
					name='subject'
					placeholder={errors.subject || 'Subject'}
					value={formData.subject}
					onChange={handleChange}
					className={errors.subject ? 'input-error' : ''}
				/>

				<input
					type='text'
					name='message'
					placeholder={errors.message || 'Your Message'}
					value={formData.message}
					onChange={handleChange}
					className={errors.message ? 'input-error' : ''}
				/>
			</div>

			<button type='submit' className='submit-button'>
				Send Message {IconArrow}
			</button>
		</form>
	);
};

export default ContactForm;

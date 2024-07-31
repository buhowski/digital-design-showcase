import React, { useState } from 'react';

export const Form = () => {
	// State hooks for managing form data, errors, focus states, submission state, positions, and token
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		position_id: '',
		photo: null,
	});

	const [focused, setFocused] = useState({
		// State for tracking focus state of form inputs
		name: false,
		email: false,
		phone: false,
		photo: false,
	});

	// Function to handle input field changes
	const handleChange = (event) => {
		const { name, value, type, files } = event.target;
		const updatedValue = type === 'file' ? files[0] : value;

		setFormData((prevData) => ({
			...prevData,
			[name]: updatedValue,
		}));
	};

	// Function to handle input focus
	const handleFocus = (event) => {
		const { name } = event.target;

		setFocused((prevFocused) => ({
			...prevFocused,
			// Update focus state to true for the specific input
			[name]: true,
		}));
	};

	// Function to handle input blur
	const handleBlur = (event) => {
		const { name } = event.target;

		setFocused((prevFocused) => ({
			...prevFocused,
			// Update focus state to false for the specific input
			[name]: false,
		}));
	};

	// Function to get class name for input label based on focus or input value
	const getLabelClassName = (fieldName) => {
		// Determine label class based on input focus or value
		return focused[fieldName] || formData[fieldName] ? 'focused' : '';
	};

	return (
		<>
			<form onSubmit={'handleSubmit'}>
				<div className='input input--text'>
					<label htmlFor='name' className={getLabelClassName('name')}>
						Your name
					</label>

					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						required
						aria-describedby='nameError'
					/>
				</div>
			</form>
		</>
	);
};

export default Form;

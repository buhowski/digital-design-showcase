import React from 'react';

import Form from '../Form';
import { Logo, IconFooterLines } from '../../assets/SvgIcons';

import './Footer.scss';

const FooterNavList = ({ items, title, socialItem, className }) => (
	<ul className={className}>
		<li className='ul-title'>{title}</li>

		{items.map((item, index) => (
			<li key={index}>
				<a href={item.link}>{item.label}</a>
			</li>
		))}
	</ul>
);

const Footer = () => {
	const navItemsService = [
		{ link: '#', label: 'Transportation' },
		{ link: '#', label: 'Structural' },
		{ link: '#', label: 'Public Works' },
		{ link: '#', label: 'Site Development' },
		{ link: '#', label: 'Construction Management' },
	];

	return (
		<footer className='footer' id='contact-us'>
			<div className='container'>
				<div className='footer-container'>
					<span className='footer__lines'>{IconFooterLines}</span>

					<a href='/' className='footer__logo'>
						{Logo}
					</a>

					<div className='footer-form'>
						<div className=''>
							<FooterNavList className='' items={navItemsService} title='Services' />
						</div>

						<div className=''>
							<Form />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

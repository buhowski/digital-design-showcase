import React from 'react';

import Form from '../Form';
import {
	Logo,
	IconFooterLines,
	IconFb,
	IconIg,
	IconYt,
	IconTwi,
	IconIn,
} from '../../assets/SvgIcons';

import { useMobileQuery } from '../../hooks/useMediaQuery';

import './Footer.scss';

// Reusable Footer Componets
const FooterNavList = ({ items, title, className }) => (
	<ul className={className}>
		<li className='ul-title'>{title}</li>

		{items.map((item, index) => (
			<li key={index}>
				<a href={item.link}>{item.label}</a>
			</li>
		))}
	</ul>
);

const FooterSocial = ({ items }) => (
	<ul className='footer-social__links'>
		{items.map((item, index) => (
			<li key={index}>
				<a href={item.url}>{item.icon}</a>
			</li>
		))}
	</ul>
);

const FooterAddress = ({ title, subtitle, address, suite, cityState, phone }) => {
	return (
		<div className=''>
			<h3 className='ul-title'>
				{title}

				<span>{subtitle}</span>
			</h3>

			<p>
				{address},<span>{suite}</span>
				{cityState}
			</p>

			<p className='address-phone'>P: {phone}</p>
		</div>
	);
};

const FooterList = ({ title, items, className }) => (
	<ul className={className}>
		<li className='ul-title'>{title}</li>

		{items.map((item, index) => (
			<li key={index}>
				<a href={item.link}>{item.label}</a>
			</li>
		))}
	</ul>
);

const FooterCopy = ({ mobile }) => (
	<div className='footer-copy'>
		<p>&copy;2024 OTHON, INC. All Rights Reserved.</p>

		{mobile && (
			<a href='##'>
				<span>Privacy Policy</span>
			</a>
		)}

		<a href='##'>
			<span>Terms and Conditions</span>
		</a>
	</div>
);

const Footer = () => {
	const isMobile = useMobileQuery();

	// Footer DATA
	const navItemsService = [
		{ link: '#', label: 'Transportation' },
		{ link: '#', label: 'Structural' },
		{ link: '#', label: 'Public Works' },
		{ link: '#', label: 'Site Development' },
		{ link: '#', label: 'Construction Management' },
	];

	const navItemsAbout = [
		{ link: '#', label: 'Awards' },
		{ link: '#', label: 'Certifications' },
		{ link: '#', label: 'OTHON International' },
	];

	const navItemsCompany = [
		{ link: '#', label: 'News' },
		{ link: '#', label: 'Careers' },
		{ link: '#', label: 'Contact' },
	];

	const socialData = [
		{ url: '#', icon: IconFb },
		{ url: '#', icon: IconIn },
		{ url: '#', icon: IconYt },
		{ url: '#', icon: IconIg },
		{ url: '#', icon: IconTwi },
	];

	const addressData = [
		{
			title: 'Houston',
			subtitle: '(Headquarters)',
			address: '575 N. Dairy Ashford Rd.',
			suite: 'Suite 650',
			cityState: 'Houston, TX 77079',
			phone: '713.975.8555',
		},
		{
			title: 'Dallas',
			address: '2140 Lake Park Blvd.,',
			suite: 'Suite 200',
			cityState: 'Richardson, TX 75080',
			phone: '214.340.7344',
		},
		{
			title: 'Austin',
			address: '9442 Capital of Texas Highway North',
			suite: 'Plaza 1, Suite 500',
			cityState: 'Austin, TX 78759',
			phone: '512.940.8602',
		},
	];

	const certificationsDBE = [
		{ link: '##', label: 'Texas' },
		{ link: '##', label: 'Florida' },
		{ link: '##', label: 'Georgia' },
		{ link: '##', label: 'New Mexico' },
		{ link: '##', label: 'California' },
		{ link: '##', label: 'Virginia' },
		{ link: '##', label: 'Colorado' },
	];

	const certificationsSBE = [{ link: '##', label: 'Texas' }];

	return (
		<footer className='footer' id='contact-us'>
			<div className='container'>
				<div className='footer-container'>
					<span className='footer__lines'>{IconFooterLines}</span>

					<div className='footer-logo'>
						<a href='/' className='footer__logo'>
							{Logo}
						</a>

						{isMobile && <FooterSocial items={socialData} />}
					</div>

					<div className='footer-row footer-row--top'>
						<nav className='footer-nav footer-block'>
							<FooterNavList
								className='service-list'
								items={navItemsService}
								title='Services'
							/>

							<FooterNavList
								className='about-list'
								items={navItemsAbout}
								title='About'
							/>

							<FooterNavList
								className='company-list'
								items={navItemsCompany}
								title='Company'
							/>
						</nav>

						<div className='footer-form footer-block'>
							<h2 className='h2'>Contact Us</h2>
							<Form />
						</div>
					</div>

					<div className='footer-row'>
						<div className='footer-block'>
							<div className='footer-address'>
								{addressData.map((data, index) => (
									<FooterAddress key={index} {...data} />
								))}
							</div>

							{!isMobile && <FooterCopy />}
						</div>

						<div className='footer-block footer-block--right'>
							<div className='footer-offices'>
								<div className='footer-international'>
									<h3 className='ul-title'>International Offices</h3>

									<p>
										<a href='##'>
											Sangineni Engineering and Technical Services (SEATS)
										</a>

										<span>Hyderabad, India</span>
									</p>

									<p>
										<a href='##'>Othon Enginero Consultares</a>

										<span>Santander, Spain</span>
									</p>
								</div>

								<div className='footer-cert'>
									<h3 className='ul-title'>Certifications</h3>

									<FooterList
										className='footer-list'
										title='DBE:'
										items={certificationsDBE}
									/>

									<FooterList
										title='SBE/MBE/HUB:'
										className='footer-list-sbe'
										items={certificationsSBE}
									/>
								</div>
							</div>

							<div className='footer-policy'>
								{!isMobile && (
									<p className='footer-policy__who'>
										<a href='https://dd.nyc/' target='_blank' rel='noreferrer noopener'>
											DD.NYC®
										</a>

										<span>Created with ♡ by</span>
									</p>
								)}

								<div className='footer-social'>
									{isMobile && <FooterCopy mobile={true} />}

									{!isMobile && (
										<>
											<a href='##'>
												<span>Privacy Policy</span>
											</a>

											<FooterSocial items={socialData} />
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

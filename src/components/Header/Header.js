import React from 'react';

import { Logo } from '../../assets/SvgIcons';
import { ScrollToSectionLink } from '../StructureElements';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='wrapper header-container'>
					<a href='/' className='logo'>
						{Logo}
					</a>

					<nav className='header-nav'>
						<ScrollToSectionLink href='#home' text='Home' />
						<ScrollToSectionLink href='#about' text='About' />
						<ScrollToSectionLink href='#services' text='Services' />
						<ScrollToSectionLink href='#careers' text='Careers' />
					</nav>

					<ScrollToSectionLink
						href='#contact-us'
						className={'main-btn'}
						text='Contact Us'
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;

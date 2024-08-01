import React, { useState, useEffect } from 'react';

import {
	Logo,
	CloseMenuIcon,
	MobileMenuIcon,
	MobMenuLines,
} from '../../assets/SvgIcons';
import { ScrollToSectionLink } from '../StructureElements';

import { useTabletQuery } from '../../hooks/useMediaQuery';

import './Header.scss';

const Header = () => {
	const isTablet = useTabletQuery();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		// Cleanup function to reset the overflow when the component unmounts
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<header className={`header ${isMenuOpen ? 'menuOpen' : ''}`}>
			<div className='container'>
				<div className='wrapper header-container'>
					<a href='/' className='header__logo'>
						{Logo}
					</a>

					{isTablet && (
						<>
							<span className='bg-menu'></span>

							<button
								type='button'
								className={`mob-btn NavIcon ${isMenuOpen ? 'menuOpen' : ''}`}
								onClick={toggleMenu}
							>
								{isMenuOpen ? CloseMenuIcon : MobileMenuIcon}

								{/* TODO animate menu btn */}
								{/* <span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span> */}
							</button>
						</>
					)}

					<nav className='header-nav'>
						<ScrollToSectionLink href='#home' text='Home' />
						<ScrollToSectionLink href='#about' text='About' />
						<ScrollToSectionLink href='#services' text='Services' disabled />
						<ScrollToSectionLink href='#careers' text='Careers' disabled />

						{isTablet && (
							<>
								<ScrollToSectionLink
									href='#contact-us'
									className={'main-btn'}
									text='Contact Us'
								/>

								<span className='mob-lines'>{MobMenuLines}</span>
							</>
						)}
					</nav>

					{!isTablet && (
						<ScrollToSectionLink
							href='#contact-us'
							className={'main-btn'}
							text='Contact Us'
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

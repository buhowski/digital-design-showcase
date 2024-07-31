import heroImg from '../../assets/media/hero.jpg';
import { IconHeroLines, IconArrowEx } from '../../assets/SvgIcons';
import img from '../../assets/media/1.jpg';

import './Hero.scss';

const cardsData = [
	{
		title: 'Highways & Roads',
	},
];

const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-section'>
					<div className='hero-section__img'>
						<img src={heroImg} alt='hero' />

						{IconHeroLines}
					</div>

					<div className='hero-section__title'>
						<h1 className='h1'>Integrity Innovation Dedication</h1>
					</div>
				</div>

				{/* Service Cards section */}
				<div className='wrapper'>
					<div className='service-cards'>
						{cardsData.map(({ title }, index) => (
							<a href='##' className='service-card' key={index}>
								<div className='service-card__title'>
									<h3 className='h3'>{title}</h3>
									{IconArrowEx}
								</div>

								<img src={img} alt='de' />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

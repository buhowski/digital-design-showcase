import heroImg from '../../assets/media/hero.jpg';
import mobheroImg from '../../assets/media/mob-hero.jpg';
import { IconHeroLines, IconArrowEx, IconHeroLinesMob } from '../../assets/SvgIcons';
import img from '../../assets/media/1.png';
import img2 from '../../assets/media/2.png';
import img3 from '../../assets/media/3.png';
import img4 from '../../assets/media/4.png';
import img5 from '../../assets/media/5.png';
import img6 from '../../assets/media/6.png';

import { useMobileQuery } from '../../hooks/useMediaQuery';

import './Hero.scss';

const cardsData = [
	{
		title: 'Highways & ',
		span: 'Roads',
		src: img,
	},
	{
		title: 'Transportation',
		span: 'Planning',
		src: img2,
	},
	{
		title: 'Design',
		span: 'Build Services',
		src: img3,
	},
	{
		title: 'Water',
		src: img4,
	},
	{
		title: 'Bridges',
		src: img5,
	},
	{
		title: 'Construction',
		span: 'Services',
		src: img6,
	},
];

const Hero = () => {
	const isMobile = useMobileQuery();

	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-section'>
					<div className='hero-section__img'>
						<picture>
							{/* Mobile variant */}
							<source
								srcSet={mobheroImg}
								media='(max-width: 767px)'
								type='image/jpeg'
							/>

							{/* Default variant */}
							<source srcSet={heroImg} media='(min-width: 768px)' type='image/jpeg' />

							{/* Fallback for browsers that don't support <picture> */}
							<img src={heroImg} alt='hero' />
						</picture>

						{isMobile ? IconHeroLinesMob : IconHeroLines}
					</div>

					<div className='hero-section__title'>
						<h1 className='h1'>Integrity Innovation Dedication</h1>
					</div>
				</div>

				{/* Service Cards section */}
				<div className='wrapper'>
					<div className='service-cards'>
						{cardsData.map(({ title, src, span }, index) => (
							<a href='##' className='service-card' key={index}>
								<div className='service-card__img'>
									<img src={src} alt='de' />
								</div>

								<div className='service-card__title'>
									<h3 className='h3'>
										{title} <span>{span}</span>
									</h3>
									{IconArrowEx}
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

import heroImg from '../../assets/media/hero.jpg';
import { IconHeroLines, IconArrowEx } from '../../assets/SvgIcons';
import img from '../../assets/media/1.jpg';
import img2 from '../../assets/media/2.jpg';
import img3 from '../../assets/media/3.jpg';
import img4 from '../../assets/media/4.jpg';
import img5 from '../../assets/media/5.jpg';
import img6 from '../../assets/media/6.jpg';

import './Hero.scss';

const cardsData = [
	{
		title: 'Highways & Roads',
		src: img,
	},
	{
		title: 'Transportation Planning',
		src: img2,
	},
	{
		title: 'Design Build Services',
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
		title: 'Construction Services',
		src: img6,
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
						{cardsData.map(({ title, src }, index) => (
							<a href='##' className='service-card' key={index}>
								<div className='service-card__title'>
									<h3 className='h3'>{title}</h3>
									{IconArrowEx}
								</div>

								<img src={src} alt='de' />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

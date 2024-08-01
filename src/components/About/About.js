import './About.scss';

const content = [
	{
		title: 'Mission:',
		text: 'Deliver service and execution excellence when providing high-quality engineering solutions. Apply innovative, reliable, and cost-effective solutions.',
	},
	{
		title: 'Vision:',
		text: 'Improve the quality of life in our communities, one project at a time. Develop strategic relationships with valued clients. Be a responsive and trusted partner of choice to our valued clients.',
	},
	{
		title: 'What We Do:',
		text: 'OTHON is a national DBE/MBE engineering firm providing professional civil engineering, construction management, and environmental services to governmental entities, private industry, and other engineering firms - regionally, nationally, and internationally.',
	},
];

const About = () => {
	return (
		<section className='about' id='about'>
			<div className='container'>
				<div className='wrapper'>
					<h2 className='title'>About</h2>

					<div className='about-content'>
						{content.map((section, index) => (
							<div key={index} className='about-item'>
								<div className={`about-item__content about-item__content-${index}`}>
									<h3 className='h2'>{section.title}</h3>
									<p className='text'>{section.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

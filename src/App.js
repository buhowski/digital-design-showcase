import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Video from './components/Video/Video';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<main className='page' id='home'>
			<Header />
			<Hero />
			<About />
			<Video />
			<Footer />
		</main>
	);
};

export default App;

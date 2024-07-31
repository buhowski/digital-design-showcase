import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Form from './components/Form';

const App = () => {
	return (
		<main className='page' id='home'>
			<Header />
			<Hero />

			<Form />
		</main>
	);
};

export default App;

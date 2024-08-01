import { useState, useEffect } from 'react';

const useMediaQuery = (query, dimension) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const checkMatches = () => {
			if (dimension === 'width') {
				setMatches(window.innerWidth <= parseInt(query));
			} else if (dimension === 'height') {
				setMatches(window.innerHeight <= parseInt(query));
			}
		};

		checkMatches();

		window.addEventListener('resize', checkMatches);

		return () => window.removeEventListener('resize', checkMatches);
	}, [query, dimension]);

	return matches;
};

const useTabletQuery = () => {
	return useMediaQuery('1280', 'width');
};

const useMobileQuery = () => {
	return useMediaQuery('850', 'width');
};

export { useTabletQuery, useMobileQuery };

// ### reusable structure components / HTML tags

export const ScrollToSectionLink = ({ href, className, text }) => {
	const handleClick = (e) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			window.scrollTo({
				top: target.offsetTop - 134,
				behavior: 'smooth',
			});
		}
	};

	return (
		<a href={href} className={className} onClick={handleClick}>
			{text}
		</a>
	);
};

// export const Paragraph = (className, text) => {
// 	return <p className={className}>{text}</p>;
// };

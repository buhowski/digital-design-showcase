// ### reusable structure components / HTML tags

export const ScrollToSectionLink = ({ href, className, text }) => {
	return (
		<a href={href} className={`${className}`}>
			{text}
		</a>
	);
};

// export const Paragraph = (className, text) => {
// 	return <p className={className}>{text}</p>;
// };

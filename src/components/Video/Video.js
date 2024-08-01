import React, { useRef, useState, useEffect } from 'react';
import videoSrc from '../../assets/media/test.mp4';
import videoPoster from '../../assets/media/about.jpg';
import {
	IconSoundOn,
	IconSoundOff,
	IconVideoLines,
	IconVideoLinesMob,
} from '../../assets/SvgIcons';

import { useMobileQuery } from '../../hooks/useMediaQuery';

import './Video.scss';

const Video = () => {
	const isMobile = useMobileQuery();

	const sectionRef = useRef(null);
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (videoRef.current) {
						videoRef.current.play();
					}
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		const currentSectionRef = sectionRef.current;

		if (currentSectionRef) {
			observer.observe(currentSectionRef);
		}

		return () => {
			if (currentSectionRef) {
				observer.unobserve(currentSectionRef);
			}
		};
	}, []);

	return (
		<section className='video-section' ref={sectionRef}>
			<div className='container'>
				<div className='wrapper'>
					<div className='video'>
						<video
							ref={videoRef}
							src={videoSrc}
							poster={videoPoster}
							// autoPlay
							loop
							muted
							playsInline
							className='video-player'
						></video>

						<span className='bg-svg'>
							{isMobile ? IconVideoLinesMob : IconVideoLines}
						</span>

						<button className='mute-button' onClick={toggleMute}>
							{isMuted ? IconSoundOff : IconSoundOn}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Video;

import React, { useRef, useState } from 'react';
import videoSrc from '../../assets/media/test.mp4';
import { IconSoundOn, IconSoundOff, IconVideoLines } from '../../assets/SvgIcons';
import './Video.scss';

const Video = () => {
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	return (
		<section className='video-section'>
			<div className='container'>
				<div className='wrapper'>
					<div className='video'>
						<video
							ref={videoRef}
							src={videoSrc}
							autoPlay
							loop
							muted
							playsInline
							className='video-player'
						></video>

						<span className='bg-svg'>{IconVideoLines}</span>

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

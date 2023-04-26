import React, { useEffect, useRef, useState } from 'react';

const MediaPlayer = () => {

    const [video, setVideo] = useState(true);
    const videoRef = useRef();

    const handleClick = () => {
        const _video = videoRef.current;
        video ? _video.play() : _video.pause();
        setVideo(!video);
    }

    useEffect(() => {

        const handleScroll = () => {

            const _video = videoRef.current;
            const { y } = _video.getBoundingClientRect();

            y <= 250 ? _video.play() : _video.pause();
            y <= 250 ? setVideo(false) : setVideo(true);
            
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };

    }, []);

    return (
        <div>
            <h1 className="text-white">3_MediaPlayer</h1>
            <video width="400" ref={videoRef} onClick={handleClick}>
                <source src='videos/Planeta.mp4' type='video/mp4'/>
            </video>

            <button onClick={handleClick} className= {`rounded-full p-2 m-2 w-[75px] text-black ${video ? 'bg-[rgba(13,204,115,0.6)]' : 'bg-[rgba(204,58,13,0.6)]'}`}>
                {video ? "Play" : "Pause"}
            </button>
        </div>
    );
}

export default MediaPlayer;

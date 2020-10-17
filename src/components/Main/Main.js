import React from 'react';
import './main.css';

const video = {
    'Falcon 1': './video/earth.mp4',
    'Falcon 9': './video/mars.mp4',
    'Falcon Heavy': './video/moon.mp4',
    others: './video/space.mp4',
}

const Main = ({title, videoExists}) => {
    return(
        <section className="main">
            <h1 className="title">
                {title}
            </h1>
            <div className="video-container">
                {videoExists ? 
                    <video 
                    className="video" 
                    autoPlay 
                    loop 
                    muted 
                    src={video.hasOwnProperty(title) ? video[title] : video.others}
                    ></video>
                : ''}
            </div>
        </section>
    )
}
export default Main;
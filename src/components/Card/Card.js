import React from 'react';
import './Card.css';

function Card({ video }) {
    return (
        <div className='video_card'>
            <video className='video_card-video' src={video.video} controls />
            <p className='video_card-tags'>{video.tags.map((element) => `#${element}  `)}</p>
        </div>
    )
}

export default Card;
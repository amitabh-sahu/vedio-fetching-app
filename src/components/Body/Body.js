import React from 'react';
import { search } from '../../assets';
import { Card } from '../';
import './Body.css';

function Body({ videos, keyword }) {
    return (
        <>
            {videos.length > 0 ? (
                <>
                    {keyword !== '' && <h2 className='search_keyword'>Search results found for "{keyword}"</h2>}
                    <div className='videos_container'>
                        {videos.map((video) => (
                            <Card key={video.heading} video={video} />
                        ))}
                    </div>
                </>
            ) : (
                <div className='empty'>
                    <img src={search} alt='searh bar' className='search_img' />
                    <p className='empty_instruction'>Enter what's on your mind in search to watch videos.</p>
                </div>
            )}
        </>
    )
}

export default Body;
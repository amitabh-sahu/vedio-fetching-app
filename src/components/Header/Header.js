import React from 'react';
import { logo, user } from '../../assets';
import './Header.css';

function Header({ setVideos, setKeyword }) {
    const handleChange = (target) => {
        setKeyword(target.value);
        if (target.value === '') {
            setVideos([]);
        }
        else {
            fetch(`${process.env.REACT_APP_FETCH_URL}?q=${target.value}&numResults=6`)
                .then(response => response.json())
                .then(data => setVideos(data.results))
                .catch((error) => console.log(error));
        }
    };

    return (
        <header className='app_header'>
            <img src={logo} alt='app logo' className='header_logo' />
            <div className='header_search'>
                <input className="input_field" id='search_input' type="text" placeholder='Search' onChange={(e) => handleChange(e.target)} />
                <button
                    className="clear_input_field"
                    onClick={() => {
                        const target = document.getElementById('search_input');
                        target.value = '';
                        handleChange(target)
                    }}
                >
                    &#9587;
                </button>
            </div>
            <img src={user} alt='user' className='header_user' />
        </header>
    )
}

export default Header;
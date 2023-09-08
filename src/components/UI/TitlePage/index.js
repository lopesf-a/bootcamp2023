import React from 'react';
import './style.css';

const TitlePage = ( {subtitle, title}) => {
    return (
        <div className='title__page'>
            {/* double __ car : BEM (Block Element Notifier) */}
            <h1> {title} </h1>
            <p>  {subtitle } </p>
        </div>
    );
}

export default TitlePage;

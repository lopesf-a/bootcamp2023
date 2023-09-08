import React from 'react';

const Index = ( {title, color, handleClick }) => {
    return (
                <button className={color} onClick={handleClick}> {title} </button>        
    );
}

export default Index;

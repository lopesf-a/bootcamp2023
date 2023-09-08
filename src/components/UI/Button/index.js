import React from 'react';
import './style.css';

const Index = ( {identification}) => {
    return (
        <div>
            <div className='btn btn__green'> 
                <button> {identification} </button>
            </div>
        </div>
    );
}

export default Index;

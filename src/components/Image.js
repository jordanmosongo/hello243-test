import React from 'react';

const Image = ({id ,alt}) => {
    return (
        <div className = "home__robots-container__element__image">
            <img src ={`https://robohash.org/${id}`} alt = {alt} />
        </div>
    );
}

export default Image;

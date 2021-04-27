import React from 'react';

const Lien = ({email}) => {
    return (
        <div className = "home__robots-container__element__lien">
            <a href = {email}>{email}</a>
        </div>
    );
}

export default Lien;

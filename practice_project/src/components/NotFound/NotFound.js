    import React from 'react';
    import './NotFound.css';

    const notFound = (props) => {
        const text = "404 COULDN'T FIND YOUR PAGE!!!";
        return ( 
            <p className="notFound">
                {text}
            </p>
         );
    }
     
    export default notFound;
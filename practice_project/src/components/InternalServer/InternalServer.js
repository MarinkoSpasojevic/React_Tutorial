import React from 'react';
import './InternalServer.css';

const internalServer = (props) => {
    const text = '500 Server Error. Please contact administrator!!!!'
    return ( 
        <p className='internalServer'>
            {text}
        </p>
     );
}
 
export default internalServer;
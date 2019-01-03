import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Home.css';

const home = (props) => {
    const text = "WELCOME TO ACCOUNT-OWNER APPLICATION";
    return ( 
        <Row>
            <Col md={12}>
                <div className='homeText'>
                    {text}
                </div>
            </Col>
        </Row>
     );
}
 
export default home;
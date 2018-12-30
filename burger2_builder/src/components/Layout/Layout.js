import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Sidedrawer, backdrop</div>
            <main className='layout_content'>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout

import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <Aux>
            <SideDrawer />
            <Toolbar />
            <main className='layout_content'>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout

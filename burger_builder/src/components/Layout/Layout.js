import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliaru';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClose = () => {
        this.setState({showSideDrawer: false})
    }

    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render(){
        return (
            <Aux>
                <Toolbar toogle={this.toggleSideDrawer} />
                <SideDrawer open={this.state.showSideDrawer} 
                        closed={this.sideDrawerClose}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }  
};

export default Layout;
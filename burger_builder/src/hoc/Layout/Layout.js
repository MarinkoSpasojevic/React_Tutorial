import React, {Component} from 'react';
import Aux from '../Auxiliaru/Auxiliaru';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
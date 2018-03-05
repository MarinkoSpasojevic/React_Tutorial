import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
//import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, Switch} from 'react-router-dom'; 
import Navigation from '../../components/Navigation/Navigation';
import FullPosts from '../Blog/FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <Navigation />
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact component={AsyncNewPost} />
                    <Route path="/full-post/:id" exact component={FullPosts} />
                    {/* <Redirect to="/404"/> */}
                    <Route path="*" render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
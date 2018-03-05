import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: {}
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            //if (this.isLoadedPostEmpty() || this.isLoadedPostUpdatedWithDifferentId()) { this was needed while loading full post on the same page as home
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    })
            //}
        }
    }

    isLoadedPostEmpty = () => {
        return this.state.loadedPost;
    }

    isLoadedPostUpdatedWithDifferentId = () => {
        return this.state.loadedPost && (this.state.loadedPost.id !== this.props.match.params.id)
    }

    deleteHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
        .then(response => {
            console.log(response);
        })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;
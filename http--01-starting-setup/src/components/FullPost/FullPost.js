import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: {}
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.isLoadedPostEmpty() || this.isLoadedPostUpdatedWithDifferentId()) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    })
            }
        }
    }

    isLoadedPostEmpty = () => {
        return this.state.loadedPost;
    }

    isLoadedPostUpdatedWithDifferentId = () => {
        return this.state.loadedPost && (this.state.loadedPost.id !== this.props.id)
    }

    deleteHandler = () => {
        axios.delete('/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
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
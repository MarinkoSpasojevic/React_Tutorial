import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                let posts = response.data.slice(0, 4);
                let updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })

                this.setState({ posts: updatePosts });
            })
            .catch(error => {
                console.log(error);
            });
    }

    postSelected = (id) => {
        this.props.history.push('/full-post/' + id)
    }

    render() {

        let posts = null;
        if (this.state.error) {
            posts = <p style={{ color: 'red' }}>Something went wrong, there are no posts in here!!!</p>
        }
        else {
            posts = this.state.posts.map(post => {
                return (
                    <Post title={post.title} key={post.id} author={post.author} clicked={this.postSelected.bind(this, post.id)} />
                )
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;
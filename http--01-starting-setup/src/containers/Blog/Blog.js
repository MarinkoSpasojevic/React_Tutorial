import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
                this.setState({ error: true });
            });
    }

    postSelected = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = null;
        if (this.state.error) {
            posts = <p style={{color: 'red'}}>Something went wrong, there are no posts in here!!!</p>
        }
        else {
            posts = this.state.posts.map(post => {
                return <Post title={post.title} key={post.id} author={post.author} clicked={this.postSelected.bind(this, post.id)} />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
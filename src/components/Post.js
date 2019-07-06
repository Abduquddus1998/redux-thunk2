import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from  'prop-types';
import fetchPosts from '../actions/postAction'

class Post extends Component {
  componentWillMount() {
    this.props.fetchPosts();

}

componentWillReceiveProps(nextProps) {

    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }

}

  render() {
    const  postItem = this.props.posts.map(post =>(
       <div key={post.id}>
         <h3>{post.title}</h3>
         <p>{post.body}</p>
       </div>
    ));
    return (
       <div>
         <h2>Posts</h2>
         {postItem}
       </div>
    );
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object

}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})


export default connect(mapStateToProps,{fetchPosts})(Post);
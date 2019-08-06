import React, { Component } from "react";
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Post extends Component {

 componentWillMount(){
   this.props.fetchPosts();
 }
componentWillReceiveProps(nextProps){
  if (nextProps.newPost){
    this.props.posts.unshift(nextProps.newPost);
    //unshift funciona como push pero en lugar de ponerlo al final lo pone al principio.
  }
}

  render() {
    const  {posts}=this.props;
 
    return (
      <div>
         { posts.map(post => {
           return(
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>)
          })
        }
      </div>
    );
  }
}
Post.proptypes={
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
  newPost:Proptypes.object

}

const mapStateToProps=state=>({
  posts:state.posts.items,
  newPost:state.posts.item
})
//post porque así lo llamé en mi reducer index
export default connect(mapStateToProps, { fetchPosts})(Post);


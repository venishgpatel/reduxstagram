import React from 'react';
import Photo from './photo';
import Comments from './comments';

class Single extends React.Component {
  render() {
    const postId = this.props.postId.slice(6);
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    
    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} postId={postId} />
      </div>
    )
  }
}

export default Single;
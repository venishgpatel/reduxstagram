import React from 'react';

class Comments extends React.Component {
  constructor() {
    super();
    this.renderComments = this.renderComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComments(comment, i) {
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return(
      <div className="comment">
        {this.props.postComments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;
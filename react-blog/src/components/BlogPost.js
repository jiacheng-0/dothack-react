import React from 'react';

class BlogPost extends React.Component {
  render() {
    return (
      <div className="post">
        <span className="heading">{this.props.title}</span>
        <div className="body">
          <p>
            {this.props.body}
          </p>
        </div>
      </div>
    )
  }
}

export default BlogPost;
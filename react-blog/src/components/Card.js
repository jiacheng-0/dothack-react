import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        <h4>{this.props.title}</h4>
        <div>
          {this.props.body}
        </div>
      </div>
    )
  }
}

export default Card;
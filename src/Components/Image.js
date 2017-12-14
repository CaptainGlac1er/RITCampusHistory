import React, { Component } from 'react';

class Image extends Component {
  constructor(props){
    super(props);
    this.state = {
        src: props.source,
    };
  }

  render() {
    return (
      <div className="Image">
        <strong>{this.props.source}</strong>
      </div>
    );
  }
}

export default Image;
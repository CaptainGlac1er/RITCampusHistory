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
        <img id="currentImage" src={this.props.source} alt="current year campus map"/>
      </div>
    );
  }
}

export default Image;
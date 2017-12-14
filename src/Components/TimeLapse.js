import React, { Component } from 'react';
import Image from './Image';
import '../Styles/TimeLapse.css';
const images =[
        "test",
        "test1",
        "test2",
];
class TimeLapse extends Component {
    
  constructor(props){
    super(props);
    this.state = {
        src: props.source,
        currentImage: images[0],
        index: 0,
    };
  }
  NextImage(e){
    e.stopPropagation();
    //console.log(this.state.index);
      if(this.state.index < images.length - 1){
        this.setState({index: (this.state.index + 1)},this.IndexUpdate.bind(this));
      }else{
        this.setState({index: 0},this.IndexUpdate.bind(this));
      }
  }
  PrevImage(e){
    e.stopPropagation();
    //console.log(this.state.index);
      if(this.state.index > 0){
        this.setState({index: (this.state.index - 1)},this.IndexUpdate.bind(this));
      }else{
        this.setState({index: images.length - 1},this.IndexUpdate.bind(this));
      }
  }
  IndexUpdate(){
    this.setState({currentImage: images[this.state.index]});

  }

  render() {
    return (
      <div className="TimeLapse">
        <div className="TimeLapse-controls">
          <button id="btnNextImage" onClick={this.NextImage.bind(this)} ref={(ref) =>{this.btnNextImage = ref}}>Next Image</button>
          <button id="btnPrevImage" onClick={this.PrevImage.bind(this)} ref={(ref) =>{this.btnPrevImage = ref}} >Prev Image</button>
        </div>
        <div className="TimeLapse-image">
          <Image source={this.state.currentImage}/>

        </div>
      </div>
    );
  }
}

export default TimeLapse;
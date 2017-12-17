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
        data: props.data,
        src: props.source,
        currentImage: images[0],
        index: 0,
    };
  }
  NextImage(e){
    e.stopPropagation();
    //console.log(this.state.index);
      if(this.state.index < this.state.data.length - 1){
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
        this.setState({index: this.state.data.length - 1},this.IndexUpdate.bind(this));
      }
  }
  IndexUpdate(){
    this.setState({currentImage: images[this.state.index]});

  }

  render() {
    var currentData = this.state.data[this.state.index];
    return (
      <div className="TimeLapse">
        <div className="TimeLapse-image">
          <Image source={currentData.image}/>
          <div className="TimeLapse-image-controls">
            <button id="btnNextImage" onClick={this.NextImage.bind(this)} ref={(ref) =>{this.btnNextImage = ref}}>Next Image</button>
            <button id="btnPrevImage" onClick={this.PrevImage.bind(this)} ref={(ref) =>{this.btnPrevImage = ref}} >Prev Image</button>
            <h3 id="title" >{currentData.title}</h3>
          </div>
        </div>
        <div className="TimeLapse-text">
          <p>

          {currentData.info}

          </p>
        </div>
      </div>
    );
  }
}

export default TimeLapse;
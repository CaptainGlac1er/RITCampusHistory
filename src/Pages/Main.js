import React, { Component } from "react";
import TimeLapse from '../Components/TimeLapse';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            'images': props.images,
            'currentPos': 0,
        }
    }

    render() {
        return (
            <div className="App-content">
                <h2>Timelapse of the current building at RIT</h2>
                <TimeLapse id="TimeLapse" data={this.state.images}/>
            </div>
        );
    }
}
export default Main;
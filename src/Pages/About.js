import React, { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="App-content">
                <h2>Author</h2>
                <h4>George Walter Colgrove IV</h4>
                <h2>Code</h2>
                <h4><a href="https://github.com/CaptainGlac1er/RITCampusHistory">https://github.com/CaptainGlac1er/RITCampusHistory</a></h4>
            </div>
        );
    }
}
export default About;
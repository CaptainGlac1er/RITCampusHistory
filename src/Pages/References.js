import React, { Component } from "react";
import {Link} from 'react-router-dom';

class References extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="App-content">
                <ul>
                    <li><Link to={'https://digitalarchive.rit.edu/xmlui/'}>RIT Digital Archives</Link></li>
                    <li><Link to={'http://library.rit.edu/depts/archives/the-rit-museum'}>RIT Archives</Link></li>
                    <li>Joseph Pietruch</li>
                </ul>
            </div>
        );
    }
}
export default References;
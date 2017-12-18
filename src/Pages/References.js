import React, { Component } from "react";

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
                    <li><a href='https://digitalarchive.rit.edu/xmlui/'>RIT Digital Archives</a></li>
                    <li><a href='http://library.rit.edu/depts/archives/the-rit-museum'>RIT Archives</a></li>
                    <li><a href="https://reporter.rit.edu/">RIT Reporter</a></li>
                    <li><a href="http://www.rit.edu/lookup/display.php?uid=jryfms&key=23ceaed8ab2f02ecb50506468fb70a888e4e2f95">James Yarrington</a></li>
                </ul>
            </div>
        );
    }
}
export default References;
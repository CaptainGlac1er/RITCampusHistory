import React, {Component} from 'react';
import '../Styles/Images.css';


class Images extends Component{
    ritImages = [
        require('../Images/Image1.jpg'),
        require('../Images/Image2.jpg'),
        require('../Images/Image3.jpg'),
        require('../Images/Image4.jpg')
    ];
    render() {
        console.log(this.ritImages);
        var images = this.ritImages.map((value) => {
            return (
                <div key={value}>
                    <img src={value} alt="RIT achive"/>
                </div>
            );
        });
        return (
            <div className="App-content">
                <h2>Images</h2>
                <div className="Images-content">
                {images}
                </div>
            </div>
        );
    }
}
export default Images;
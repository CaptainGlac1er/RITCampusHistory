import React, { Component } from 'react';
import {Link }  from 'react-router-dom';
import '../Styles/NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <Link to={'/'}>Home</Link>
        <Link to={'/References'}>References</Link> 
        <Link to={'/Images'}>Images</Link>
      </div>
    );
  }
  GoToPage(link){
  }
}

export default NavBar;
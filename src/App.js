import React, { Component } from 'react';
import TimeLapse from './Components/TimeLapse';
import logo from './rit_logo.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      images:[
          {
            'image': require(`${'./Images/66.png'}`),
            'title':'1966',
            'info': 'The beginning of the RIT henrietta campus',
          },
          {
            'image': require(`${'./Images/67.png'}`),
            'title':'1967',
            'info': 'Main buildings have been built',
          },
          {
            'image': require(`${'./Images/68.png'}`),
            'title':'1968',
            'info': '',
          },
          {
            'image': require(`${'./Images/69.png'}`),
            'title':'1969',
            'info': '',
          },
          {
            'image': require(`${'./Images/70.png'}`),
            'title':'1970',
            'info': '',
          },
          {
            'image': require(`${'./Images/77.png'}`),
            'title':'1977',
            'info': '',
          },
          {
            'image': require(`${'./Images/79.png'}`),
            'title':'1979',
            'info': '',
          },
          {
            'image': require(`${'./Images/85.png'}`),
            'title':'1985',
            'info': '',
          },
          {
            'image': require(`${'./Images/88.png'}`),
            'title':'1988',
            'info': '',
          },
          {
            'image': require(`${'./Images/89.png'}`),
            'title':'1989',
            'info': '',
          },
          {
            'image': require(`${'./Images/91.png'}`),
            'title':'1991',
            'info': '',
          },
          {
            'image': require(`${'./Images/92.png'}`),
            'title':'1992',
            'info': '',
          },
          {
            'image': require(`${'./Images/96.png'}`),
            'title':'1996',
            'info': '',
          },
          {
            'image': require(`${'./Images/99.png'}`),
            'title':'1999',
            'info': '',
          },
          {
            'image': require(`${'./Images/00.png'}`),
            'title':'2000',
            'info': '',
          },
          {
            'image': require(`${'./Images/01.png'}`),
            'title':'2001',
            'info': '',
          },
          {
            'image': require(`${'./Images/02.png'}`),
            'title':'2002',
            'info': '',
          },
          {
            'image': require(`${'./Images/03.png'}`),
            'title':'2003',
            'info': '',
          },
          {
            'image': require(`${'./Images/04.png'}`),
            'title':'2004',
            'info': '',
          },
          {
            'image': require(`${'./Images/06.png'}`),
            'title':'2006',
            'info': '',
          },
          {
            'image': require(`${'./Images/08.png'}`),
            'title':'2008',
            'info': '',
          },
          {
            'image': require(`${'./Images/09.png'}`),
            'title':'2009',
            'info': '',
          },
          {
            'image': require(`${'./Images/10.png'}`),
            'title':'2010',
            'info': '',
          },
          {
            'image': require(`${'./Images/13.png'}`),
            'title':'2013',
            'info': '',
          },
          {
            'image': require(`${'./Images/14.png'}`),
            'title':'2014',
            'info': '',
          },
          {
            'image': require(`${'./Images/16.png'}`),
            'title':'2016',
            'info': '',
          },
        ],
      currentPos: 0,
    };
    //newInfo.push();

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RIT Campus History</h1>
        </header>
        <div className="App-content">
          <TimeLapse id="TimeLapse" data={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;

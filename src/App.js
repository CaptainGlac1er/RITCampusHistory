import React, { Component } from 'react';
import logo from './rit_logo.png';
import './App.css';
import Main from './Pages/Main';
import References from './Pages/References';
import Images from './Pages/Images';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      images:[
          {
            'image': require(`${'./Images/66.png'}`),
            'title':'1966',
            'info': 'The beginning of the RIT henrietta campus',
            'buildings': ['FMS Building'],
          },
          {
            'image': require(`${'./Images/67.png'}`),
            'title':'1967',
            'info': 'Main buildings have been built, students had split classes between each campus',
            'buildings': [
                'College of Liberal Arts',
                'College of Science',
                'College-Alumni Union',
                'Eugene Colby Hall',
                'Frank E. Gannet Hall',
                'Frank Ritter Memorial Ice Arena',
                'George Eastman Hall',
                'George H. Clark Memorial Gym',
                'Helen Fish Hall',
                'James E. Booth Building',
                'James E. Gleason Building',
                'Kate Gleason Hall',
                'Nathaniel Rochester Hall',
            ],
          },
          {
            'image': require(`${'./Images/68.png'}`),
            'title':'1968',
            'info': 'RIT students were moved over to the new campus',
            'buildings': [
              'Perkins Apartments',
              'Colony Manor',
              'Grace Watson',
              'Red Barn',
              'Wallace Library',
            ],
          },
          {
            'image': require(`${'./Images/69.png'}`),
            'title':'1969',
            'info': 'More apartments are completed for incoming students',
            'buildings': [
              'Carlton Gibson Hall',
              'Sol Heumann Hall'
            ],
          },
          {
            'image': require(`${'./Images/70.png'}`),
            'title':'1970',
            'info': 'Temporary apartments were added to handle more students',
            'buildings': [
              'Riverknoll Apartments',
              'Peter Peterson Hall',
              'Mark Ellingson Hall',
              'Lyndon Baines Johnson Hall',
            ],
          },
          {
            'image': require(`${'./Images/77.png'}`),
            'title':'1977',
            'info': '',
            'buildings': [
              'Max Lowenthal Memorial'
            ],
          },
          {
            'image': require(`${'./Images/79.png'}`),
            'title':'1979',
            'info': '',
            'buildings': [
              'Lewis P. Ross Hall',
            ],
          },
          {
            'image': require(`${'./Images/85.png'}`),
            'title':'1985',
            'info': '',
            'buildings': [
              'Engineering Hall',
            ],
          },
          {
            'image': require(`${'./Images/88.png'}`),
            'title':'1988',
            'info': '',
            'buildings': [
              'Bausch & Lomb Center',
            ],
          },
          {
            'image': require(`${'./Images/89.png'}`),
            'title':'1989',
            'info': '',
            'buildings': [
              'Chester F. Carlson Center for Imaging Science',
            ],
          },
          {
            'image': require(`${'./Images/91.png'}`),
            'title':'1991',
            'info': '',
            'buildings': [
              'Hugh Carey',
              'Wallace Library Addition',
            ],
          },
          {
            'image': require(`${'./Images/92.png'}`),
            'title':'1992',
            'info': '',
            'buildings': [
              '6 Fraternity Houses',
              'Hale-Andrews Student Life Center',
            ],
          },
          {
            'image': require(`${'./Images/96.png'}`),
            'title':'1996',
            'info': '',
            'buildings': [
              'Louise Slaughter Hall'
            ],
          },
          {
            'image': require(`${'./Images/99.png'}`),
            'title':'1999',
            'info': '',
            'buildings': [
              'Original Golisano building',
              'Nathaniel Rochester Hall Addition',
            ],
          },
          {
            'image': require(`${'./Images/00.png'}`),
            'title':'2000',
            'info': 'The first of the fully furnished apartment buildings were built',
            'buildings': [
              'Crossroads',
              'University Commons I',
            ],
          },
          {
            'image': require(`${'./Images/01.png'}`),
            'title':'2001',
            'info': '',
            'buildings': [
              'University Commons II',
              'University Commons III',
              'Bates Study Center',
            ],
          },
          {
            'image': require(`${'./Images/02.png'}`),
            'title':'2002',
            'info': '',
            'buildings': [
              'Orange Hall',
              'Brown Hall',
              'University Commons IV',
            ],
          },
          {
            'image': require(`${'./Images/03.png'}`),
            'title':'2003',
            'info': '',
            'buildings': [
              'Golisano Addition'
            ],
          },
          {
            'image': require(`${'./Images/04.png'}`),
            'title':'2004',
            'info': '',
            'buildings': [
              'Gordon Field House'
            ],
          },
          {
            'image': require(`${'./Images/06.png'}`),
            'title':'2006',
            'info': '',
            'buildings': [
              'Center for Bioscience Education & Technology'
            ],
          },
          {
            'image': require(`${'./Images/08.png'}`),
            'title':'2008',
            'info': '',
            'buildings': [
              'Engineering Technology Hall',
              'TMO III',
            ],
          },
          {
            'image': require(`${'./Images/09.png'}`),
            'title':'2009',
            'info': '',
            'buildings': [
              'University Services Center',
              'Center for Student Innovation',
            ],
          },
          {
            'image': require(`${'./Images/10.png'}`),
            'title':'2010',
            'info': 'The start of the Global Village project that replaced some of the degrading riverknoll apartments with newer apartments',
            'buildings': [
              'Global Village',
              'Global Way Building 1',
              'Global Way Building 2',
            ],
          },
          {
            'image': require(`${'./Images/13.png'}`),
            'title':'2013',
            'info': '3 new buildings that follow LEED certification',
            'buildings': [
              'Rosica Hall',
              'Institute Hall',
              'Sustainability Institute Hall',
            ],
          },
          {
            'image': require(`${'./Images/14.png'}`),
            'title':'2014',
            'info': 'RIT constructs new ice rink',
            'buildings': [
              'Polisseni Ice Arena',
            ],
          },
          {
            'image': require(`${'./Images/16.png'}`),
            'title':'2016',
            'info': '',
            'buildings': [
              'TMO IV',
            ],
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
        <NavBar/>
        <Switch>
          <Route exact path='/' component={() => <Main images={this.state.images}/> }/>
          <Route exact path='/References' component={References} />
          <Route exact path='/Images' component={Images} />
          <Route exact path='/About' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;

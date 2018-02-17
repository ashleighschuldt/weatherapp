import React, { Component } from 'react';
import './App.css';
import City from './Components/City'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
        <p className='title1'>{"<DevWeather />"}</p>
        </header>
        <div>
          <City />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './components/Home.js';
import TodaysForecast from './components/TodaysForecast.js'
import HourlyForecast from './components/HourlyForecast.js'
import About from './components/About.js';

class App extends Component {
  
  state = {
    current_temperature: undefined
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Reactive Weather</h1>
          <ul className="header">
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="/TodaysForecast">Today's Forecast</NavLink></li>
            <li><NavLink to ="/HourlyForecast">Hourly Forecast</NavLink></li>
            <li><NavLink to ="/About">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/TodaysForecast" component={TodaysForecast}/>
            <Route path="/HourlyForecast" component={HourlyForecast}/>
            <Route path="/About" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;


import React, { Component } from 'react';

class ForecastCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        time: null,
        temperature: null,
        feelsLike: null,
        cloudPercent: null,
        uvIndex: null,
        visibility: null,
        windSpeed: null,
        weather: {
          weatherType: null,
          weatherDescription: null
        }
     };
  }

  render() {
    return (
      <div>
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">Time: {this.props.state.time}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Temperature: {this.props.state.temperature}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Feels like: {this.props.state.feelsLike}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Weather: {this.props.state.weather.weatherType}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Weather description: {this.props.state.weather.weatherDescription}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Cloud percent: {this.props.state.cloudPercent}</h6>
              <h6 class="card-subtitle mb-2 text-muted">UV Index: {this.props.state.uvIndex}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Wind Speed: {this.props.state.windSpeed}</h6>
              <p class="card-text"></p>
            </div>
        </div>
      </div>
    );
  }
}

export default ForecastCard;
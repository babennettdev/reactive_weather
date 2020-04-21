import React, { Component } from 'react';
import LatLong from './LatLong.js';
import ForecastCard from './ForecastCard.js'; 
import WeatherState from './WeatherState.js';
import HandleOpenWeatherMap from './HandleOpenWeatherMap.js';
import UnixTimestampToDate from './UnixTimestampToDate.js';

class TodaysForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            weatherState: WeatherState
        };
      
    }
    
    setFromAPI = async (response) =>{
        this.setState({ 
            weatherState: {
                time: UnixTimestampToDate(response.current.dt),
                temperature: response.current.temp,
                feelsLike: response.current.feels_like,
                cloudPercent: response.current.clouds,
                uvIndex: response.current.uvi,
                visibility: response.current.visibility,
                windSpeed: response.current.wind_speed,
                weatherType: response.current.weather[0].main,
                weatherDescription: response.current.weather[0].description
            }
        });
    }

    setLatLong = async (lat, long) => {
        await this.setState({latitude: lat});
        await this.setState({longitude: long});
        const response = await HandleOpenWeatherMap(this.state.latitude, this.state.longitude)
        this.setFromAPI(response);
        
    }

    render() {
    return (
      <div>
        <h1>Today's Forecast</h1>
        <p>Set your latitude and longitude below, 
            then update your current weather. 
        </p>
        <div>
            <LatLong publish={this.setLatLong}/>
            <p></p>

        </div>
        <div>
            <ForecastCard state={this.state.weatherState} />
        </div>
      </div>
      
    );
  }
}
export default TodaysForecast;
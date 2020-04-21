import React, { Component } from 'react';
import LatLong from './LatLong.js';
import ForecastCard from './ForecastCard.js'; 

class TodaysForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            weatherState: {
                time: null,
                temperature: null,
                feelsLike: null,
                cloudPercent: null,
                uvIndex: null,
                windSpeed: null,
                weather: {
                weatherType: null,
                weatherDescription: null
                }
            }
        };
      
    }
    getWeather = async (e) => {
        const APIKey = process.env.REACT_APP_API_KEY;
    
        const latitude = this.state.latitude;
        const longitude = this.state.longitude;
        //console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}`);
        e.preventDefault();   
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}`);
        const response = await api_call.json();
        console.log(response);
        this.setState({
            weatherState: {
                time: response.current.dt,
                temperature: response.current.temp,
                feelsLike: response.current.feels_like,
                cloudPercent: response.current.clouds,
                uvIndex: response.current.uvi,
                visibility: response.current.visibility,
                windSpeed: response.current.wind_speed,
                weather: {
                weatherType: response.current.weather[0].main,
                weatherDescription: response.current.weather[0].description
                }
            }
        })
    }

    setLatLong = (lat, long) => {
        this.setState({latitude: lat});
        this.setState({longitude: long});

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
            <button value="Send" onClick={ this.getWeather }>Update Weather</button>
            <ForecastCard state={this.state.weatherState} />
        </div>
      </div>
      
    );
  }
}

export default TodaysForecast;
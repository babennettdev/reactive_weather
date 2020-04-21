import React, { Component } from 'react';
import LatLong from './LatLong.js';
import ForecastCard from './ForecastCard.js';

class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            weatherState0 : {
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
            },
            weatherState1 : {
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
            },
            weatherState2 : {
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
            },
            weatherState3 : {
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
            },
            weatherState4 : {
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
            },
            weatherState5 : {
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
            },
            weatherState6 : {
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
            },
            weatherState7 : {
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
            },
            weatherState8 : {
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
            },
            weatherState9 : {
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
            },
            weatherState10 : {
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
            },
            weatherState11 : {
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

    getHourlyWeather = async (e) => {
        const APIKey = process.env.REACT_APP_API_KEY;
    
        const latitude = this.state.latitude;
        const longitude = this.state.longitude;
        //console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}`);
        e.preventDefault();   
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}`);
        const response = await api_call.json();
        console.log(response);
        let newArr = [];
        for(let i = 0; i < 12; i++){
            let weatherStateX = {
                time: response.hourly[i].dt,
                temperature: response.hourly[i].temp,
                feelsLike: response.hourly[i].feels_like,
                cloudPercent: response.hourly[i].clouds,
                uvIndex: response.hourly[i].uvi,
                visibility: response.hourly[i].visibility,
                windSpeed: response.hourly[i].wind_speed,
                weather: {
                weatherType: response.hourly[i].weather[0].main,
                weatherDescription: response.hourly[i].weather[0].description
                }
            };
            newArr.push(weatherStateX);
            console.log(newArr);
            
        }
        this.setState({
            weatherState0 : newArr[0], 
            weatherState1 : newArr[1], 
            weatherState3 : newArr[2], 
            weatherState3 : newArr[3], 
            weatherState4 : newArr[4], 
            weatherState5 : newArr[5], 
            weatherState6 : newArr[6], 
            weatherState7 : newArr[7], 
            weatherState8 : newArr[8], 
            weatherState9 : newArr[9], 
            weatherState10 : newArr[10], 
            weatherState11 : newArr[11]
            
        });
    }

    setLatLong = (lat, long) => {
        this.setState({latitude: lat});
        this.setState({longitude: long});
    }

    render() {
    return (
      <div>
        <h1>Hourly Forecast</h1>
        <p>Set your latitude and longitude below, 
            then update the weather for the next twelve hours</p>
        <div>
            <LatLong publish={this.setLatLong}/>
            <p></p>
        </div>
        <div>
        <button value="Send" onClick={ this.getHourlyWeather }>Update Weather</button>
            <ForecastCard state={this.state.weatherState0} />
            <ForecastCard state={this.state.weatherState1} />
            <ForecastCard state={this.state.weatherState2} />
            <ForecastCard state={this.state.weatherState3} />
            <ForecastCard state={this.state.weatherState4} />
            <ForecastCard state={this.state.weatherState5} />
            <ForecastCard state={this.state.weatherState6} />
            <ForecastCard state={this.state.weatherState7} />
            <ForecastCard state={this.state.weatherState8} />
            <ForecastCard state={this.state.weatherState9} />
            <ForecastCard state={this.state.weatherState10} />
            <ForecastCard state={this.state.weatherState11} />
        </div>
      </div>
    );
  }
}
export default HourlyForecast;
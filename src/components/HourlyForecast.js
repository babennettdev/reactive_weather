import React, { Component } from 'react';
import LatLong from './LatLong.js';
import ForecastCard from './ForecastCard.js';
import WeatherState from './WeatherState.js';
import HandleOpenWeatherMap from './HandleOpenWeatherMap.js';
import UnixTimestampToDate from './UnixTimestampToDate.js';

class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            displayCards: false,
            invalidLatLong: null,
            weatherState0 : WeatherState,
            weatherState1 : WeatherState,
            weatherState2 : WeatherState,
            weatherState3 : WeatherState,
            weatherState4 : WeatherState,
            weatherState5 : WeatherState,
            weatherState6 : WeatherState,
            weatherState7 : WeatherState,
            weatherState8 : WeatherState,
            weatherState9 : WeatherState,
            weatherState10 : WeatherState,
            weatherState11 : WeatherState,
            
        };
    }

    setFromAPIHourly = async (response) =>{
        let newArr = [];
        for(let i = 0; i < 12; i++){
            let weatherStateX = {
                time: UnixTimestampToDate(response.hourly[i].dt),
                temperature: response.hourly[i].temp,
                feelsLike: response.hourly[i].feels_like,
                cloudPercent: response.hourly[i].clouds,
                uvIndex: response.hourly[i].uvi,
                visibility: response.hourly[i].visibility,
                windSpeed: response.hourly[i].wind_speed,
                weatherType: response.hourly[i].weather[0].main,
                weatherDescription: response.hourly[i].weather[0].description
            };
            newArr.push(weatherStateX);
            //console.log(newArr);
            
        }
        this.setState({
            weatherState0 : newArr[0], 
            weatherState1 : newArr[1], 
            weatherState2 : newArr[2], 
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

    setLatLong = async (lat, long) => {
        lat = Number(lat);
        long = Number(long);
        await this.setState({latitude: lat});
        await this.setState({longitude: long});
        if(typeof lat === "number" && typeof long === 'number'
            && (lat > -90 && lat < 90) 
            && (long > -180 && long < 180)){
                this.displayCards = true;
                this.invalidLatLong = false;
                const response = await HandleOpenWeatherMap(this.state.latitude, this.state.longitude)
                this.setFromAPIHourly(response);
        }
        else{
            this.invalidLatLong = true;
            this.displayCards = false;
            
        }
    }

    render() {
    return (
      <div>
        <h1>Hourly Forecast</h1>
        <p>Set your latitude and longitude below, 
            then update the weather for the next twelve hours.</p>
        <div>
            <LatLong publish={this.setLatLong}/>
            {this.invalidLatLong === true &&
            <p>Invalid latitude (-90 to 90) or longitude (-180 to 180)</p>
        }
        </div>
        <div>
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState0} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState1} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState2} /> 
        }   
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState3} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState4} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState5} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState6} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState7} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState8} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState9} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState10} /> 
        }
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState11} /> 
        }
        </div>
      </div>
    );
  }
}
export default HourlyForecast;
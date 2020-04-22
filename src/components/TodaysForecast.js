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
            displayCards: false,
            invalidLatLong: null,
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
        lat = Number(lat);
        long = Number(long);
        await this.setState({latitude: lat});
        await this.setState({longitude: long});
        console.log(lat, long, typeof lat, typeof long);
        if(typeof lat === "number" && typeof long === 'number'
            && (lat > -90 && lat < 90) 
            && (long > -180 && long < 180)){
                this.displayCards = true;
                this.invalidLatLong = false;
                const response = await HandleOpenWeatherMap(this.state.latitude, this.state.longitude)
                this.setFromAPI(response);
                console.log(this.invalidLatLong, this.displayCards);
        }
        else{
            this.invalidLatLong = true;
            this.displayCards = false;
            console.log(lat, long, this.invalidLatLong, this.displayCards);
        }
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
            {this.invalidLatLong === true &&
            <p>Invalid latitude (-90 to 90) or longitude (-180 to 180)</p>
        }

        </div>
        <div>
            {this.displayCards === true &&
            <ForecastCard state={this.state.weatherState} />
        }
        </div>
      </div>
      
    );
  }
}
export default TodaysForecast;
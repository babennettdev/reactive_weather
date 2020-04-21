async function HandleOpenWeatherMap(lat, long) {
    const APIKey = process.env.REACT_APP_API_KEY;

    const latitude = lat;
    const longitude = long;
    const units = 'imperial';
    //console.log(lat, long);
    //console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}`); 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${APIKey}`);
    const response = await api_call.json();

    // Logging the json from the API for debugging purposes
    //console.log("****************************");
    //console.log(response);
    //console.log("****************************");

    return response;
}

export default HandleOpenWeatherMap;
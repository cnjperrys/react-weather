import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props){

    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]= useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
      
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col"> 
          <WeatherForecastDay  data={forecast[0]}/>
            </div>
        </div>
    </div>
    );
        
    } else {
        let apiKey = `97f8e93f00107773f88eafd933ce86b7`;
        let longitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
        
    }
   
}
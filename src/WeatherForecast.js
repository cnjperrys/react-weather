import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

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
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{Math.round(forecast[0].temp.max)}°
            </span>
            <span className="WeatherForecast-temperature-min">{Math.round(forecast[0].temp.min)}°
            </span>
                </div>
            </div>
        </div>
    </div>
    );
        
    } else {
        let apiKey = `f65418929c92a8d70fd3cc257f94aa14`;
        let longitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null
        ;
    }
   
}
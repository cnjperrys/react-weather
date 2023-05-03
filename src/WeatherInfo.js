import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
       <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
           <ul>
            <li><FormattedDate date={props.data.date} /> </li>
            <li className="text-capitalize">{props.data.description}</li>
           </ul>
           <div className="row mt-3">
            <div className="col-6">
                <div className="d-flex">
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon}
                    />
                    </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              <span className="temperature">{Math.round(props.data.temperature)}</span> 
              <span className="unit">℃</span> 
           </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
          </div>
       </div>
    );
}
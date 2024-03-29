import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";



export default function App() {
  return <div className="App">
    <div className="container">
       <h1>Weather App</h1>
       <Weather defaultCity={"Boston"} />
    <footer>This project was coded by Courtney Perry and is {""}
      <a href="https://github.com/cnjperrys/react-weather" target="_blank" rel="noopener noreferrer">open-sourced on Github</a>
    </footer>
    </div>
  </div>
}
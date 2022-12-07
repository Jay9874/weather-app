import React, { useState } from "react";



const api = {
    key: "e2b12be2b37e07a456a775693bc6f030",
    base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
    const [query, setQuery] = useState("");
    const [weather,setWeather]= useState({});
    const search = evt =>{
      if(evt.key ==="Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res =>res.json())
        .then(result =>
          {
            setWeather(result);
            setQuery('');
            console.log(result);
          }
          );
      
          }
    }
    const dateBuilder = (d) => {
        let months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
        ];
        let days = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    };
    return (
        <div className={
          (typeof weather.main !='undefined') 
          ? ((weather.main.temp > 16)
          ?'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyDown ={search}
                     />
                </div>
                {(typeof weather.main !='undefined') ? (
                   <div>
                    <div className="location-box">
                    <div className="location">{weather.name},{weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                    <div className="weather-box">
                        <div className="temp">{Math.round(weather.main.temp)}°c</div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                </div>
                   </div>
                ) :('')}
            </main>
        </div>
    );
}

export default App;
//e2b12be2b37e07a456a775693bc6f030

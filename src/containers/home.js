import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './css/home.css';

const apiKey = '95defbd1477da447407faed467c2bf3c';

export default function Home(props) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const urlParams = new URLSearchParams(props.location.search);
    const cityParams = urlParams.get('city') ? urlParams.get('city') : 'London';

    function queryWeatherAPI(queryCity) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
        .then(function(response){
            console.log('response', response.data);
            setWeather(response.data);
            return response.data;
        })
        .catch(function(error){
            console.log("error", error);
            return error;
        });
    }
    useEffect(() => {
        setCity(cityParams);
        queryWeatherAPI(cityParams);
    },[cityParams]);

    return (
        <div className="home">
            <div className="header">
                <a className={`header__item ${city === 'Chicago' ? 'header__item--active' : ''}`} href="/?city=Chicago">Chicago</a>
                <a className={`header__item ${city === 'New York' ? 'header__item--active' : ''}`} href="/?city=New York">New York</a>
                <a className={`header__item ${city === 'Boston' ? 'header__item--active' : ''}`} href="/?city=Boston">Boston</a>
                <a className={`header__item ${city === 'Miami' ? 'header__item--active' : ''}`} href="/?city=Miami">Miami</a>
            </div>
            <h1>Weather in: {city}</h1>
            <h2>{weather.main && weather.weather[0].description}</h2>
            <p>Current Temperature: {weather.main && weather.main.temp} Kelvin</p>
            <p>Max Temperature: {weather.main && weather.main.temp_max} Kelvin</p>
            <p>Min Temperature: {weather.main && weather.main.temp_min} Kelvin</p>
            <p>Humidity: {weather.main ? weather.main.humidity : ''}</p>
            <p>Cloudy: {weather.clouds && weather.clouds.all}</p>
            <p>Wind: {weather.wind && weather.wind.speed}km/H coming at {weather.wind && weather.wind.deg}</p>
        </div>
    );
}
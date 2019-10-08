import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './css/home.css';
import WeatherIcon from '../components/WeatherIcon';
import PageWrapper from '../components/PageWrapper';

const apiKey = '95defbd1477da447407faed467c2bf3c';

export default function Home(props) {
    const [error, isError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [success, isSuccess] = useState(false);

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const urlParams = new URLSearchParams(props.location.search);
    const cityParams = urlParams.get('city') ? urlParams.get('city') : 'London';

    function queryWeatherAPI(queryCity) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}&units=imperial`)
        .then(function(response){
            console.log('response', response.data);            
            if(response.status !== 200){
                isError(true);
                setErrorMessage(`${response.status}: ${'Error'}`);
            } else{
                isSuccess(true);
            }
            setWeather(response.data);
            return response.data;
        })
        .catch(function(error){
            console.log("error", error);
            if(error.status !== 200){
                isError(true);
                setErrorMessage(`${error}`);
            } else{
                isSuccess(true);
            }
            return error;
        });
    }
    useEffect(() => {
        setCity(cityParams);
        queryWeatherAPI(cityParams);
    },[cityParams]);

    return (
        <PageWrapper cloudy={weather.main && weather.clouds.all}>
            <nav className="header">
                <span className="navigation--toggle" id="button">
                    <i className="fas fa-bars"></i>
                </span>
                <ul className="navigation__menu" id="navFun">
                    <li className={`header__item ${city === 'Chicago' ? 'header__item--active' : ''}`}> <a href="/?city=Chicago">Chicago</a></li>
                    <li className={`header__item ${city === 'New York' ? 'header__item--active' : ''}`}><a href="/?city=New York">New York</a></li>
                    <li className={`header__item ${city === 'Boston' ? 'header__item--active' : ''}`}>  <a href="/?city=Boston">Boston</a></li>
                    <li className={`header__item ${city === 'Miami' ? 'header__item--active' : ''}`}>   <a href="/?city=Miami">Miami</a></li>
                </ul>
            </nav>

            <div className="move">
                <h1>Weather in: {city}</h1>

                {error && <div className="errorMessage">{errorMessage}</div>}

                <WeatherIcon weatherType={weather.main && weather.weather[0].main} />
                <h2>{weather.main && weather.weather[0].description}</h2>
                <p>Current Temperature: {weather.main && weather.main.temp} &#176; F</p>
                <p>Max Temperature: {weather.main && weather.main.temp_max} &#176; F</p>
                <p>Min Temperature: {weather.main && weather.main.temp_min} &#176; F</p>
                <p>Humidity: {weather.main ? weather.main.humidity : ''}</p>
                <p>Cloudy: {weather.clouds && weather.clouds.all}</p>
                <p>Wind: {weather.wind && weather.wind.speed}km/H coming at {weather.wind && weather.wind.deg}</p>
                {success && <div className="errorMessage">Weather query successful!</div>}
            </div>
        </PageWrapper>
    );
}
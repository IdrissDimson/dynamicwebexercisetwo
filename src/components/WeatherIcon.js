import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faCloud, faSun, faWind } from '@fortawesome/free-solid-svg-icons';

export default function WeatherIcon({weatherType}) {
    switch(weatherType){
        case 'Rain':
            return <FontAwesomeIcon icon={faCloudRain} size="6x"/> 
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} size="6x"/>
        case 'Clear':
            return <FontAwesomeIcon icon={faSun} size="6x"/>
        case 'Windy':
            return <FontAwesomeIcon icon={faWind} size="6x"/>
        default:
            return <div>{weatherType}</div>
    }
}
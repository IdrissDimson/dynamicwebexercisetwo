import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faCloud, faSun, faWind, faWater,faSnowflake, faCloudShowersHeavy} from '@fortawesome/free-solid-svg-icons';

export default function WeatherIcon({weatherType}) {
    switch(weatherType){
        case 'Drizzle':
            return <FontAwesomeIcon icon={faCloudRain} size="6x"/> 
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} size="6x"/>
        case 'Clear':
            return <FontAwesomeIcon icon={faSun} size="6x"/>
        case 'Windy':
            return <FontAwesomeIcon icon={faWind} size="6x"/>
        case 'Mist':
            return <FontAwesomeIcon icon={faWater} size="6x"/>
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake} size="6x"/>
        case 'Rain':
            return <FontAwesomeIcon icon={faCloudShowersHeavy} size="6x"/>
        default:
            return <div>{weatherType}</div>
    }
}
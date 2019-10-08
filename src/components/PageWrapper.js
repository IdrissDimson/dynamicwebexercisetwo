import React from 'react';

export default function PageWrapper({cloudy = 100, children}) {
    const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;
    const redValue = ((cloudy + 1) / 100) * 255;
    const greenValue = ((cloudy + 1) / 100) * 255;
    const blueValue = ((cloudy + 1) / 100) * 255;

    return(
        <div className="PageWrap" style={{backgroundColor: `rgba(${redValue},${greenValue},${blueValue},${wrapperOpacity})`}}>
            {children}
        </div>
    )
}
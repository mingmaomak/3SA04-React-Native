import React from 'react' //'core-js/library/fn/reflect/es7/metadata'
import Weather from '../components/Weather'
export default function WeatherScreen({route}){
    return(
        <view>
            <Weather zipCode = {route.params.zipCode}/>
        </view>
    )
}
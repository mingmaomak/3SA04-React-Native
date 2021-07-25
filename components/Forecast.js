//import React from 'core-js/library/fn/reflect/es7/metadata'
import React from 'react'


export default function Forecast (props){
    return(
        <view>
            <text>{props.main}</text>
            <text>{props.description}</text>
            <text>{props.temp}</text>
            <text>°C</text>
        </view>
    )
}
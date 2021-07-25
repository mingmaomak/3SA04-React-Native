//import React from 'core-js/library/fn/reflect/es7/metadata'
import React from 'react'
import { ImageBackground } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){

    useEffect(() => { 
        console.log(`fetching data with zipCode = ${props.zipCode}`) 
        if (props.zipCode) { 
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=7a751f955a176554364fcb4ea69fa949`) 
                .then((response) => response.json()) 
                .then((json) => { 
                    setForecastInfo({ 
                        main: json.weather[0].main, 
                        description: json.weather[0].description, 
                        temp: json.main.temp 
                    }); 
                }) 
                .catch((error) => { 
                    console.warn(error); 
                }); 
        } 
    }, [props.zipCode]) 

    const [forecastInfo, setForecastInfo] = useState({
        main: '-', 
        description: '-', 
        temp: 0 
        //})   
    })
    return(
        <ImageBackground source={require('../background.jpg')} style={styles.backdrop}>
            <Forecast {...setForecastInfo} />
        </ImageBackground>
        
        // <Text> {props.zipCode} </Text>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
})
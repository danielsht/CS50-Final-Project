import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

import { getWeather } from './WeatherApi'

export default class Weather extends React.Component {
    state = {
        maxtemp: 10,
    }

    async componentDidMount() {
        const forecast = await getWeather()
        this.setState({ forecast })
    }

    renderWeather = (val, index) => {
        return (
            <View key={index} style={styles.weatherContainer}>
                <Image source={{ uri: `https:${val.day.condition.icon}` }} style={{ width: 64, height: 64 }} />
                <View>
                    <Text style={styles.tempText}>H:{val.day.maxtemp_f} L:{val.day.mintemp_f}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.forecast !== undefined ? this.state.forecast.map((val, index) => this.renderWeather(val, index)) : <Text>Loading...</Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText: {
        fontFamily: 'robotoReg',
        fontSize: 12,
        color: '#BF5B20',
    }
})
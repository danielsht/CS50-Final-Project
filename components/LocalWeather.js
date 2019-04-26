import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

import { getWeather } from './WeatherApi'

export default class Weather extends React.Component {
    state = {
    }

    async componentDidMount() {
        const forecast = await getWeather()
        this.setState({ forecast })
    }

    getDay = (date) => {
        const options = { weekday: 'long' }
        return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
    }

    renderWeather = (val, index) => {
        return (
            <View key={index} style={styles.weatherContainer}>
                {index === 0 ? <Text style={styles.dayText}>Today</Text> : index === 1 ? <Text style={styles.dayText}>Tomorrow</Text> :<Text style={styles.dayText}>{this.getDay(val.date)}</Text>}
                <Image source={{ uri: `https:${val.day.condition.icon}` }} style={styles.iconStyle} />
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
    iconStyle: {
        width: 64,
        height: 64,
    }, 
    dayText: {
        fontFamily: 'robotoMed',
        fontSize: 12,
        color: '#BF5B20'
    },
    tempText: {
        fontFamily: 'robotoReg',
        fontSize: 12,
        color: '#BF5B20',
    }
})
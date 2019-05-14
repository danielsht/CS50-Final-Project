import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Weather from '../components/LocalWeather'
import UpcomingEvents from '../components/UpcomingEventRow'

import data from '../Data/DelSur.json'

export default class Home extends React.Component {
    handleEventPress = (eventData) => {
        this.props.navigation.navigate('Event', { eventData })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.weatherContaier}>
                    <Weather />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}> Upcoming Events</Text>
                </View>
                <UpcomingEvents events={data.Events} onPress={this.handleEventPress} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    weatherContaier: {
        paddingLeft: 16, 
        paddingRight: 16,
    },
    titleContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'rochester',
        fontSize: 24,
        color: '#4A1126',
    },
})
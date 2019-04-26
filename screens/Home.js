import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Weather from '../components/LocalWeather'
import { UpcomingEvents } from '../components/UpcomingEventRow'

import data from '../Data/DelSur.json'

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <Weather />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Upcoming Events</Text>
                </View>
                <UpcomingEvents events={data.Events} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'rochester',
        fontSize: 24,
        color: '#4A1126',
    },
})
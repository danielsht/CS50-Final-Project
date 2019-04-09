import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import data from '../Data/DelSur.json'

export default class Home extends React.Component {
    getDateOfEvents = (eventISO) => {
        const date = new Date(eventISO)
        let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'}
        const dateFormatted = new global.Intl.DateTimeFormat('en-US', options).format(date)
        return dateFormatted
    }

    getTimeOfEvent = (dateISO) => {
        const date = new Date(dateISO)
        const options = { hour12: true, hour: 'numeric', minute: '2-digit'}
        const dateFormatted = new Intl.DateTimeFormat('en-US', options).format(date)
        return dateFormatted
    }

    getEventTitles = (obj, index) => {
        return (
            <View key={index}>
                <Text style={styles.EventTitle}>{obj.EventTitle}</Text>
                <Text style={styles.EventDetails}>{this.getDateOfEvents(obj.When.Start)}</Text>
                <Text style={styles.EventDetails}>{this.getTimeOfEvent(obj.When.Start)}</Text>
                <Text style={styles.EventDetails}>{this.getTimeOfEvent(obj.When.End)}</Text>
            </View>
        )
    }
    render() {
        return (
            <View>
                {data.Events.map((val, index) => this.getEventTitles(val, index))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Title: {
        fontFamily: 'rochester',
        fontSize: 40,
        color: '#4A1126'
    },
    EventTitle: {
        fontFamily: 'robotoMed',
        fontSize: 20,
        color: '#BF5B20',
    },
    EventDetails: {
        fontFamily: 'robotoReg',
        fontSize: 12,
        color: '#BF5B20',
    }
})
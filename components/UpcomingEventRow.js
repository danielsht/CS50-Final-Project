import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

getDateOfEvent = (eventISO) => {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
    return new Intl.DateTimeFormat('en-US', options).format(new Date(eventISO))
}

getTimeOfEvent = (dateISO) => {
    const options = { hour12: true, hour: 'numeric', minute: '2-digit' }
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateISO))
}

getEventTitles = (obj, index) => {
    return (
        <View key={index}>
            <Text style={styles.EventTitle}>{obj.EventTitle}</Text>
            <Text style={styles.EventDetails}>{this.getDateOfEvent(obj.When.Start)}</Text>
            <Text style={styles.EventDetails}>{this.getTimeOfEvent(obj.When.Start)}</Text>
            <Text style={styles.EventDetails}>{this.getTimeOfEvent(obj.When.End)}</Text>
        </View>
    )
}

export const UpcomingEvents = ( props ) => (
    <View>
        {props.events.map((val, index) => this.getEventTitles(val, index))}
    </View>
)

const styles = StyleSheet.create({
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
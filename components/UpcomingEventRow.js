import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

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
        <View key={index} style={styles.Container}>
            <View style={styles.EventImageContainer}>
                <Image source={require( '../Icons/logo.png' )} style={styles.EventImage}/>
            </View>
            <View style={styles.EventDetContainer}>
                <Text style={styles.EventTitle}>{obj.EventTitle}</Text>
                <Text style={styles.EventDetails}>{this.getDateOfEvent(obj.When.Start)}</Text>
                <Text style={styles.EventDetails}>{this.getTimeOfEvent(obj.When.Start)}</Text>
                <Text style={styles.EventDetails}>{this.getTimeOfEvent(obj.When.End)}</Text>
            </View>
        </View>
    )
}

export const UpcomingEvents = (props) => (
    <View>
        {props.events.map((val, index) => this.getEventTitles(val, index))}
    </View>
)

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        paddingTop: 20,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#707070',
    },
    EventImageContainer: {
        flex: 1,
    }, 
    EventImage: {
        resizeMode: 'contain', 
        flex: 1, 
        width: undefined, 
        height: undefined,
    },
    EventDetContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
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
    }, 
})
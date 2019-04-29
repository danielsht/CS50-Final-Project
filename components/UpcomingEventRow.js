import React from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'

export default class UpcomingEvents extends React.Component {

    getDateOfEvent = (eventISO) => {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
        return new Intl.DateTimeFormat('en-US', options).format(new Date(eventISO))
    }
    
    getTimeOfEvent = (dateISO) => {
        const options = { hour12: true, hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles' }
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateISO))
    }

    isSameDay = (startDate, endDate) => {
        const start = this.getDateOfEvent(startDate)
        const end = this.getDateOfEvent(endDate)
        return start === end ? true : false
    }
    
    getEventTitles = (item) => {
        return (
            <View style={styles.container}>
                <View style={styles.eventImageContainer}>
                    <Image source={{ uri: item.item.ImgURL }} style={styles.eventImage} />
                </View>
                <View style={styles.eventDetContainer}>
                    <Text style={styles.eventTitle}>{item.item.EventTitle}</Text>
                    {this.isSameDay(item.item.When.Start, item.item.When.End) ? <Text style={styles.eventDetails}>{this.getDateOfEvent(item.item.When.Start)}</Text> : <Text style={styles.eventDetails}>{this.getDateOfEvent(item.item.When.Start)} - {this.getDateOfEvent(item.item.When.End)}</Text>} 
                    <Text style={styles.eventDetails}>{this.getTimeOfEvent(item.item.When.Start)} - {this.getTimeOfEvent(item.item.When.End)}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <FlatList data={this.props.events} renderItem={(item) => this.getEventTitles(item)} keyExtractor={(item) => item.Key} style={styles.flatList} />
        )
    }
}

const styles = StyleSheet.create({
    flatList: {
        marginBottom: 144,
    }, 
    container: {
        height: 150,
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#707070',
    },
    eventImageContainer: {
        flex: 1,
    },
    eventImage: {
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 12,
        width: undefined,
        height: undefined,
    },
    eventDetContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eventTitle: {
        fontFamily: 'robotoMed',
        fontSize: 20,
        textAlign: 'center',
        color: '#BF5B20',
    },
    eventDetails: {
        fontFamily: 'robotoReg',
        fontSize: 12,
        textAlign: 'center',
        color: '#BF5B20',
    },
})
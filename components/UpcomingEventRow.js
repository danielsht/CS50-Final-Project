import React from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'

export default class UpcomingEvents extends React.Component {

    getDateOfEvent = (eventISO) => {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
        return new Intl.DateTimeFormat('en-US', options).format(new Date(eventISO))
    }
    
    getTimeOfEvent = (dateISO) => {
        const options = { hour12: true, hour: 'numeric', minute: '2-digit' }
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateISO))
    }
    
    getEventTitles = (item) => {
        console.log(item)
        return (
            <View style={styles.Container}>
                <View style={styles.EventImageContainer}>
                    <Image source={{ uri: item.item.ImgURL }} style={styles.EventImage} />
                </View>
                <View style={styles.EventDetContainer}>
                    <Text style={styles.EventTitle}>{item.item.EventTitle}</Text>
                    <Text style={styles.EventDetails}>{this.getDateOfEvent(item.item.When.Start)}</Text>
                    <Text style={styles.EventDetails}>{this.getTimeOfEvent(item.item.When.Start)} - {this.getTimeOfEvent(item.item.When.End)}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <FlatList data={this.props.events} renderItem={(item) => this.getEventTitles(item)} keyExtractor={(item) => item.Key} contentInset={{bottom: 144}}/>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 150,
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#707070',
    },
    EventImageContainer: {
        flex: 1,
    },
    EventImage: {
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 12,
        width: undefined,
        height: undefined,
    },
    EventDetContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    EventTitle: {
        fontFamily: 'robotoMed',
        fontSize: 20,
        textAlign: 'center',
        color: '#BF5B20',
    },
    EventDetails: {
        fontFamily: 'robotoReg',
        fontSize: 12,
        color: '#BF5B20',
    },
})
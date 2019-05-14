import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet, Image, FlatList } from 'react-native'

import { getDateOfEvent, getTimeOfEvent, isSameDay} from '../Utils/formatTimes'

export default class UpcomingEvents extends React.Component {
    getEventTitles = (item) => {
        return (
            <TouchableHighlight onPress={() => this.props.onPress(item)}>
                <View style={styles.container}>
                    <View style={styles.eventImageContainer}>
                        <Image source={{ uri: item.ImgURL }} style={styles.eventImage} />
                    </View>
                    <View style={styles.eventDetContainer}>
                        <Text style={styles.eventTitle}>{item.EventTitle}</Text>
                        {isSameDay(item.When.Start, item.When.End) ? <Text style={styles.eventDetails}>{getDateOfEvent(item.When.Start)}</Text> : <Text style={styles.eventDetails}>{getDateOfEvent(item.When.Start)} - {getDateOfEvent(item.When.End)}</Text>}
                        <Text style={styles.eventDetails}>{getTimeOfEvent(item.When.Start)} - {getTimeOfEvent(item.When.End)}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <FlatList data={this.props.events} renderItem={({ item }) => this.getEventTitles(item)} keyExtractor={(item) => item.Key} style={styles.flatList} />
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
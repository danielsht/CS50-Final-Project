import React from 'react'
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'

import { getDateOfEvent, getTimeOfEvent, isSameDay } from '../Utils/formatTimes'

export default class Events extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: ` ${navigation.getParam('eventData', '{EventTitle: \'Example\'}').EventTitle}`,
        }
    }

    render() {
        const eventDetails = this.props.navigation.getParam('eventData', '')
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: eventDetails.ImgURL }} style={styles.eventImage} />
                </View>
                <ScrollView style={styles.eventDetailsContainers}>
                    <View style={styles.eventDetailsContainers}>
                        <Text style={styles.subTitle}>When:</Text>
                        <View style={styles.eventTimes}>
                        {isSameDay(eventDetails.When.Start, eventDetails.When.End) ? <Text style={styles.detailText}>{getDateOfEvent(eventDetails.When.Start)}</Text> : <Text style={styles.detailText}>{getDateOfEvent(eventDetails.When.Start)} - {getDateOfEvent(eventDetails.When.End)}</Text>}
                            <Text style={styles.detailText}>{getTimeOfEvent(eventDetails.When.Start)} - {getTimeOfEvent(eventDetails.When.End)}</Text>
                        </View>
                    </View>
                    <View style={styles.eventDetailsContainers}>
                        <Text style={styles.subTitle}>Where:</Text>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.detailText}>{eventDetails.Where.Address.Number} {eventDetails.Where.Address.Street}</Text>
                                <Text style={styles.detailText}>{eventDetails.Where.Address.City}, {eventDetails.Where.Address.State} {eventDetails.Where.Address.ZipCode}</Text>
                        </View>
                    </View>
                    <View style={styles.eventDetailsContainers}>
                        <Text style={styles.detailText}>{eventDetails.Notes}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 0.4,
        marginTop: 30,
    },
    eventDetailsContainers: {
        flex: 1, 
        margin: 5,
    },
    eventTimes: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    eventImage: {
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 12,
        width: undefined,
        height: undefined,
    },
    subTitle: {
        fontFamily: 'robotoMed',
        fontSize: 20,
        color: '#BF5B20',
    },
    detailText: {
        fontFamily: 'robotoReg',
        fontSize: 14,
        color: '#BF5B20',
    },
})
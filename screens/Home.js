import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { UpcomingEvents } from '../components/UpcomingEventRow'

import data from '../Data/DelSur.json'

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <UpcomingEvents events={data.Events} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import PoolMap from '../components/PoolMap'
import PoolList from '../components/PoolList'
import Data from '../Data/DelSur.json'

export default class Pool extends React.Component {
    render() {
        return (
            <View style={styles.contianer}>
                <View style={styles.mapContainer}>
                    <PoolMap data={Data.Pool} />
                </View>
                <View style={styles.listContainer}>
                    <PoolList data={Data.Pool} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1, 
    },
    mapContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
    },
})
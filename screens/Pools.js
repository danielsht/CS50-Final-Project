import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Pool extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.Title}> Pools</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Title: {
        fontFamily: 'rochester',
        fontSize: 40,
        color: '#4A1126'
    }
})
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const Row = () => (
    <View>
        <Text style={styles.subheader}>Testing Font functionality</Text>
        <Text style={styles.sec}>Different Font</Text>
        <Text style={styles.th}>Last Font</Text>
    </View>
)

const styles = StyleSheet.create({
    subheader: {
        fontFamily: 'rochester',
        fontSize: 24,
    },
    sec: {
        fontFamily: 'robotoMed',
        fontSize: 14,
    },
    th: {
        fontFamily: 'robotoReg',
        fontSize: 12,
    },
})
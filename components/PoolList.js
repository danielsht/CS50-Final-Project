import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

export default class PoolList extends React.Component {
    PoolRow = (pool) => {
        return (
            <View style={styles.container}>
                <View style={styles.listSections}>
                    <Text style={styles.poolName}>{pool.Name}</Text>
                    <Text style={styles.normalText}>Pool Type: Solar-Heated Pool {pool.HotTub && pool.KidsPool ? ', Hot Tub, Kids Pool' : pool.HotTub ? ', Hot Tub' : pool.KidsPool ? ', Kids Pool' : ''}</Text>
                </View>
                <View style={styles.listSections}>
                    <Text style={styles.subTitle}>Operating Hours:</Text>
                    <Text style={styles.normalText}>{pool.Opens} - {pool.Closes}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item }) => this.PoolRow(item)}
                keyExtractor={(item) => `${item.Coordinate.latitude},${item.Coordinate.longitude}`}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        padding: 10,
    },
    listSections: {
        flex: 1,
        flexDirection: 'column',
    },
    poolName: {
        fontFamily: 'robotoMed',
        fontSize: 20,
        color: '#BF5B20',
    },
    subTitle: {
        fontFamily: 'robotoMed',
        fontSize: 14,
        color: '#BF5B20',
    },
    normalText: {
        fontFamily: 'robotoReg',
        fontSize: 12,
        color: '#BF5B20'
    }
})
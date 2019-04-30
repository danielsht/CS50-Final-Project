import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'

export default class PoolMap extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    provider='google'
                    initialRegion={{
                        latitude: 33.0164442,
                        longitude: -117.1414246,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {this.props.data.map(pool => (<Marker key={`${pool.Coordinate.latitude},${pool.Coordinate.longitude}`} coordinate={pool.Coordinate} title={pool.Name} /> ))}
                </MapView>
            </View>
        )
    }
}
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../screens/Home';
import EventsScreen from '../screens/Events';
import PoolsScreen from '../screens/Pools';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: 'Home',
                headerTitleStyle: {
                    fontSize: 40,
                    fontFamily: 'rochester',
                },
                headerTintColor: '#4A1126',
                headerStyle: {
                    borderBottomWidth: 0,
                },
            }
        },
        Event: {
            screen: EventsScreen,
            navigationOptions: {
                headerTitleStyle: {
                    fontSize: 40,
                    fontFamily: 'rochester',
                },
                headerTintColor: '#4A1126',
                headerStyle: {
                    borderBottomWidth: 0,
                },
            }
        },
    },
)

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => { return <Image source={require('../Icons/HomeIcon.png')} style={styles.iconStyle} /> },
}

const PoolsStack = createStackNavigator(
    {
        Pools: {
            screen: PoolsScreen,
            navigationOptions: {
                headerTitle: 'Pools',
                headerTitleStyle: {
                    fontSize: 40,
                    fontFamily: 'rochester',
                },
                headerTintColor: '#4A1126',
                headerStyle: {
                    borderBottomWidth: 0,
                },
            },
        },
    },
)

PoolsStack.navigationOptions = {
    tabBarLabel: 'Pools',
    tabBarIcon: () => { return <Image source={require('../Icons/Locations.png')} style={styles.iconStyle} /> },
}

const mainBottomTab = createBottomTabNavigator(
    {
        Home: HomeStack,
        Pools: PoolsStack,
    },
    {
        initialRouteName: 'Home',
        //resetOnBlur: true,
        backBehavior: 'history',
        tabBarOptions: {
            activeBackgroundColor: '#BF5B20',
            inactiveBackgroundColor: '#FFCA38',
            activeTintColor: '#FFCA38',
            inactiveTintColor: '#BF5B20',
            safeAreaInset: {
                bottom: 'never',
            },
            style: {
                height: 80,
            },
            labelStyle: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontFamily: 'robotoMed',
            }
        }
    },
)

const styles = StyleSheet.create({
    iconStyle: {
        width: 32,
        height: 32,
    }
})

export default createAppContainer(mainBottomTab)
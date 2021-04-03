import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import FruitScreen from '../Screens/FruitScreen.js';
import VegesScreen from '../Screens/VegesScreen.js';
import CameraScreen from '../Screens/CameraScreen.js';

const Tab = createMaterialBottomTabNavigator();

export default BottomTabs = () => (
    <Tab.Navigator initialRouteName='WelcomeScreen' shifting={true}>
        <Tab.Screen name='VegesScreen'
            component={VegesScreen}
            options={{
                tabBarLabel: 'Veges',
                tabBarColor: '#8B78E6',
                tabBarIcon: ({ color }) => (
                    <Icon name='ios-list' color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen name='FruitScreen'
            component={FruitScreen}
            options={{
                tabBarLabel: 'Fruits',
                tabBarColor: '#75DA8B',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-list" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen name='CameraScreen'
            component={CameraScreen}
            options={{
                tabBarLabel: 'Camera',
                tabBarColor: '#F3B431',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-camera" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)
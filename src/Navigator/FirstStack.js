import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import WelcomeScreen from '../Screens/WelcomeScreen.js'
import VegesScreen from '../Screens/VegesScreen.js';
import DetailScreen from '../Screens/DetailScreen.js';
import Login from '../Screens/Login.js';
import SignUp from '../Screens/SignUp.js';
import DirectCamera from '../Screens/DirectCamera.js';

import BottomTabs from '../Navigator/BottomTabs.js';
import CameraScreen from '../Screens/CameraScreen.js';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default FirstStack = ({ navigation }) => (
    <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
            name='WelcomeScreen'
            component={WelcomeScreen}
            options={{
                title: 'Welcome',
                headerShown: false,
            }}
        />
        <Stack.Screen
            name='VegesScreen'
            component={BottomTabs}
            options={{
                title: 'Vegetables',
                headerShown: false,
            }}
        />
        <Stack.Screen
            name='DetailScreen'
            component={DetailScreen}
            options={{
                title: 'Stats',
                headerShown: false,
            }}
        />
        <Stack.Screen
            name='CameraScreen'
            component={CameraScreen}
            options={{
                title: 'Camera',
                headerShown: false,
            }}
        />
        <Stack.Screen
            name='DirectCamera'
            component={DirectCamera}
            options={{
                title: 'Camera',
                headerShown: false,
            }}
        />
    </Stack.Navigator>
)
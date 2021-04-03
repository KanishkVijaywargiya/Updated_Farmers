import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Platform } from 'react-native'
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Splash = props => (
    <View style={{ flex: 1, alignItems: 'center', }}>
        <Text style={{ fontWeight: 'bold', marginTop: 80, fontSize: Platform.OS === 'ios' ? hp('4.5%') : hp('4.5%') }}>Krishi Seva Bandhu</Text>
        {/*<Image source={require('../assets/farmtractor.gif')} />*/}
        <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView style={{ width: hp('35%'), height: hp('35%'), }} source={require('../assets/lottieJson/farmtractor.json')} autoPlay loop />
        </View>
    </View>
)
export default Splash;

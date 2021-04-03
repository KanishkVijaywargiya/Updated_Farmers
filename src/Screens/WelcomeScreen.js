import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, PermissionsAndroid } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class WelcomeScreen extends Component {

    getAndroidPermissions() {
        let that = this;

        async function requestExternalWritePermission() {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //If WRITE_EXTERNAL_STORAGE Permission is granted
                    //changing the state to show Create PDF option
                    that.setState({ isPermitted: true });
                } else {
                    alert('WRITE_EXTERNAL_STORAGE permission denied');
                }
            } catch (err) {
                alert('Write permission err', err);
                console.warn(err);
            }
        }
        //Calling the External Write permission function
        requestExternalWritePermission();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignSelf: 'center' }} >
                    <Image style={{ width: Dimensions.get('window').width, height: '100%', paddingLeft: '30%', paddingRight: '30%', opacity: 0.9 }} source={require('../assets/revalogo/revalogo.png')} />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#121212', width: hp('30%'), height: hp('8%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 20, position: 'absolute', bottom: hp('20%'), elevation: 10, shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } }} onPress={() => this.props.navigation.navigate('VegesScreen')}>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>
                        Farming Guide
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#121212', width: hp('30%'), height: hp('8%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 20, position: 'absolute', bottom: hp('10%'), elevation: 10, shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } }} onPress={() => this.props.navigation.navigate('DirectCamera')}>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>
                        Camera
                    </Text>
                </TouchableOpacity>
                <View style={{ bottom: hp('7%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', elevation: 10 }}>
                    <Text style={{ color: '#121212', fontSize: 22, fontWeight: '600' }}>
                        From
                        <Text style={{ color: '#121212', fontSize: 22, fontWeight: 'bold', color: '#DE834D' }}> REVA </Text>
                        University
                </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

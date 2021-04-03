import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, Image, PermissionsAndroid } from 'react-native';
import Header from '../Components/Header.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import { WebView } from 'react-native-webview';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const options = {
    title: 'Select Image',
    customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class CameraScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filepath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: ''
        }
    }

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


    chooseImage = () => {
        let options = {
            title: 'Select Image',
            quality: 0.8,
            maxHeight: 32,
            maxWidth: 32,
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // alert(JSON.stringify(response));s
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
                console.log('ImageValueData::', this.state.fileData);
                console.log('ImageValuePath::', this.state.filepath);
                console.log('ImageValueUri::', this.state.fileUri);


            }
        });
    }

    launchCamera = () => {
        let options = {
            quality: 1,
            maxHeight: 32,
            maxWidth: 32,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });
    }

    renderFileData() {
        if (this.state.fileData) {
            return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
                style={{ width: 150, height: 150, borderColor: 'black', borderWidth: 1, marginHorizontal: 3 }}
            />
        } else {
            return <Image source={require('../assets/soil.png')}
                style={{ width: 150, height: 150, borderColor: 'black', borderWidth: 1, marginHorizontal: 3 }}
            />
        }

    }

    renderFileUri() {
        if (this.state.fileUri) {
            return <Image
                source={{ uri: this.state.fileUri }}
                style={{ width: 150, height: 150, borderColor: 'black', borderWidth: 1, marginHorizontal: 3 }}
            />
        } else {
            return <Image
                source={require('../assets/soil.png')}
                style={{ width: 150, height: 150, borderColor: 'black', borderWidth: 1, marginHorizontal: 3 }}
            />
        }
    }

    fetchData = () => {
        fetch("https://ripeban.herokuapp.com/" + this.state.fileData)
            .then(response => response.json())
            .then(response => {
                console.log('kkkk::', response);
            });
        console.log('kkkk::', response);
    }

    render() {
        return (
            <View style={{ backgroundColor: '#EAF0F1', flex: 1 }}>
                <Header title='Camera' color='#F3B431' />
                <View style={{ position: 'absolute', top: Platform.OS === 'ios' ? hp('5%') : hp('2%'), left: Platform.OS === 'ios' ? hp('2%') : hp('2%') }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }} onPress={() => this.props.navigation.goBack()}>
                        <Icon
                            name={'ios-arrow-back'}
                            color={'white'}
                            size={Platform.OS === 'ios' ? hp('3.5%') : hp('5%')}
                        />
                    </TouchableOpacity>
                </View>

                {/*<View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 8, justifyContent: 'center' }}>
                    <View>
                        {this.renderFileData()}
                        <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
                    </View>
                    <View>
                        {this.renderFileUri()}
                        <Text style={{ textAlign: 'center' }}>File Uri</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={this.chooseImage} style={{}}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2 }}>
                        <Icon name='ios-camera' size={100} color={'#121212'} style={{}} />
                    </View>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2 }}>
                        <Text style={{ color: '#121212', fontWeight: 'bold', marginTop: 5 }}>Directly Launch camera</Text>
                    </View>
        </TouchableOpacity>*/}

                <WebView
                    source={{ uri: 'https://ripeban.herokuapp.com/' }}
                    style={{ flex: 1 }}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({})

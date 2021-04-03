import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DetailScreen extends Component {
    render() {
        let detail = this.props.route.params.content
        console.log("Details", detail);
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', paddingRight: 20 }}> {detail.name} </Text>
                        <Text style={{ fontStyle: 'italic', fontSize: 22, fontWeight: '400' }}>{detail.scientificname}</Text>
                    </View>

                    <Text style={{ color: '#B8BECE', fontSize: 18, fontWeight: 'bold', marginLeft: 23, marginTop: Platform.OS === 'ios' ? hp('3%') : hp('1%') }}>General Stats</Text>

                    <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 23, justifyContent: 'space-evenly' }}>
                        <View style={{
                            backgroundColor: '#000',
                            width: Dimensions.get('window').width / 3 - 30,
                            marginRight: 7,
                            maxHeight: 150,
                            minHeight: 145,
                            height: 'auto',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2,
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 15, alignSelf: 'center', paddingTop: 10 }}>{detail.soiltemperature}</Text>
                                <Text style={{ color: '#B8BECE', fontSize: 13, fontWeight: 'bold', paddingTop: 5, }}>Soil Temp.</Text>
                            </View>
                            <View style={{ flex: 1, zIndex: 100, width: '100%', justifyContent: 'flex-end', }}>
                                <Image source={require('../assets/design001.png')} style={{ borderRadius: 10, width: '100%', }} />
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#000',
                            width: Dimensions.get('window').width / 3 - 30,
                            marginHorizontal: 14,
                            maxHeight: 150,
                            minHeight: 145,
                            height: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 15, alignSelf: 'center', paddingTop: 10 }}>{detail.seedrate}</Text>
                                <Text style={{ color: '#B8BECE', fontSize: 13, fontWeight: 'bold', paddingTop: 5 }}>Seed Rate</Text>
                            </View>
                            <View style={{ flex: 1, width: '101.5%', justifyContent: 'flex-end', }}>
                                <Image source={require('../assets/design002.png')} style={{ borderRadius: 10, width: '100%', }} />
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: '#000',
                            width: Dimensions.get('window').width / 3 - 30,
                            marginLeft: 7,
                            maxHeight: 150,
                            minHeight: 145,
                            height: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 15, alignSelf: 'center', paddingTop: 10 }}>{detail.soilpH}</Text>
                                <Text style={{ color: '#B8BECE', fontSize: 13, fontWeight: 'bold', paddingTop: 5, }}>Soil pH</Text>
                            </View>
                            <View style={{ flex: 1, width: '101.5%', justifyContent: 'flex-end', }}>
                                <Image source={require('../assets/design003.png')} style={{ borderRadius: 10, width: '100%', }} />
                            </View>

                        </View>
                    </View>

                    <Text style={{ color: '#B8BECE', fontSize: 18, fontWeight: 'bold', marginLeft: 23, marginTop: 30 }}>Sensors data</Text>
                    <ScrollView style={{ height: 1000 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 23, }}>
                            <View style={{ flexDirection: 'column', marginRight: 21 }}>
                                <View style={{
                                    backgroundColor: '#000',
                                    width: 145,
                                    height: 130,
                                    marginVertical: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    elevation: 5,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2
                                }}>
                                    <Image source={require('../assets/soil.png')} />
                                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>{detail.sowingdepth}</Text>
                                        <Text style={{ color: '#B8BECE', fontWeight: 'bold', fontSize: 12 }}>Sowing depth</Text>
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: '#000',
                                    width: 145,
                                    height: 130,
                                    marginVertical: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    elevation: 5,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2
                                }}>
                                    <Image source={require('../assets/rainfall.png')} />
                                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{detail.rainfall}</Text>
                                        <Text style={{ color: '#B8BECE', fontWeight: 'bold', fontSize: 12 }}>Rainfall</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{
                                    backgroundColor: '#000',
                                    width: 148,
                                    height: 140,
                                    marginVertical: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    elevation: 5,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2
                                }}>
                                    <Image source={require('../assets/irrigation.png')} />
                                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>{detail.irrigation}</Text>
                                        <Text style={{ color: '#B8BECE', fontWeight: 'bold', fontSize: 12 }}>Irrigation</Text>
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: '#000',
                                    width: 148,
                                    height: 116,
                                    marginVertical: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    elevation: 5,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2
                                }}>
                                    <Image source={require('../assets/plantdistance.png')} />
                                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{detail.planttoplantdistance}</Text>
                                        <Text style={{ color: '#B8BECE', fontWeight: 'bold', fontSize: 12 }}>Plant to plant distance</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <TouchableOpacity style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? hp('3%') : hp('0.5%'), left: 20, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
                    <View style={{ elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2 }}>
                        <Icon name='md-arrow-back' color='#121212' size={40} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({})

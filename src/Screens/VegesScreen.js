import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../Components/Header.js';
import * as firebase from 'firebase';
import GridImage from '../Components/GridImages.js';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import 'firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import Login from '../Screens/Login.js';
import RootStackScreens from '../Navigator/RootStackScreen.js';

import RNRestart from 'react-native-restart';

const { width } = Dimensions.get('window');

// function HomeScreen({ navigation }) {
//     navigateToScreen = (value) => {
//         navigation.navigate('DetailScreen')
//     }
// }

// const VegesScreen = ({ navigation }) => {}

function mapDispatchToProps(dispatch) {
    return {
        updateUid: (uid) => dispatch({ type: 'UPDATE_UID', uid }),
        updateName: (name) => dispatch({ type: 'UPDATE_NAME', name }),
        updateEmail: (email) => dispatch({ type: 'UPDATE_EMAIL', email }),
    }
}
class VegesScreen extends Component {

    state = {
        vegedatalist: [],
    }

    componentDidMount() {
        this.vegelist()
    }

    vegelist = async () => {
        var listref = await firebase.database().ref("veges/").on("value", dataSnapshot => {
            let val = dataSnapshot.val();
            console.log("VALUE::", val);

            if (val !== null) {
                let vegiesList = Object.values(val);
                this.setState({
                    vegedatalist: vegiesList
                })
            } else {
                this.setState({
                    vegedatalist: []
                })
            }
            console.log("VegeList::", this.state.vegedatalist);
        })
    }
    // renderItem = ({ item, index }) => {
    //     console.log('vcda::', item.name);
    //     return (
    //     )
    // }

    signOut = () => {
        firebase.auth().signOut();
        setTimeout(() => { RNRestart.Restart() }, 1000);
        this.props.updateUid()
        this.props.updateEmail('abc@xyz.com')
        this.props.updateName('Stranger')
        // firebase.database().ref(`users/`).child(uidNum).update({ age: '20', collegeName: 'REVA University' });
        AsyncStorage.clear();
        console.log("uidNum", this.props.uid);
    }
    render() {
        return (
            <View style={{ backgroundColor: '#EAF0F1', flex: 1 }}>
                <Header title='Vegetables' color='#8B78E6' />
                <View style={{ position: 'absolute', top: Platform.OS === 'ios' ? hp('5%') : hp('2%'), right: Platform.OS === 'ios' ? hp('2%') : hp('2%') }}>
                    <TouchableOpacity onPress={() => this.signOut()}>
                        <Icon
                            name={'ios-log-out'}
                            color={'white'}
                            size={Platform.OS === 'ios' ? hp('3.5%') : hp('5%')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, letterSpacing: 1, color: '#121212' }}>What kind of plant you would like to grow?</Text>
                <Text style={{ color: '#B8BECE', textTransform: 'uppercase', fontWeight: '600', fontSize: 15, marginLeft: 20, marginTop: 10, marginBottom: 10 }}>Vegetables</Text>
                <ScrollView style={{ marginTop: 10 }}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {this.state.vegedatalist.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('DetailScreen', { content: item })}>
                                <GridImage image={{ uri: item.image }} text={item.name} width={width / 3 - 10} para='No. of days' />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                {/*<FlatList
                    data={this.state.vegedatalist}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.name.toString()}
                />*/}
                {/*<FlatList style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    data={this.state.vegedatalist}
                    renderItem={this.renderitem}
                    keyExtractor={(item, index) => item.id.toString()}
        />*/}

            </View>
        )
    }
}
export default connect(null, mapDispatchToProps)(VegesScreen);

const styles = StyleSheet.create({
    picker: {},
})




// state = {
//     value: 'Select one of the fruit from the list and know the watering techniques for them'
// }

{/*<View style={{ marginTop: 80 }}>
                    <Picker
                        testID="basic-picker"
                        style={styles.picker}
                        selectedValue={this.state.value}
                        onValueChange={(v) => this.setState({ value: v })}>
                        <Item label="Select Fruit" value="Select one of the fruit from the list and know the watering techniques for them" />
                        <Item label="apple" value="Apple tree water requirements depend on rainfall. In general, for an established tree, you won’t need to water it unless you are not getting much rain or there is a particularly dry spell or even drought. About an inch (2.5 cm.) or so of rainfall every week to ten days is adequate for most apple trees. Trees in their first growing season may need a little more than this." />
                        <Item label="mango" value="The young mango plants require 9-12 litre/day/plant water for better growth. The plants of 3-6 years, 6-10 years, 9-12 years and full grown trees require approximately 30-35 litre, 50-60 litre, 80-90 litre and 120 litre/day/plant." />
                        <Item label="guava" value="Besides the condition of the soil, water need is also governed by the period of the dry season. For example, in 3m x 3m planting, the water requirement of a guava plant per day is respectively 6, 19 and 35 litres for the initial, vegetative and mature stage during prolonged dry period of 3 to 4 months." />
                        <Item label="watermelon" value="Watermelons need water throughout the season, but a particularly important time when to water watermelons is while they are setting and growing fruit. The reason for this is that watermelon fruit is made up of 92 percent water. This means that the plant must take up an enormous amount of water while the fruit is developing. If this water is not available to the plant at this time, the fruit will not be able to grow to its full potential and may stunt the fruit or cause it to fall off the vine. It is also important to be watering watermelons while they are establishing in the garden or during times of drought." />
                        <Item label="banana" value="The total water requirement of banana plants is about 900-1200 mm for its entire life cycle and this can be met both through natural precipitation (rainfall) as well as supplementary irrigation." />
                    </Picker>
                    <Text>{
                        this.state.value
                    }
                    </Text>
                </View>*/}
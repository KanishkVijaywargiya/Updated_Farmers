import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../Components/Header.js';
import * as firebase from 'firebase';

import GridImage from '../Components/GridImages.js';

const { width } = Dimensions.get('window');

export default class FruitScreen extends Component {

    state = {
        fruitlist: [],
    }
    componentDidMount() {
        this.fruitslist()
    }

    fruitslist = async () => {
        var listref = await firebase.database().ref("fruits/").on("value", dataSnapshot => {
            let val = dataSnapshot.val();
            console.log('value:: ', val);

            if (val !== null) {
                let fruitsList = Object.values(val);
                this.setState({
                    fruitlist: fruitsList
                })
            } else {
                this.setState({
                    fruitlist: []
                })
            }
            console.log("VegeList::", this.state.fruitlist);
        })
    }
    render() {
        return (
            <View style={{ backgroundColor: '#EAF0F1', flex: 1 }}>
                <Header title='Fruits' color='#75DA8B' />
                <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, letterSpacing: 1, color: '#121212' }}>What kind of plant you would like to grow?</Text>
                <Text style={{ color: '#B8BECE', textTransform: 'uppercase', fontWeight: '600', fontSize: 15, marginLeft: 20, marginTop: 10, marginBottom: 10 }}>Fruits</Text>
                <ScrollView style={{ marginTop: 10 }}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {this.state.fruitlist.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('DetailScreen', { content: item })}>
                                <GridImage image={{ uri: item.image }} text={item.name} width={width / 3 - 10} para='No. of days' />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

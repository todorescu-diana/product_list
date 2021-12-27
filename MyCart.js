import React, { Component }  from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {
    TouchableHighlight,
    TextInput,
} from 'react-native';

export default class MyCart extends Component {
    handleAddPress = () => {
        this.props.navigation.navigate('list');
    }

    render(){
        return (
            <View>
                <Text>Cart</Text>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                >
                    <Text>GoBack</Text>
                </TouchableHighlight>
            </View>
        );  
    }
}
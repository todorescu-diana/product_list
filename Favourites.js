import React, { Component }  from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductCard from './ProductCard';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F0FCE2'
      },
    header: {
        padding: 20,
        margin: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      text: {
        textAlign: 'center',
        color: '#080A05',
        fontSize: 22,
        padding: 7,
      },
  });

  const FavouritesHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>
            Favourites
        </Text>
      </View>
    );
  };

export default class Favourites extends Component {
    handleAddPress = () => {
        this.props.navigation.navigate('list');
    }

    render(){
        return [
            <FlatList
            numColumns={2}
            style = {styles.list}
            ListHeaderComponent = {FavouritesHeader}
            />,
                <ActionButton
                    onPress={this.handleAddPress}
                    renderIcon={() => (<Icon size={24} color="white" name="caretleft"/>)}
                    buttonColor = "#242820"
                    key = "fab"
                >
                </ActionButton>
        ];  
    }
}
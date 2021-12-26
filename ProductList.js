import React, { Component }  from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductCard from './ProductCard';
/*
const products = [
    {
      "title": "title1",
      "price": "price1",
      "id": "05dafc66-bd91-43a0-a752-4dc40f039144"
    },
    {
      "title": "title2",
      "price": "price2",
      "id": "05da3c66-bd91-43a0-a752-4dc40f039144"
    },
    {
      "title": "title3",
      "price": "price3",
      "id": "05dafc66-rd91-43a0-a752-4dc40f039144"
    },
    {
      "title": "title4",
      "price": "price4",
      "id": "05dafc66-bd91-43a0-a752-4dc400039144"
    }
  ]
*/

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

  const ListHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>
            Product List
        </Text>
      </View>
    );
  };

  const IMAGES = [
    require('./assets/images/1.jpg'),
    require('./assets/images/2.jpg'),
    require('./assets/images/3.jpg'),
    require('./assets/images/4.jpg'),
  ];

export default class ProductList extends Component {

    state = {
        products: [],
        images: IMAGES
    }

    componentDidMount() {
        const products = require('./db.json').products
        .map(ph => ({...ph, image: IMAGES[ph.id]}));
    
        this.setState({ products });
    }

    render() {
        return (
        <FlatList
        numColumns={2}
        style = {styles.list}
        key = 'flatlist'
        data = {this.state.products}
        renderItem = {({ item }) => <ProductCard product = {item}/>}
        keyExtractor = {item => item.id}
        ListHeaderComponent = {ListHeader}
        />
        );
    }
}
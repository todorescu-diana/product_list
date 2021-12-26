import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        margin: 5,
        marginTop: 5,
        marginBottom: 5,
      },
      cardHeader: {
        flex: 0.5,
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      title: {
        //backgroundColor: 'red',
        width: '70%',
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'left',
      },
      price: {
        fontWeight: '300',
        fontSize: 15,
        color: '#bdbdbd',
        textAlign: 'right',
      },
      photoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
      },
      photo: {
        width: '25%',
        flex: 1,
      },
});

export default function ProductCard({product}) {

    return(
        <View style = {styles.card}>
            <View style = {styles.photoContainer}>
                <View style = {styles.photo}>

                </View>
            </View>
                <View style = {styles.cardHeader}>
                <View style = {styles.title}>
                    <Text >{product.title}</Text>
                </View>
                 <View style = {styles.price}>
                    <Text >${product.price}</Text>
                </View>
            </View>
        </View>
    );
}

ProductCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    })
}
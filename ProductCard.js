import React, {useEffect} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import PropTypes from 'prop-types';

import FavouriteButton from './FavouriteButton';

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
      cardHeaderHolder: {
        flexDirection: 'row',
        alignItems: 'stretch',
      },
      cardHeader: {
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width:'30%',
      },
      title: {
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
        paddingLeft: 5,
        paddingRight: 5,
      },
      photo: {
        flex: 1,
        borderWidth:2,
        resizeMode:'contain',
      },
      favouriteButton: {  
        paddingTop: 20,
        alignItems: 'flex-end',
        width: '70%',
      }
});

export default function ProductCard({product}) {

    //useEffect(() => {
      //  console.log(product.favourite);
    //});

    const win = Dimensions.get('window');
    const ratio = win.width/3098;

    return(
        <View style = {styles.card}>
            <View style = {styles.photoContainer}>
                <View style = {styles.photo}>
                <Image 
                source={product.image} style={{
                height: 900*ratio,
                width: '100%',
                
                }}></Image>
                </View>
            </View>
            <View style = {styles.cardHeaderHolder}> 
                <View style = {styles.cardHeader}>
                    <View style = {styles.title}>
                        <Text style = {{fontWeight :'bold'}}>{product.title}</Text>
                    </View>
                    <View style = {styles.price}>
                        <Text >${product.price}</Text>
                    </View>
                </View>
                <View style = {styles.favouriteButton}>
                <FavouriteButton product = {product}>
                </FavouriteButton>
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
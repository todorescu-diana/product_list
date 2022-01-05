import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

import PropTypes from "prop-types";

import FavouriteButton from "./FavouriteButton";
import AddToCartButton from "./AddToCartButton";
//import FastImage from 'react-native-fast-image';
//import ExpoFastImage from 'expo-fast-image';

const styles = StyleSheet.create({
  card: {
    //backgroundColor: "#fff",
    backgroundColor: "#FFFEF7",
    borderRadius: 20,
    flex: 1,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  cardHeaderHolder: {
    flexDirection: "row",
    alignItems: "stretch",
    margin: 5,
  },
  cardHeader: {
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "50%",
  },
  title: {
    textAlign: "left",
  },
  price: {
    color: "#bdbdbd",
    textAlign: "right",
  },
  photoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  photo: {
    flex: 1,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  favouriteButton: {
    paddingTop: 20,
    alignItems: "flex-end",
    width: "50%",
  },
});

export default function ProductCard({ products, handler, product }) {
  const win = Dimensions.get("window");
  const ratio = win.width / 3098;

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.photoContainer}>
        <View style={styles.photo}>
          <Image
            source={product.image}
            style={{
              height: 1500 * ratio,
              width: "100%",
            }}
            onLoad={() => setImageLoaded(true)}
          ></Image>
          {!imageLoaded && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                paddingRight: 322,
                paddingTop: 5,
              }}
            >
              <ActivityIndicator size="large" color="black" />
            </View>
          )}
        </View>
      </View>
      <View style={styles.cardHeaderHolder}>
        <View style={styles.cardHeader}>
          <View style={styles.title}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {product.title}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={{ fontSize: 20 }}>${product.price}</Text>
          </View>
        </View>
        <View style={styles.favouriteButton}>
          <FavouriteButton
            products={products}
            handler={handler}
            product={product}
          ></FavouriteButton>
          <AddToCartButton
            products={products}
            handler={handler}
            product={product}
          ></AddToCartButton>
        </View>
      </View>
    </View>
  );
}

ProductCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

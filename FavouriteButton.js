import React, { useState, useEffect, useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
} from "react-native-reanimated";
import Extrapolate from "react-native-reanimated";
import ProductList from "./ProductList";
import { StateContext } from "./App";
import { getProducts } from "./api";

/*
export default function FavouriteButton({product}) {

        const liked = useSharedValue(0);

        const outlineStyle = useAnimatedStyle(() => {
          return {
            transform: [
              {
                scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
              },
            ],
          };
        });
      
        const fillStyle = useAnimatedStyle(() => {
            return {
              transform: [{ scale: liked.value }],
              opacity: liked.value,
            };
          });

        function handleFavouritePress () {
            liked.value = withSpring(liked.value ? 0 : 1);
            product.favourite = !product.favourite;
        }
      
        return (
          <Pressable onPress={handleFavouritePress}>
            <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
              <MaterialCommunityIcons
                name={"heart-outline"}
                size={32}
                color={"black"}
              />
            </Animated.View>
      
            <Animated.View style={fillStyle}>
              <MaterialCommunityIcons name={"heart"} size={32} color={"red"} />
            </Animated.View>
          </Pressable>
        );
  };
*/

//FOR DEBUGGING - merge mai repede
export default function FavouriteButton({ handler, product }) {
  const { products, setProducts } = useContext(StateContext);

  function handleFavouriteButton() {
    //console.log("check1");
    product.favourite = !product.favourite;
    handler({ product });
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }

  return (
    <Pressable onPress={handleFavouriteButton} style={{ padding: 10 }}>
      <MaterialCommunityIcons
        name={product.favourite ? "heart" : "heart-outline"}
        size={32}
        color={product.favourite ? "red" : "black"}
      />
    </Pressable>
  );
}

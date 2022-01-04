import React, { useContext } from "react";
import { LayoutAnimation, Pressable, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { StateContext } from "./App";
import { getProducts } from "./api";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
} from "react-native-reanimated";

import TouchableScale from "react-native-touchable-scale";

export default function AddToCartButton({ handler, product }) {
  const { products, setProducts } = useContext(StateContext);

  function handleAddToCartButton() {
    //console.log("check1");
    product.cart = !product.cart;
    handler({ product });
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
    if (product.cart == false) LayoutAnimation.configureNext(layoutAnimConfig);
  }
  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  return (
    <TouchableScale
      style={{ padding: 10 }}
      onPress={handleAddToCartButton}
      activeScale={0.4}
      tension={100}
    >
      <Fontisto
        name={
          product.cart == false
            ? "shopping-basket-add"
            : "shopping-basket-remove"
        }
        size={26}
        color={product.cart == false ? "black" : "#4A5D54"}
      />
    </TouchableScale>
  );
}

//style={({pressed}) => [{ borderRadius: 5, padding: 10, backgroundColor: pressed? 'rgba(27, 70, 49, 0.54)': 'white' }]}

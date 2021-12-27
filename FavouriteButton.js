import React, { useState, useEffect } from "react";
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
export default function FavouriteButton({ products, handler, product }) {
  const [liked, setLiked] = useState(false);

  function handleFavouritePress() {
    () => setLiked((isLiked) => !isLiked);
    console.log("check1");
    product.favourite = !product.favourite;
    handler({...products, product});
    //console.log(product);
  }

  return (
    <Pressable onPress={handleFavouritePress}>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "red" : "black"}
      />
    </Pressable>
  );
}

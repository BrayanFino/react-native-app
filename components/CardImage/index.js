import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.cardImage}
      onPress={() => navigation.navigate("ImageScreen", { image })}
    >
      <Image
        source={{ uri: image.src.small }}
        style={{ height: 180, width: "100%" }}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardImage: {
    display: "flex",
    width: "50%",
    margin: 4,
    justifyContent: "space-between",
    backgroundColor: "#2c292c",
    objectFit: "contain"
  },
});

export default CardImage;

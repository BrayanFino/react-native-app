import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-elements";

const ImageScreen = ({ route }) => {
  const { image } = route.params;

  const handlePress = () => {
    console.log("Profile");
  };

  return (
    <View style={styles.headerView}>
      <Image source={{ uri: image.src.medium, height: 350 }} />
      <View
        style={{
          display: "flex",
          paddingVertical: 18,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            title={image.photographer
              .split(" ")
              .map((init) => init[0])
              .join("")
              .toUpperCase()}
            containerStyle={{ backgroundColor: "red" }}
            rounded
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.textView}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button title="Download" buttonStyle={{ backgroundColor: "#229783" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#0d0d0d",
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  textView: {
    color: "#fff",
    fontWeight: "bold",
    marginStart: 7,
    fontSize: 18,
  },
});

export default ImageScreen;

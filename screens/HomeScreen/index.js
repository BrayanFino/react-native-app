import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../../api/pexels";
import ImageList from "../../components/ImageList";
import { Input, Button } from "react-native-elements";

const HomeScreen = ({ openSearch }) => {

  const [pothos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadingImage = async (searchTerm) => {
    const res = await getImages(searchTerm);
    setPhotos(res?.data.photos);
  };

  const handleSearch = async () => {
    await loadingImage(searchTerm);
  };

  useEffect(() => {
    loadingImage();
  }, []);

  return (
    <>
      {openSearch && (
        <View style={styles.searchSection}>
          <Input
            leftIcon={{ type: "FontAwesome", name: "search", color: "#fff" }}
            placeholder="Search a term"
            style={styles.input}
            leftIconContainerStyle={styles.serachLefIcon}
            inputContainerStyle={styles.searchInput}
            onChangeText={(value) => setSearchTerm(value)}
          />
          <Button
            title="Search"
            buttonStyle={styles.buttonSearch}
            onPress={() => handleSearch()}
          />
        </View>
      )}
      <View style={styles.container}>
        <Text style={styles.results}>1000 results</Text>
        <ImageList photos={pothos} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
  },
  results: {
    color: "#fff",
    textAlign: "right",
    width: "100%",
  },
  searchInput: {
    backgroundColor: "#2c292c",
    borderBottomWidth: 0,
    paddingHorizontal: 4,
    marginTop: 15,
  },
  searchSection: {
    backgroundColor: "#0d0d0d",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: "#fff",
  },
  buttonSearch: {
    backgroundColor: "#229783",
    marginBottom: 15,
  },
  serachLefIcon: {
    paddingStart: 10,
    marginRight: 7,
  },
});

export default HomeScreen;

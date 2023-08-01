import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import { Image, StyleSheet, Text } from "react-native";
import pexelLogo from "./assets/pexels.png";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => <Image source={pexelLogo} style={style.logo} />,
            headerRight: () => (
              <Text
                style={{ color: "#fff", fontWeight: 500 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: "Pixels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0d0d0d",
            },
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            title: "Pixels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0d0d0d",
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  },
});

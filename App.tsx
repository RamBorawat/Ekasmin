import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const App = () => {
  const [activePage, setActivePage] = useState("home");

  const pages = [
    {
      title: "Home",
      component: () => <Text>Home</Text>,
    },
    {
      title: "About",
      component: () => <Text>About</Text>,
    },
    {
      title: "Contact",
      component: () => <Text>Contact</Text>,
    },
  ];

  // const Stack = createStackNavigator(
  //   {
  //     Home: {
  //       screen: pages[0].component,
  //     },
  //     About: {
  //       screen: pages[1].component,
  //     },
  //     Contact: {
  //       screen: pages[2].component,
  //     },
  //   },
  //   {
  //     initialRouteName: "Home",
  //   }
  // );

  return (
    // <Stack.Navigator />
    <View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navLink: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  navLinkText: {
    color: "#000000",
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
});

export default App;
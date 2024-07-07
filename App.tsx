import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { AppProvider } from './src/navigation/AppContext';
import { StatusBar, StyleSheet } from 'react-native';
const App = () => {
  return (
    <AppProvider>
      <StatusBar backgroundColor={'red'} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppProvider>
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
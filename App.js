import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Coin from './src/screens/Coin';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  CoinScreen: { screen: Coin }
});

const App: () => React$Node = () => {
  return (
    <AppNavigator />
  );
};

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FetchExample from './components/FetchExample';
import ProvideAddress from './components/ProvideAddress';
import FetchRestaurants from './components/FetchRestaurants';
import FetchMenu from './components/FetchMenu';
import GoToCart from './components/GoToCart';

const MainNavigator = createStackNavigator({
  Home: FetchExample,
  ProvideAddress: ProvideAddress,
  FetchRestaurants: FetchRestaurants,
  FetchMenu: FetchMenu,
  GoToCart: GoToCart
});

export default createAppContainer(MainNavigator);

console.disableYellowBox = true; 

// export default function App() {
//   const [response, setResponse] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://192.168.1.124:8080/restaurant?location=1000');
//       const jsonResponse = await response.json();
//       setResponse(JSON.stringify(jsonResponse));
//     };

//     fetchData();
//   })

//   return(
//     <Text>{response}</Text>
//   )
//   }

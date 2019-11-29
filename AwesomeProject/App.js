/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
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

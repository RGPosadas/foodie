/**
 * @format
 */

import {AppRegistry, Text, View, Navigator} from 'react-native';
import React, {Component} from 'react';

import ProvideAddress from './components/ProvideAddress';
import FetchRestaurants from './components/FetchRestaurants';
import FetchMenu from './components/FetchMenu';
import GoToCart from './components/GoToCart';


export default class AwesomeProject extends Component{
    renderScene(route, navigator){
        switch(route.id){
            case 'fetchRestaurants':
                return (<FetchRestaurants navigator={navigator} title="fetchRestaurants" />)
            case 'fetchMenu':
                return (<FetchMenu user={route.user} navigator={navigator} title="fetchMenu" />)
        }
    }

    render(){
        return(
            <Navigator
                initialRoute={{id: 'restaurants'}}
                renderScene={this.renderScene}
                configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

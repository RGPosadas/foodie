import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View} from "react-native";

export default class GoToCart extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    render(){

        const {navigate} = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Cart Screen</Text>
            </View>
        );
    }
};

import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View} from "react-native";

export default class FetchMenu extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true};

        this.cartItems = [
            {
                name: 'First Item',
                price: 10,
            },
            {
                name: 'Second Item',
                price: 5,
            },
            {
                name: 'Third Item',
                price: 8,
            },
        ];
    }

    render(){

        const {navigate} = this.props.navigation;
        const resto = this.props.navigation.getParam("menu");

        return (
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Fetch Menu {JSON.stringify(resto)}</Text>
                <Button
                    title="GoToCart"
                    onPress={() => navigate('GoToCart')}
                />
            </View>
        );
    }
};

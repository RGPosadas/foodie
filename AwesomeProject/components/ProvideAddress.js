import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View} from "react-native";

export default class ProvideAddress extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    render(){

        const {navigate} = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Provide Address</Text>
                <Button
                    title="FetchRestaurants"
                    onPress={() => navigate('FetchRestaurants')}
                />
            </View>
        );
    }
};

import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View} from "react-native";

export default class FetchMenu extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
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

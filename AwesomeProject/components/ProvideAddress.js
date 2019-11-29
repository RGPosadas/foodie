import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View, TextInput} from "react-native";

export default class ProvideAddress extends Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            text: "",
         }
    }

    render(){

        const {navigate} = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Provide Address</Text>
                <TextInput
                          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                          placeholder="Input Address here"
                          onChangeText={(text) => this.setState({text})}
                          value={this.state.text}
                 />
                <Button
                    title="FetchRestaurants"
                    onPress={() => this.props.navigation.navigate('FetchRestaurants', {text: this.state.text})}
                />
            </View>
        );
    }
};

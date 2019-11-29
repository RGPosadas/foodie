import React, { Component } from 'react';
import {ActivityIndicator, Button, SafeAreaView, StyleSheet,Text, View, TextInput} from "react-native";

export default class ProvideAddress extends Component {

    static navigationOptions = {
        title: 'Provide Address'
    };

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
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                              placeholder="Input Address here"
                              onChangeText={(text) => this.setState({text})}
                              value={this.state.text}
                     />
                </View>
                <View>
                    <Button
                          title="Find Restaurants"
                          onPress={() => this.props.navigation.navigate('FetchRestaurants', {text: this.state.text})}
                      />
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
})

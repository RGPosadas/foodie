import React, { Component } from 'react';
import {ActivityIndicator,
        Button,
        Text,
        View,
        FlatList,
        StyleSheet,
        SafeAreaView,
        TouchableHighlight}
        from "react-native";

export default class FetchRestaurants extends Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            restaurants: []
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                alert('Data get!')
                this.setState({
                isLoading: false,
                dataSource: responseJson, //Need to modify after getting real JSON
                });
             },
            )
            .catch((error) =>{
                console.error(error);
            });
    }

    _onPress(){
        alert("you pressed")
    }

    render(){

        const {navigate} = this.props.navigation;

        return (
        <SafeAreaView style={styles.container}>
                 <View style={styles.container}>
                        <FlatList
                          data={this.state.dataSource}
                          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                          //keyExtractor = {({id}, index) => id}
                        />
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Provide Address</Text>
                    <Button
                        title="FetchMenu"
                        onPress={() => navigate('FetchMenu')}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

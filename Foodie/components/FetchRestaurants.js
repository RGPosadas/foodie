import React, { Component, useState, useEffect } from 'react';
import {ActivityIndicator,Button, Text, View, FlatList, StyleSheet, SafeAreaView, TouchableHighlight} from "react-native";

import listresto from '../listresto.json'; //TO REMOVE AFTER CONNECTING TO BACKEND

export default class FetchRestaurants extends Component {

  static navigationOptions = {
        title: 'Restaurants Near You'
    };

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            menu: "",
        }

    }

    // function getRestaurants(){
    //     const [response, setResponse] = useState(null);
    //     useEffect(() => {
    //         const fetchData = async () => {
    //         const response = await fetch('http://192.168.1.124:8080/restaurant?location=1000');
    //         const jsonResponse = await response.json();
    //         setResponse(JSON.stringify(jsonResponse));
    //         };

    //         fetchData();
    //     })
    // }
// UNCOMMENT WHEN CONNECTING TO REAL JSON

   componentDidMount(){
       fetch('http://192.168.1.124:8080/restaurant?location=1000')
           .then((response) => response.json())
           .then((responseJson) => {
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

    render(){

        const {navigate} = this.props.navigation;
        const Address = this.props.navigation.getParam('text');

        return (
            <SafeAreaView style={styles.container}>
                <Text>Fetch Restaurants {JSON.stringify(Address)}</Text>
                 <View style={styles.container}>
                        <FlatList
                       data={this.state.dataSource}  // add this after having real data
                        //   data={listresto}    // REMOVE AFTER HAVING REAL DATA
                          renderItem={({item}) => {
                            return(
                                <TouchableHighlight onPress={() => this.props.navigation.navigate('FetchMenu', {menu: item.name})}
                                underlayColor='white'>
                                     <Text style={styles.item}>{item.name}</Text>
                                </TouchableHighlight>
                            )
                            }
                          }
                          keyExtractor={({id}, index) => id}
                        />
                </View>

                <View>
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

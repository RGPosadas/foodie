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

import listresto from '../listresto.json';

export default class FetchRestaurants extends Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            menu: "",
        }

    }

//    componentDidMount(){
//        fetch('https://jsonplaceholder.typicode.com/users')
//            .then((response) => response.json())
//            .then((responseJson) => {
//                this.setState({
//                isLoading: false,
//                dataSource: responseJson, //Need to modify after getting real JSON
//                });
//             },
//            )
//            .catch((error) =>{
//                console.error(error);
//            });
//    }

    render(){

        const {navigate} = this.props.navigation;
        const Address = this.props.navigation.getParam('text');

        return (
        <SafeAreaView style={styles.container}>
                <Text>Fetch Restaurants {JSON.stringify(Address)}</Text>
                 <View style={styles.container}>
                        <FlatList
//                        data={this.state.dataSource}  add this after having real data
                          data={listresto}
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

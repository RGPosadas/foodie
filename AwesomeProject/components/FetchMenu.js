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
//    const data = {foo:1, bar:2};
//
//    fetch('https://api.parse.com/1/users?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}', {
//        method: "GET",
//        headers: headers,
//    })

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
        const restaurant_id = this.props.navigation.getParam("menu");

        return (
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Fetch Menu {JSON.stringify(restaurant_id)}</Text>

                <View style={styles.container}>
                      <FlatList
//                        data={this.state.dataSource}  add this after having real data
                          data={this.cartItems}
                          renderItem={({item}) => {
                               return(
                                    <TouchableHighlight onPress={() => alert("Added") }
                                    underlayColor='white'>
                                        <Text style={styles.item}>{item.name} {item.price}</Text>
                                     </TouchableHighlight>

                                    )
                               }
                          }
                          keyExtractor={({id}, index) => id}
                      />
                </View>

                <Button
                    title="GoToCart"
                    onPress={() => navigate('GoToCart', {arrayCartItems: this.cartItems})}
                />
            </View>
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

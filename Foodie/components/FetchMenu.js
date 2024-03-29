import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View, FlatList, StyleSheet, SafeAreaView, TouchableHighlight} from "react-native";

export default class FetchMenu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };

    constructor(props){
        super(props);
        this.state ={ isLoading: true, priceTotal:0};

        this.menuItems = [
            {
                name: 'First Item: $',
                price: 10,
            },
            {
                name: 'Second Item: $',
                price: 5,
            },
            {
                name: 'Third Item: $',
                price: 8,
            },
        ];
        this.cartItems = [];
    }
   //EXAMPLE
//    const data = {foo:1, bar:2};
//
//    fetch('https://api.parse.com/1/users?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}', {
//        method: "GET",
//        headers: headers,
//    })

// UNCOMMENT WHEN CONNECTING TO REAL JSON

   componentDidMount(){
       fetch('http://192.168.1.124:8080/item?menu_id=2') //add your own ip here
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

    addToCart(item){
        this.cartItems.push(item);
        alert("Added");
        this.setState({priceTotal: this.state.priceTotal+item.price});
    };

    render(){

        const {navigate} = this.props.navigation;
        const restaurant_id = this.props.navigation.getParam("menu");

        return (
            <SafeAreaView style={styles.container}>
                <Text>Fetch Menu {JSON.stringify(restaurant_id)}</Text>

                <View style={styles.container}>
                      <FlatList
                       data={this.state.dataSource}  //add this after having real data
                        //   data={this.menuItems} //REMOVE AFTER REAL DATA IS AVAILABLE
                          renderItem={({item}) => {
                               return(
                                    <TouchableHighlight onPress={() => this.addToCart(item) }
                                    underlayColor='white'>
                                        <Text style={styles.item}>{item.name} {item.price}{'\n'}{item.description}</Text>
                                     </TouchableHighlight>

                                    )
                               }
                          }
                          keyExtractor={({id}, index) => id}
                      />
                </View>
                <View>
                    <Button
                        title="Go To Cart"
                        onPress={() => navigate('GoToCart', {arrayCartItems: this.cartItems, totalPrice: this.state.priceTotal})}
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

import React, { Component } from 'react';
import {ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";

export default class GoToCart extends Component {

    static navigationOptions = {
        title: 'Your Cart'
    };

    constructor(props){
        super(props);
        this.state ={ isLoading: true};
        this.totalPrice = 0;
    }

    componentDidMount(){
        this.cartItems = this.props.navigation.state.params.arrayCartItems;
        this.setState({isLoading: false});
    }

    render(){
        const {navigate} = this.props.navigation;
        this.totalPrice = this.props.navigation.getParam("totalprice");

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.cartItemsContainer}>

                    <FlatList
                        data={this.cartItems}
                        renderItem={({ item }) =>
                            <View style={styles.item}>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />

                </View>
                <View style={styles.footer}>
                    <View style={styles.subtotal}>
                        <View style={styles.subtotalText}>
                            <Text>Cart Subtotal:</Text>
                            <Text>${this.totalPrice}</Text>
                        </View>
                    </View>
                    <Button
                        color="#6e6e6e"
                        title="Checkout"
                    />
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cartItemsContainer:{
        flex: 8
    },
    item: {
        margin: 15,
    },
    footer: {
        flex: 2,
        width: '100%',
        backgroundColor: '#d4d4d4',
        justifyContent: 'flex-end',
    },
    subtotal: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    subtotalText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});
import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View, FlatList, StyleSheet} from "react-native";
import listresto from '../listresto.json';

export default class FetchRestaurants extends Component {

    constructor(props){
        super(props);
        this.state ={ menu:""}
    }

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={{fontSize: 40}}>Fetch Restaurants{"\n"}</Text>
                
                <FlatList 
                    data={listresto}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                    <View >
                        <Text style={{fontSize: 30, lineHeight: 50}} 
                            onPress={() =>this.props.navigation.navigate('FetchMenu', {menu: item.name})}>
                            {item.name}
                        </Text>
                    </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
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
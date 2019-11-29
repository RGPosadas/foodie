import React, { Component } from 'react';
<<<<<<< HEAD
import {ActivityIndicator, Button, Text, View, FlatList, StyleSheet} from "react-native";
import listresto from '../listresto.json';
=======
import {ActivityIndicator,
        Button,
        Text,
        View,
        FlatList,
        StyleSheet,
        SafeAreaView,
        TouchableHighlight}
        from "react-native";
>>>>>>> 2bd444f9a7069138fcb23a3d2454169370cb93a5

export default class FetchRestaurants extends Component {

    constructor(props){
        super(props);
<<<<<<< HEAD
        this.state ={ menu:""}
=======
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
>>>>>>> 2bd444f9a7069138fcb23a3d2454169370cb93a5
    }

    render(){
        const {navigate} = this.props.navigation;

        return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 2bd444f9a7069138fcb23a3d2454169370cb93a5
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
<<<<<<< HEAD
})
=======
})
>>>>>>> 2bd444f9a7069138fcb23a3d2454169370cb93a5

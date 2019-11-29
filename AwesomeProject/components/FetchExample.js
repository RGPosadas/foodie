import React, { Component } from 'react';
import {ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";

function Separator() {
    return <View style={styles.separator} />;
}

export default class FetchExample extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render(){
        const {navigate} = this.props.navigation;

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={({id}, index) => id}
                    />
                </View>
                <Separator/>
                <View>
                <Button
                    title="ProvideAddress"
                    onPress={() => navigate('ProvideAddress')}
                />
                </View>
                <Separator/>
                <View>
                    <Button
                        title="FetchRestaurants"
                        onPress={() => navigate('FetchRestaurants')}
                    />
                </View>
                <Separator/>
                <View>
                    <Button
                        title="FetchMenu"
                        onPress={() => navigate('FetchMenu')}
                    />
                </View><Separator/>
                <View>
                    <Button
                        title="GoToCart"
                        onPress={() => navigate('GoToCart')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

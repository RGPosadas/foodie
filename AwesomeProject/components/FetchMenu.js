// import React, {Component} from 'react';
// import {AppRegistry, Text, View, Button} from 'react-native';
//
// export default class FetchMenu extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: this.props.user.name,
//             email: this.props.user.email
//         }
//     }
//
//     onPress(){
//         this.props.navigator.push({
//             id:'fetchMenu'
//         });
//     }
//
//     render(){
//         return(
//         <View>
//             <Text>{this.state.name}</Text>
//             <Text>{this.state.email}</Text>
//             <Button
//                 onPress={this.onPress.bind(this)}
//                 title="Go Back"
//             />
//         </View>
//         );
//     }
// }

import React, { Component } from 'react';
import {ActivityIndicator, Button, Text, View} from "react-native";

export default class FetchMenu extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    render(){

        const {navigate} = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Provide Address</Text>
                <Button
                    title="GoToCart"
                    onPress={() => navigate('GoToCart')}
                />
            </View>
        );
    }
};

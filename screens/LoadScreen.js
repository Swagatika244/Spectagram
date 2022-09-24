import React from 'react';
import { View, Text } from 'react-native';
import firebase from "firebase";

export default class LoadScreen extends React.Component{
    componentDidMount(){

    }
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate('Dashboard');
            }else{
                this.props.navigation.navigate('SignUp');
            }
        })
    }
    render(){
        return(
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    LoadScreen
                </Text>
            </View>
        );
    }
}
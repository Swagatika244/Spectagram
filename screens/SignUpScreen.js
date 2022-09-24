import React from 'react';
import { View, Button } from 'react-native';

export default class SignUp extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title='Sign In with Google' onPress={()=>{}}/>
            </View>
        );
    }
}
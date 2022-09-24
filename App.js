import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUpScreen';
import Dashboard from './screens/Dashboard';
import LoadScreen from './screens/LoadScreen';

import firebase from 'firebase';
import {firebaseConfig} from './config';

if(firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen name = 'Dashboard' component={Dashboard}/>
        <Stack.Screen name = 'SignUp' component={SignUp} />
        <Stack.Screen name = 'LoadScreen' component={LoadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


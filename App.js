import 'react-native-gesture-handler';
//import { StatusBar } from "expo-status-bar";
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Browse from './app/screens/Browse'

//SafeAreaView add padding on the top to ensure text is within safe area

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Browse'>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options = {{title:'Welcome'}}/>
        <Stack.Screen
          name="Browse"
          component={Browse}
          options = {{title:'Browse'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

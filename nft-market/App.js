import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { Details, Home } from "./screens";


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'transparent' 
  }
}


export default function App() {
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Details">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

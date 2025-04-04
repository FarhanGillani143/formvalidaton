import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home';
import LoginForm from './LoginForm'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Home' component={Home} />
  <Stack.Screen name='LoginForm' component={LoginForm} />
</Stack.Navigator>
    </NavigationContainer>
  )
}
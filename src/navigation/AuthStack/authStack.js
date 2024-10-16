import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/authentication/Login/login';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationEnabled: true,
      }}>
     
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;

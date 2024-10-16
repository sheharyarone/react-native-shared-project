import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../AuthStack/authStack';
import AppStack from '../AppStack/appStack';
import useAuth from '../../auth/useAuth';

const Stack = createStackNavigator();

const RootStack = () => {


  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationEnabled: true,
        }}>
       {
         user ? (
          <Stack.Screen name="AppStack" component={AppStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )
       }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

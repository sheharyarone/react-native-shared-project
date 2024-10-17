import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootStack from './src/navigation/RootStack/rootStack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack/authStack';

const App = () => {
  return (
    <View style={styles.container}>
      <RootStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;

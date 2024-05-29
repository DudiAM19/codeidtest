import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStackScreen from './app-navigations';
import {useDispatch} from 'react-redux';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="App" component={AppStackScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = () => {
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;

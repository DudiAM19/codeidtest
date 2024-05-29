import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '../scenes';

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Dashboard" component={DashBoard} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;

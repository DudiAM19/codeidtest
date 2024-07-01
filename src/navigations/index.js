import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStackScreen from './app-navigations';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {ToastFailed} from '../components';
import {setIsError} from '../redux/action/movie-action';

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
  const {errorMessage} = useSelector(
    ({movieReducer}) => ({
      errorMessage: movieReducer.errorMessage,
    }),
    shallowEqual,
  );
  return (
    <NavigationContainer>
      <RootStackScreen />
      <ToastFailed
        message={errorMessage}
        onTouchEnd={() => dispatch(setIsError(undefined))}
      />
    </NavigationContainer>
  );
};

export default RootNavigator;

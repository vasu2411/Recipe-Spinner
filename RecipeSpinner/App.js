import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

// or any pure javascript modules available in npm
import { createStackNavigator ,DrawerNavigator } from 'react-navigation';

export const drawer =  DrawerNavigator({
	ForgotPassword: {
    	screen: ForgotPassword
  	},
  	Home: {
    	screen: Home
  	}
});

export default createStackNavigator({
   Login: {
    screen: Login
  },
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  Home: {
    screen: Home
  },
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';

// or any pure javascript modules available in npm
import { createStackNavigator  } from 'react-navigation';

export default createStackNavigator({
   Login: {
    screen: Login
  },
  SignIn: {
    screen: SignIn
  }

});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Login from './components/Login/Login';

// or any pure javascript modules available in npm
import { createStackNavigator  } from 'react-navigation';

export default createStackNavigator({
   Login: {
    screen: Login
  }

});

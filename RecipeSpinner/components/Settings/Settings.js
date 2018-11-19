import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Alert} from 'react-native';
import {  Card, CardItem, Icon, Right } from 'native-base';
import CardSettings from '../common/CardSettings';
import * as String from '../Utility/String';
import DrawerHeader from '../common/DrawerHeader';

  class Settings extends React.Component {

   static navigationOptions={
     header:null
   }




  render() {
    return (
      <View style={{flex:1, backgroundColor:'#ffffff'}}>
      <DrawerHeader title={String.SETTINGS}/>
      <CardSettings cardTitle='About Us' cardImage={require('../../assets/ic_user_pink.png')}/>
      <CardSettings cardTitle='My Profile' cardImage={require('../../assets/ic_user_pink.png')}/>
      <CardSettings cardTitle='Privacy Policy' cardImage={require('../../assets/ic_password_pink.png')}/>
      <CardSettings cardTitle='Terms & conditions' cardImage={require('../../assets/ic_terms.png')}/>
      <CardSettings cardTitle='Change Password' cardImage={require('../../assets/ic_password_pink.png')}/>
      <CardSettings cardTitle='Logout' cardImage={require('../../assets/ic_logout.png')}/>
       </View>

    );
  }
}

export default Settings;

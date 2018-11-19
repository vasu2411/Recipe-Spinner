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
      <CardSettings cardTitle={String.ABOUT_US} cardImage={require('../../assets/ic_user_pink.png')}/>
      <CardSettings cardTitle={String.MY_PROFILE} cardImage={require('../../assets/ic_user_pink.png')}/>
      <CardSettings cardTitle={String.PRIVACY_POLICY} cardImage={require('../../assets/ic_password_pink.png')}/>
      <CardSettings cardTitle={String.TERMS_AND_CONDITION} cardImage={require('../../assets/ic_terms.png')}/>
      <CardSettings cardTitle={String.CHANGE_PASSWORD} cardImage={require('../../assets/ic_password_pink.png')}/>
      <CardSettings cardTitle={String.LOGOUT} cardImage={require('../../assets/ic_logout.png')}/>
       </View>

    );
  }
}

export default Settings;

import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity} from 'react-native';
import styles from './LoginStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
  class Login extends React.Component {

   static navigationOptions={
     header:null
   }

   moveToSignIn(){
     this.props.navigation.navigate('SignIn', {
            itemId: 85,
            otherParam: 'Sign In',
          })
   }
   moveToSignUp(){
       this.props.navigation.navigate('SignUp', {
              itemId: 86,
              otherParam: 'Sign Up',
            })
   }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:7 , backgroundColor: COLOR_PRIMARY}} />
          <View style={{ flex:2 , backgroundColor: COLOR_WHITE}} >
            <TouchableOpacity
              style={styles.loginScreenButton}
              underlayColor='#fff'
               onPress={()=> this.moveToSignIn()}>
              <Text style={styles.loginText}>Sign In With Email</Text>
           </TouchableOpacity>
           <View style={styles.footer}>
            <Text style={{ color: 'grey' ,justifyContent: 'space-around'}} >Do not have an account? </Text><Text style={{ color: COLOR_SECONDARY ,justifyContent: 'space-around'}} onPress={()=> this.moveToSignUp()}>Sign Up</Text>
           </View>
          </View>
      </View>

    );
  }
}

export default Login

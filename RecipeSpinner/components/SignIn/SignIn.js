import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image,KeyboardAvoidingView} from 'react-native';
import styles from './SignInStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color';

class SignIn extends React.Component {

static navigationOptions={
header:null
}

onEmailChange(text) {
this.props.emailChanged(text);
}

moveToForgotPassword(){
this.props.navigation.navigate('ForgotPassword')
}

moveToHome(){
this.props.navigation.navigate('Home')
}

render() {
return (
<KeyboardAvoidingView style={styles.container }>
  <View style={{flex:3 , backgroundColor: COLOR_PRIMARY}} />
  <View style={{ flex:7 , backgroundColor: COLOR_WHITE, paddingTop:30}} >
    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./ic_email.png')} />
      <TextInput
      style={{flex:1,color:COLOR_PRIMARY,fontSize:15,paddingLeft:10}}
      placeholder="Email"
      underlineColorAndroid="transparent"
      />
    </View>

    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./ic_password.png')} />
      <TextInput
      style={{flex:1,color:COLOR_PRIMARY,fontSize:15,paddingLeft:10}}
      placeholder="Password"
      secureTextEntry={true}
      underlineColorAndroid="transparent"
      />
    </View>

    <TouchableOpacity style={styles.signInScreenButton} underlayColor='#fff'  onPress={()=> this.moveToHome()}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>

    <View style={styles.footerForgotPassword}>
      <Text style={{color:'grey',fontSize:15}} onPress={()=> this.moveToForgotPassword()}>Forgot your Password?</Text>
    </View>
  </View>
</KeyboardAvoidingView>
);
}
}

export default SignIn

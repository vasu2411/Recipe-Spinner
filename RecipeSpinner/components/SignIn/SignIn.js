import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import styles from './SignInStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color';

class SignIn extends React.Component {

static navigationOptions={
header:null
}
<<<<<<< HEAD

onEmailChange(text) {
this.props.emailChanged(text);
}

render() {
return (
<View style={styles.container }>
  <View style={{flex:3 , backgroundColor: COLOR_PRIMARY}} />
  <View style={{ flex:7 , backgroundColor: COLOR_WHITE, paddingTop:30}} >
    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./download.jpg')} />
      <TextInput
      style={{flex:1,color:COLOR_PRIMARY,fontSize:15}}
      placeholder="Email"
      underlineColorAndroid="transparent"
      />
    </View>

    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./download.jpg')} />
      <TextInput
      style={{flex:1,color:COLOR_PRIMARY,fontSize:15}}
      placeholder="Password"
      secureTextEntry={true}
      underlineColorAndroid="transparent"
      />
    </View>

    <TouchableOpacity style={styles.signInScreenButton} underlayColor='#fff' onPress={()=>this.moveToSignIn()}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>

    <View style={styles.footerForgotPassword}>
      <Text style={{color:'grey',fontSize:15}}>Forgot your Password?</Text>
    </View>
      </View>
    </View>

=======

onEmailChange(text) {
this.props.emailChanged(text);
}

render() {
return (
<View style={styles.container }>
<View style={{flex:3 , backgroundColor: COLOR_PRIMARY}} />
<View style={{ flex:7 , backgroundColor: COLOR_WHITE, paddingTop:30}} >

// Email
<View style={styles.SectionStyle}>
// <Image source={require('download.jpg' )} style={styles.ImageStyle} />
<TextInput
style={{flex:1,color:COLOR_PRIMARY,fontSize:15}}
placeholder="Email"
underlineColorAndroid="transparent"
/>
</View>

// Password
<View style={styles.SectionStyle }>
// <Image source={require('download.jpg' )} style={styles.ImageStyle} />
<TextInput
style={{flex:1,color:COLOR_PRIMARY,fontSize:15}}
placeholder="Password"
secureTextEntry={true}
underlineColorAndroid="transparent"
/>
</View>

// SignInButton
<TouchableOpacity
style={styles.signInScreenButton}
underlayColor='#fff'
onPress={()=> this.moveToSignIn()}>
<Text style={styles.signInText}>Sign In</Text>
</TouchableOpacity>

// Forgot password footer
<View style={styles.footerForgotPassword}><Text style={{ color: 'grey',fontSize:15}}> Forgot your password? </Text></View>
</View>
</View>

>>>>>>> 322fe75a7e604ba5117909552748b1f57e9ea6d1
);
}
}

export default SignIn

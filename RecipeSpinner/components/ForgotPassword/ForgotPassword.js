import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView } from 'react-native';
import styles from './ForgotPasswordStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color'

class ForgotPassword extends React.Component {

static navigationOptions={
header:null
}

moveToLogin(){
this.props.navigation.navigate('Login')
}
   componentWillMount(){
    debugger;
console.log("welcome to sign")
   }

render() {
return (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={{flex:2,backgroundColor: COLOR_PRIMARY,justifyContent:"center",alignItems:"stretch"}}>
      <Image source={require('./ic_man_forgot_password.png')} style={styles.forgotImageStyle} />
    </View>
    <View style={{flex:3,backgroundColor: COLOR_WHITE}} >
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <Text style={styles.forgotPasswordDetailText}>Enter your email below to receive your password instructions.</Text>

    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./ic_email.png')} />
      <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15,paddingLeft:10}} placeholder="Email" underlineColorAndroid="transparent"/>
    </View>
    <TouchableOpacity style={styles.sendButton} underlayColor='#fff' onPress={()=> this.moveToLogin()}>
    <Text style={styles.sendText}> Send </Text>
    </TouchableOpacity>
    </View>
</KeyboardAvoidingView >

);
}
}

export default ForgotPassword

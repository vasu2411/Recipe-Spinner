import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image,KeyboardAvoidingView,Keyboard, Dimensions} from 'react-native';
import styles from './SignInStyle';
import Toast, {DURATION} from 'react-native-easy-toast';
import  Api from '../Utility/Api';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color';
import * as String from '../Utility/String';
class SignIn extends React.Component {

  constructor(){
  super()
  this.fields = {};
  this.state={
  }
}

static navigationOptions = {
  title: 'Sign In',
  headerStyle: { backgroundColor: COLOR_PRIMARY,shadowColor: COLOR_PRIMARY,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  elevation: 0,
  },
  headerTintColor: COLOR_WHITE,
};

moveToForgotPassword(){
  this.props.navigation.navigate('ForgotPassword', {
         itemId: 86,
         otherParam: '',
       })
}

validate(){
 Keyboard.dismiss();
 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
 let msg ='';
  if(!this.fields.email){
    msg = String.EMAIL_ERROR
  }else if(!this.fields.email.match(reg)){
    msg = String.EMAIL_ERROR
  }else if(!this.fields.password){
    msg = String.PASSWORD_ERROR
  }
    if(msg){
      this.refs.toast.show(msg,2000);
 //    this.refs.toast.show(msg,2000);
    }
    else{
         Api.Login(this.fields).then(response=>{
             if(response.status == 200){
          this.moveToHome()
         }
         else{
          this.refs.toast.show(response.message,2000)
         }
       })


        // this.refs.toast.show(Api.SignUp(this.fields),2000);
       }

  }


moveToHome(){
this.props.navigation.navigate('Home')
}

render() {
return (
<KeyboardAvoidingView style={styles.container }>
  <View style={{flex:3 , backgroundColor: COLOR_PRIMARY, alignItems: 'center', justifyContent: 'center'}}>
    <Image style={{height:175, width:175}} source={require('../../assets/ic_logo512.png')}/>
  </View>
  <View style={{ flex:7 , backgroundColor: COLOR_WHITE, paddingTop:30}} >
    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./ic_email.png')} />
      <TextInput
      style={{flex:1,color:COLOR_PRIMARY,fontSize:15,paddingLeft:10}}
      placeholder="Email"
       onChangeText={(text)=>this.fields.email=text}
      underlineColorAndroid="transparent"
      />
    </View>

    <View style={styles.SectionStyle}>
      <Image style={styles.ImageStyle} source={require('./ic_password.png')} />
      <TextInput
      style={{flex:1,color:COLOR_PRIMARY,fontSize:15,paddingLeft:10}}
      placeholder="Password"
      secureTextEntry={true}
       onChangeText={(text)=>this.fields.password=text}
      underlineColorAndroid="transparent"
      />
    </View>

    <TouchableOpacity style={styles.signInScreenButton} underlayColor='#fff'  onPress={()=> this.validate()}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>

    <View style={styles.footerForgotPassword}>
      <Text style={{color:'grey',fontSize:15}} onPress={()=> this.moveToForgotPassword()}>Forgot your Password?</Text>
    </View>
  </View>
  <Toast
      ref="toast"
      style={{backgroundColor:COLOR_SECONDARY,bottom:40}}
      position='bottom'
      positionValue={50}
      opacity={0.8}
      textStyle={{color:'white'}}/>
</KeyboardAvoidingView>
);
}
}

export default SignIn

import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image,Keyboard} from 'react-native';
import styles from './SignUpStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color';
import {FIRST_NAME_ERROR ,LAST_NAME_ERROR,EMAIL_ERROR , PASSWORD_ERROR ,PASSWORD_LENGTH_ERROR,PASSWORD_MATCH_ERROR , PASSWORD_CONFIRM_ERROR} from '../Utility/String';
import Toast, {DURATION} from 'react-native-easy-toast';

  class SignUp extends React.Component {

    constructor(){
    super()
    this.fields = {};
    this.state={
    }
  }

   static navigationOptions={
     header:null
   }

   validate(){
          console.log(this.fields)
    Keyboard.dismiss();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let msg ='';
     if(!this.fields.firstName){
       msg = FIRST_NAME_ERROR
     }else if(!this.fields.lastName){
       msg =LAST_NAME_ERROR
     }else if(!this.fields.email){
       msg = EMAIL_ERROR
     }else if(!this.fields.email.match(reg)){
       msg = EMAIL_ERROR
     }else if(!this.fields.password){
       msg = PASSWORD_ERROR
     }else if(this.fields.password.length<6){
       msg = PASSWORD_LENGTH_ERROR
     }else if(this.fields.password !== this.fields.confirmPassword){
       msg = PASSWORD_MATCH_ERROR
     }
   if(msg){
     console.log("fdfdfd "+msg)
    this.refs.toast.show(msg,2000);
   }
   console.log(msg)
   }

moveToSignIn(){
       this.props.navigation.navigate('ForgotPassword')
   }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image source={require('../../assets/download.jpg')} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="First Name" underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.firstName=text}/>
        </View>
        <View style={styles.SectionStyle}>
          <Image source={require('./download.jpg')} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Last Name" underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.lastName=text}/>
        </View>

        <View style={styles.SectionStyle}>
          <Image source={require('./download.jpg' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Email" underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.email=text}/>
        </View>

        <View style={styles.SectionStyle }>
          <Image source={require('./download.jpg' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Password" secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.password=text}/>
        </View>

        <View style={styles.SectionStyle }>
          <Image source={require('./download.jpg' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Confirm Password" secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(text)=>this.fields.confirmPassword=text}/>
        </View>

        <TouchableOpacity onPress={()=>this.validate()}
      style={styles.signInButton}
      underlayColor='#fff'>
        <Text style={styles.signInText}> Send </Text>
                <Toast
                    ref="toast"
                    style={{backgroundColor:COLOR_SECONDARY}}
                    position='top'
                    positionValue={200}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />
        </TouchableOpacity>

      </View>

    );
  }
}
export default SignUp

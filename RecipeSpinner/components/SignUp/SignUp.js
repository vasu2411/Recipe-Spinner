import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import styles from './SignUpStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color';

  class SignUp extends React.Component {

   static navigationOptions={
     header:null
   }
   
moveToSignIn(){
       this.props.navigation.navigate('ForgotPassword')
   }
   
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image source={require('../../assets/download.jpg')} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="First Name" underlineColorAndroid="transparent"/>
        </View>
        <View style={styles.SectionStyle}>
          <Image source={require('./download.jpg')} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Last Name" underlineColorAndroid="transparent"/>
        </View>
        <View style={styles.SectionStyle}>
          <Image source={require('./download.jpg')} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="First Name" underlineColorAndroid="transparent"/>
        </View>

        <View style={styles.SectionStyle}>
          <Image source={require('./download.jpg' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Email" underlineColorAndroid="transparent" />
        </View>

        <View style={styles.SectionStyle }>
          <Image source={require('./download.jpg' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Password" secureTextEntry={true} underlineColorAndroid="transparent"/>
        </View>

        <View style={styles.SectionStyle }>
          <Image source={require('./download.jpg' )} style={styles.ImageStyle} />
          <TextInput style={{flex:1,color:COLOR_PRIMARY,fontSize:15}} placeholder="Confirm Password" secureTextEntry={true} underlineColorAndroid="transparent"/>
        </View>

        <TouchableOpacity style={styles.signInButton} underlayColor='#fff'>
          <Text style={styles.signInText}> Send </Text>
        </TouchableOpacity>

      </View>

    );
  }
}



export default SignUp




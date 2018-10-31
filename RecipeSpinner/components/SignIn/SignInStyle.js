import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color'
export default StyleSheet.create({
container: {
flex: 1
},
SectionStyle: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
borderWidth: .5,
borderColor: COLOR_SECONDARY,
height: 40,
borderRadius: 5 ,
marginLeft: 20,
marginRight:20,
marginTop:20
},
ImageStyle: {
padding: 10,
margin: 5,
height: 15,
width: 15,
resizeMode : 'stretch',
alignItems: 'center',
marginLeft: 10
},
signInScreenButton:{
marginRight:20,
marginLeft:20,
marginTop:30,
paddingTop:15,
paddingBottom:15,
backgroundColor: COLOR_SECONDARY,
borderRadius:5,
alignItems:"center",
borderWidth: 1,
borderColor: '#fff'
},
signInText:{
color:COLOR_WHITE,
textAlign:'center',
paddingLeft : 10,
paddingRight : 10
},
footerForgotPassword:{
position: 'absolute', marginBottom:25, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
}
})

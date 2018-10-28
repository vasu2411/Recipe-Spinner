import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color'
export default StyleSheet.create({
  container: {
      flex: 1
  },
   loginScreenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: COLOR_SECONDARY,
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:COLOR_WHITE,
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  footer:{
    position: 'absolute', marginBottom:20, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
  }
})
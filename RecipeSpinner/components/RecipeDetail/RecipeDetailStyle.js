import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE,COLOR_GREY} from '../Utility/color'
export default StyleSheet.create({
ImageStyle: {
height: 275,
width: '100%',
alignItems: 'center',
resizeMode : 'cover',
},
footerForgotPassword:{
position: 'absolute', marginBottom:25, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
},
RecipeTitleStyle: {
 color: COLOR_PRIMARY,
 fontSize: 20,
 paddingTop: 10,
 paddingLeft: 15,
 fontWeight: '600',
 paddingRight: 15,
},
SubtitleStyle: {
 color: COLOR_PRIMARY,
 fontSize: 20,
 paddingTop: 10,
 paddingLeft: 15,
 fontWeight: '600',
 paddingRight: 15,
},
play: {
position: 'absolute',
},
DetailStyle: {
 color: COLOR_GREY,
 fontSize: 14,
 paddingTop: 5,
 paddingLeft: 15,
 fontWeight: '500',
 paddingRight: 15,
}
})

import { StyleSheet } from 'react-native'
import {COLOR_PRIMARY,COLOR_SECONDARY,COLOR_WHITE} from '../Utility/color'
export default StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLOR_PRIMARY,
  },
  textStyle:{
    fontSize: 26,
    color: COLOR_SECONDARY,
  },
})

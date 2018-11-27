import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity, Image,StatusBar} from 'react-native';
import styles from './SplashStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import {NavigationActions,StackActions} from 'react-navigation';

class Splash extends React.Component {



  constructor(props){
    super(props);
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})],
    });
    setTimeout(()=>{
      this.props.navigation.dispatch(resetAction);
    },2400)
  }

   static navigationOptions={
     header:null
   }

  render() {
    return (
      <View style={styles.container}>
       <StatusBar
     backgroundColor={COLOR_PRIMARY}
     barStyle="light-content"
   />
        <Image source={require('../../assets/appIcon.png')}/>
        <Text style={styles.textStyle}>Recipe Spinner</Text>
      </View>

    );
  }
}

export default Splash

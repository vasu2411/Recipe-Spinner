import React from 'react';
import { View, TouchableOpacity, Text, Image,Alert } from 'react-native';
import { Card, CardItem, Icon, Right } from 'native-base';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../Utility/color';
import styles from './CardSettingsStyle';
import * as String from '../Utility/String'
import { withNavigation } from 'react-navigation';


class CardSettings extends React.Component{

  onLogoutClick = (cardTitle) =>{
    if(cardTitle === String.ABOUT_US || cardTitle === String.PRIVACY_POLICY || cardTitle === String.TERMS_AND_CONDITION){
    this.props.navigation.navigate('StaticPage', { title: cardTitle });
  }
else if(cardTitle === String.LOGOUT){
  // Works on both iOS and Android
Alert.alert(
  'Logout',
  'Are you sure you want to logout?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)

}
  }

  constructor(props){
  super(props);
}

  render(){
    return (

      <TouchableOpacity onPress={()=>this.onLogoutClick(this.props.cardTitle)}>
        <Card style={styles.CardStyle}>
          <CardItem>
            <Image source={this.props.cardImage} style={styles.ImageStyle} />
            <Text style={styles.CardTitleStyle}>{this.props.cardTitle}</Text>
            <Image
              source={require('../../assets/ic_right_arrow.png')}
              name="arrow-forward"
              style={styles.ArroweStyle}
            />
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}




export default withNavigation(CardSettings);

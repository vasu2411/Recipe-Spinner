import React from 'react';
import { View, TouchableOpacity, Text, Image,Alert } from 'react-native';
import { Card, CardItem, Icon, Right } from 'native-base';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../Utility/color';
import styles from './CardSettingsStyle';
import { withNavigation } from 'react-navigation';

const CardSettings = props => {
  return (

    <TouchableOpacity onPress={()=>this.onLogoutClick(props.cardTitle)}>
      <Card style={styles.CardStyle}>
        <CardItem>
          <Image source={props.cardImage} style={styles.ImageStyle} />
          <Text style={styles.CardTitleStyle}>{props.cardTitle}</Text>
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



export default withNavigation(CardSettings);

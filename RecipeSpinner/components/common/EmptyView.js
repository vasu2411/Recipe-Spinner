import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import styles from './EmptyViewStyle'
import * as String from '../Utility/String'
import { withNavigation } from 'react-navigation';

const EmptyView= (props) =>{
  return(
     <View style={styles.container}>
          <Image source={props.image}  style={styles.emptyImageStyle}/>
        <Text style={styles.textStyle}>{String.EMPTY_FAVOURITE_LIST}</Text>
        <TouchableOpacity
          style={styles.button}
          underlayColor='#fff'
           onPress={()=> props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}> {props.image}</Text>
        </TouchableOpacity>
      </View>
  );
};;
export default withNavigation(EmptyView);

import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_FRIDGE} from '../Utility/String'
import styles from './MyFridgeStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';

class MyFridge extends React.Component {
   static navigationOptions={
     header:null
   }

  render() {
    return (
      <Container>
      <DrawerHeader title={MY_FRIDGE}/>
        <Content>
          <Text> {MY_FRIDGE} </Text>
        </Content>
      </Container>
    );
  }
}

export default MyFridge

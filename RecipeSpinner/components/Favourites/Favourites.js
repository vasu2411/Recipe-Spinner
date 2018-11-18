import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {FAVOURITES} from '../Utility/String'
import styles from './FavouritesStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';

class Favourites extends React.Component {
   static navigationOptions={
     header:null
   }

  render() {
    return (
      <Container>
      <DrawerHeader title={FAVOURITES}/>
        <Content>
          <Text> {FAVOURITES} </Text>
        </Content>
      </Container>
    );
  }
}

export default Favourites
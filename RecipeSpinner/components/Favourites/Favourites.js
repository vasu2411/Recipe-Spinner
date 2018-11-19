import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {FAVOURITES} from '../Utility/String'
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';
import EmptyView from '../common/EmptyView';

class Favourites extends React.Component {
   static navigationOptions={
     header:null
   }

  render() {
    return (
      <Container>
        <DrawerHeader title={FAVOURITES}/>
        <EmptyView image={require("../../assets/ic_email.png")}/>
      </Container>
    );
  }
}

export default Favourites
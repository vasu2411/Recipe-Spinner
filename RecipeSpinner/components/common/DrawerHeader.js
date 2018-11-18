import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {withNavigation } from 'react-navigation';

const DrawerHeader= (props) =>{
  return(
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={()=>props.navigation.toggleDrawer()}/>
          </Button>
        </Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right>
        </Right>
      </Header>

  );
};;
export default withNavigation(DrawerHeader);

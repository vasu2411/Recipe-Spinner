import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_RECIPE} from '../Utility/String'
import styles from './MyRecipeStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';

class MyRecipe extends React.Component {
   static navigationOptions={
     header:null
   }

  render() {
    return (
      <Container>
      <DrawerHeader title={MY_RECIPE}/>
        <Content>
          <Text> {MY_RECIPE} </Text>
        </Content>
      </Container>
    );
  }
}

export default MyRecipe

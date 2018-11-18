import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {SETTINGS} from '../Utility/String'
import styles from './SettingsStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';

class Settings extends React.Component {
   static navigationOptions={
     header:null
   }

  render() {
    return (
      <Container>
      <DrawerHeader title={SETTINGS}/>
        <Content>
          <Text> {SETTINGS} </Text>
        </Content>
      </Container>
    );
  }
}

export default Settings
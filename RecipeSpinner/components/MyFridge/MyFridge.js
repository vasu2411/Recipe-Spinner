import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_FRIDGE} from '../Utility/String'
import styles from './MyFridgeStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';
import { TagSelect } from 'react-native-tag-select';

class MyFridge extends React.Component {
   static navigationOptions={
     header:null
   }

  render() {
	const data = [
      { id: 1, label: 'Money' },
      { id: 2, label: 'Credit card' },
      { id: 3, label: 'Debit card' },
      { id: 4, label: 'Online payment' },
      { id: 5, label: 'Bitcoin' },
    ];
    return (
      <Container>
      <DrawerHeader title={MY_FRIDGE}/>
        <Content>
          <TagSelect
          data={data}
          max={3}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        </Content>
      </Container>
    );
  }
}

export default MyFridge

import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_FRIDGE} from '../Utility/String'
import styles from './MyFridgeStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';
import { TagSelect } from 'react-native-tag-select';
import Accordion from 'react-native-collapsible/Accordion';
    const data = {
  "fruits" : [
    {
      "id":1,
      "label" : "Apple",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    }
  ],

  "vegetables" : [
    {
      "id":6,
      "label" : "Tomato",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    }
  ],  "Grocery" : [
    {
      "id":5,
      "label" : "Tomato",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    }
  ]
}

const SECTIONS = [];
Object.keys(data).forEach(function(key) {
var tifOptions = {}
    tifOptions.title =key; 
    tifOptions.content =data[key]; 
    SECTIONS.push(tifOptions)
})

class MyFridge extends React.Component {
   static navigationOptions={
     header:null
   }

state = {
    activeSections: [],
    value:data
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    const {checked}=this.state;
    return (
          <TagSelect

         // value = {this.state.value[section.title]}

          data={section.content}
          ref={(tag) => {
            this.tag = tag;
          }}
          onItemPress = {(tag)=>{
            this.selecteItem(tag)
          }}
        />
    );
  };
 
  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    //console.log(this.tag);
    return (
      <Container>
      <DrawerHeader title={MY_FRIDGE}/>
      <Accordion 
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
      <Content>
      <Button
              title="Add"
              onPress={() => {
                this.Test(this.tag.itemsSelected)
              }}
            />
      </Content>
      </Container>
    );
  }
}

export default MyFridge

import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_FRIDGE} from '../Utility/String'
import styles from './MyFridgeStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY,COLOR_GREY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';
import { TagSelect } from 'react-native-tag-select';
import Accordion from 'react-native-collapsible/Accordion';
    const data = {
  "Fruits" : [
    {
      "id":11,
      "label" : "Apple"
    },
    {
      "id":12,
      "label" : "Avocado"
    },
    {
      "id":13,
      "label" : "Banana"
    },
    {
      "id":14,
      "label" : "Bilberry"
    },
    {
      "id":16,
      "label" : "Blackberry"
    },
    {
      "id":17,
      "label" : "Blueberry"
    },
    {
      "id":18,
      "label" : "Cucumber"
    },
    {
      "id":19,
      "label" : "Grape"
    }
  ],
  "Vegetables" : [
    {
      "id":21,
      "label" : "Broccoflower"
    },{
      "id":22,
      "label" : "Carrot"
    },{
      "id":23,
      "label" : "Celery"
    },{
      "id":24,
      "label" : "Cucumber"
    },{
      "id":25,
      "label" : "Garlic"
    },{
      "id":26,
      "label" : "Ginger"
    }
  ],
  "Dairy" : [
    {
      "id":31,
      "label" : "Butter"
    },{
      "id":32,
      "label" : "Milk"
    },{
      "id":33,
      "label" : "Egg"
    },{
      "id":34,
      "label" : "Mozzarella"
    },{
      "id":35,
      "label" : "Cream"
    },{
      "id":36,
      "label" : "Yogurt"
    }
  ],
  "Meats" : [
    {
      "id":41,
      "label" : "Chicken breast"
    },{
      "id":42,
      "label" : "Bacon"
    },{
      "id":43,
      "label" : "Beef steak"
    },{
      "id":44,
      "label" : "Hot dog"
    },{
      "id":45,
      "label" : "Ham"
    }
  ],
  "Oils" : [
    {
      "id":51,
      "label" : "Vegetable oil"
    },{
      "id":52,
      "label" : "Canola oil"
    },{
      "id":53,
      "label" : "Peanut oil"
    },{
      "id":54,
      "label" : "Sunflower oil"
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
      <View style={styles.viewStyle}>
        <Text style={styles.categoryText}>{section.title}</Text>
        <View style={styles.separator}/>
      </View>
    );
  };

  _renderContent = section => {
    const {checked}=this.state;
    return (
      <View style={styles.viewStyle}>
          <TagSelect
          itemStyle={styles.subCategoryStyle}
          itemLabelStyle={styles.labelStyle}
          itemStyleSelected={styles.subCategorySelectedStyle}
          data={section.content}
          ref={(tag) => {
            this.tag = tag;
          }}/>

          <View style={styles.separator}/>
        </View>
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
      <ScrollView style={{marginBottom:60}}>
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
      </ScrollView>

       <View style={styles.footer}>
            <Text style={{ color: COLOR_WHITE ,justifyContent: 'space-around',fontSize:20}} >Save</Text>
           </View>
      </Container>
    );
  }
}

export default MyFridge

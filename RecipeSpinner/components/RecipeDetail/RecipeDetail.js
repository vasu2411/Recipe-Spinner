import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,ScrollView,Image,Linking,TouchableHighlight,StatusBar} from 'react-native';
import styles from './RecipeDetailStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'

  class RecipeDetail extends React.Component<{}> {

   static navigationOptions={
  title: 'Detail',
  headerStyle: { backgroundColor: COLOR_PRIMARY ,shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  elevation: 0,
  },
  headerTintColor: COLOR_WHITE,
   }


   constructor(props){
    super(props)

  }

  render() {
    const { navigation } = this.props; 
    return (
  <ScrollView>
  <StatusBar
     backgroundColor={COLOR_PRIMARY}
     barStyle="light-content"
   />
  <View>
  <TouchableHighlight   onPress={()=>Linking.openURL(navigation.getParam('data').details[0].video)}>
        
        <View  style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
      <Image style={styles.ImageStyle} source={{uri:navigation.getParam('data').image}} />
 

      <Image style={styles.play}  source={require('../../assets/ic_play.png')} />
      
      </View>
    </TouchableHighlight>
    <Text style={styles.RecipeTitleStyle} >{navigation.getParam('data').title}</Text>
    <Text style={styles.SubtitleStyle}>Ingredients</Text>
    <Text style={styles.DetailStyle}>
      1½ cups Raw Penne Pasta or Fusilli Pasta,
      1 teaspoon Oil, optional,
      Salt to taste,
      Tomato Pasta Sauce (made with approx. 6 large tomatoes),
      Parmesan Cheese or Feta Cheese or Mozzarella Cheese, for garnishing (optional).
    </Text>
    <Text style={styles.SubtitleStyle}>Expected Time to Cook</Text>
    <Text style={styles.DetailStyle}>{navigation.getParam('data').details[0].time}</Text>
    <Text style={styles.SubtitleStyle}>A Step by Step Guide</Text>
    <Text style={styles.DetailStyle}>{navigation.getParam('data').details[0].guide}</Text>
  </View>
  </ScrollView>
);
  }
}

export default RecipeDetail

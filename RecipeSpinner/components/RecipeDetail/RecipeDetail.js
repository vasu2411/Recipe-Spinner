import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Button,TouchableOpacity,ScrollView,Image,Linking,TouchableHighlight,StatusBar} from 'react-native';
import styles from './RecipeDetailStyle';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'

  class RecipeDetail extends React.Component {

   static navigationOptions={
  title: 'Detail',
  headerStyle: { backgroundColor: COLOR_PRIMARY ,shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  elevation: 0,
  },
  headerTintColor: COLOR_WHITE,
   }


  render() {
    return (
  <ScrollView>
  <StatusBar
     backgroundColor={COLOR_PRIMARY}
     barStyle="light-content"
   />
  <View>
  <TouchableHighlight   onPress={()=>Linking.openURL('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')}>
        
        <View  style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
      <Image style={styles.ImageStyle} source={require('../../assets/ic_food.jpg')} />
 

      <Image style={styles.play}  source={require('../../assets/ic_play.png')} />
      
      </View>
    </TouchableHighlight>
    <Text style={styles.RecipeTitleStyle} >Tomato Pasta (Pasta In Red Sauce)</Text>
    <Text style={styles.SubtitleStyle}>Ingredients</Text>
    <Text style={styles.DetailStyle}>
      1½ cups Raw Penne Pasta or Fusilli Pasta,
      1 teaspoon Oil, optional,
      Salt to taste,
      Tomato Pasta Sauce (made with approx. 6 large tomatoes),
      Parmesan Cheese or Feta Cheese or Mozzarella Cheese, for garnishing (optional).
    </Text>
    <Text style={styles.SubtitleStyle}>Expected Time to Cook</Text>
    <Text style={styles.DetailStyle}>80 Minutes</Text>
    <Text style={styles.SubtitleStyle}>A Step by Step Guide</Text>
    <Text style={styles.DetailStyle}>
      1.  Boil raw pasta according to the direction given on the package or follow the directions given below.{"\n"}{"\n"}
      2.  Boil approx. 6 cups water in a large pot/pan over medium flame. Add raw pasta, 1 teaspoon oil and salt (approx. 1 teaspoon).{"\n"}{"\n"}
      3.  Stir well and let them boil until pastas are al dente (cooked but not very soft). It will take around 10-12 minutes. Stir in between occasionally to prevent sticking.{"\n"}{"\n"}
      4.  To check whether pasta are cooked or not, bite one pasta. If it is too hard to bite or is white in the center, it is raw and requires cooking little longer. If it is slightly firm to bite, then it means it is cooked to al dente. If you want your pasta to be very soft, cook them for 2-3 minutes more once they are al dente.{"\n"}{"\n"}
      5.  Drain the water by carefully transferring the cooked pasta to large strainer (or a colander).{"\n"}{"\n"}
      6.  While pasta is cooking, you can make the red pasta sauce by following this red tomato pasta sauce recipe. Add sauce in a pan and heat it over medium flame.{"\n"}{"\n"}
      7.  Add cooked pasta and mix well. Cook for 2-3 minutes. Turn off the flame. Tomato Pasta is now ready. Garnish with grated Parmesan cheese or feta cheese or grated mozzarella cheese.{"\n"}
    </Text>
  </View>
  </ScrollView>
);
  }
}

export default RecipeDetail

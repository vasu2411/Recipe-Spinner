import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import {MY_RECIPE} from '../Utility/String'
import RecipeList from '../common/RecipeList1';
import styles from './MyRecipeStyle';
import  Api from '../Utility/Api';
import {COLOR_PRIMARY,COLOR_WHITE,COLOR_SECONDARY} from '../Utility/color'
import DrawerHeader from '../common/DrawerHeader';

class MyRecipe extends React.Component {
   static navigationOptions={
     header:null
   }

  constructor(props){
    super(props);
    this.state ={ isLoading: true,recipe:[]}
  }
  
  componentWillMount(){
        Api.recipe().then((responseJson) => {
        this.setState({
          recipe: responseJson,
          isLoading: true,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
}

renderRecipeList(){
 return this.state.recipe.map(recipe => <RecipeList key={recipe.title}  data ={recipe} style={{padding:5}}/>);
}

  render() {
        if (this.state.isLoading){
      return(
        <Container>
        <DrawerHeader title={MY_RECIPE}/>
        <Content>
        <ScrollView>
        {this.renderRecipeList()}
        </ScrollView>
          </Content>
        </Container>

      );
    }
    else{
      return(
        <Container>
        <DrawerHeader />
        <Content>
          <ActivityIndicator size="large"    color ={COLOR_SECONDARY}  style={{
            position: 'absolute' ,
            left:0,
            right:0,
            top:0,
            bottom:0

          }}/>
          </Content>
                  </Container>

      );
    }
  }
}

export default MyRecipe

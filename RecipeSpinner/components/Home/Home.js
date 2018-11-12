	import * as React from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView } from 'react-native';
import styles from './HomeStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color'
import {APP_NAME} from '../Utility/String'
import RecipeList from '../common/RecipeList';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title} from 'native-base'

  class Home extends React.Component {

   static navigationOptions={
     header:null
   }

    constructor(props){
    super(props);
    this.state ={ isLoading: true,recipe:[]}
  }


   componentWillMount(){
      return fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        

        this.setState({
          recipe: responseJson,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
}


renderRecipeList(){
 return this.state.recipe.map(recipe => <RecipeList key={recipe.title} data ={recipe} />);
}

  render(){
      return(
      	<Container>
      		<Header>
      			<Left>
      				<Button transparent>
      					<Icon name="menu"/>
      				</Button>
      			</Left>
      			<Body>
      				<Title>{APP_NAME}</Title>
      			</Body>
      			<Right>
      			</Right>
      		</Header>
      		<Content>

        <ScrollView>
        {this.renderRecipeList()}
        </ScrollView>
      		</Content>
      	</Container>
      
      );
  }
}
   


export default Home

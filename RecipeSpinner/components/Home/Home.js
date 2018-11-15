import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import styles from './HomeStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color'
import {APP_NAME} from '../Utility/String'
import RecipeList from '../common/RecipeList';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'

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

openDetailActivity(recipe){
	this.props.navigation.navigate('RecipeDetail', {
         itemId: 84,
         otherParam: '',
       })
}

  render(){
		if (this.state.isLoading){
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
					<Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF', marginBottom:50, }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="add" />
          </Fab>
      	</Container>

      );
		}
		else{
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

					<ActivityIndicator size="large"    color ={COLOR_SECONDARY}  style={{
	          position: 'absolute' ,
	          left:0,
	          right:0,
	          top:0,
	          bottom:0

	        }}/>
      		</Content>
					<Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF', marginBottom:50, }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="share" />
          </Fab>
      	</Container>

      );
		}
  }
}



export default Home

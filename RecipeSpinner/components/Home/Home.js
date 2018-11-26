import * as React from 'react';
import { Text, View, TextInput,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ActivityIndicator,StatusBar } from 'react-native';
import styles from './HomeStyle';
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color'
import {HOME} from '../Utility/String'
import RecipeList from '../common/RecipeList';
import DrawerHeader from '../common/DrawerHeader';
import  Api from '../Utility/Api';
import {Container,Content,Icon,Header,Left,Right,Button,Body,Title,Fab} from 'native-base'
import { createStackNavigator ,DrawerNavigator } from 'react-navigation';

class Home extends React.Component {

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
        <DrawerHeader title={HOME}/>
        
        <Content>
         
        <ScrollView>
        {this.renderRecipeList()}
        </ScrollView>
      		</Content>
					<Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#123456', marginBottom:50, }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('EditFridge')}>
            <Icon name="add" />
          </Fab>
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
					<Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#123456', marginBottom:50, }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('EditFridge')}>
            <Icon name="share" />
          </Fab>
      	</Container>

      );
		}
  }
}



export default Home

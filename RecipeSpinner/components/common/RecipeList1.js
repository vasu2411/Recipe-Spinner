import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,Button} from 'react-native';
import Card from './CardSection'
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color';
import { withNavigation } from 'react-navigation';
import HeartButton from '../Home/HeartButton';

const RecipeList= (props) =>{
  return(
    <TouchableOpacity onPress={()=>props.navigation.navigate('RecipeDetail')}>
    <Card>
    <View style={{width:'100%'}} >
      <View style={{position: 'absolute',
            right: 12,
            top: 7,
            zIndex: 2}}>
        </View>
    <Image style= {{
                    height: 200,
                    width: '100%',
                    alignItems: 'center',
                    resizeMode : 'cover',
                  }}
      source={{uri:props.data.image}}/>

       <TouchableOpacity style={{ height: 30,
                    width: 30,
                    position:'absolute',
                    top:0,
                    right:0,
                    backgroundcolor:'#88000000',
                    margin:10,
                    padding: 10,
          }} onPress={()=>{alert("you clicked me")}}>
          <Image source={require('../../assets/ic_close_round.png')} style={{ height: 30,
                    width: 30,
                    position:'absolute',
                    top:0,
                    right:0}}/>
        </TouchableOpacity>

    <Text style={{color: COLOR_PRIMARY,
                  fontSize: 16,
                  paddingTop: 5,
                  paddingLeft: 15,
                  fontWeight: '600',
                  paddingRight: 15}}>
      {props.data.title}</Text>
    </View>
    </Card>
    </TouchableOpacity>
  );
};;
export default withNavigation(RecipeList);

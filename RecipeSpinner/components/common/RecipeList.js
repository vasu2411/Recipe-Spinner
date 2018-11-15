import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import Card from './CardSection'
import {COLOR_PRIMARY,COLOR_WHITE} from '../Utility/color';

const RecipeList= (props) =>{
  return(
    <TouchableOpacity onPress={()=>console.log("456123jakxajkxjkk")}>
    <Card>
    <View style={{width:'100%'}} >
    <Image style= {{
                    height: 200,
                    width: '100%',
                    alignItems: 'center',
                    resizeMode : 'cover',
                  }}
      source={{uri:props.data.image}}/>

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
};

export default RecipeList;

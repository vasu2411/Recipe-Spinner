import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';


const RecipeList= (props) =>{
      return(
        <View>
        <Image style= {{
height: 200,
width: '100%',
alignItems: 'center',
resizeMode : 'cover',
}} source={{uri:props.data.image}}/>
        <Text>{props.data.title}</Text>
        </View> 
      );

};

export default RecipeList;
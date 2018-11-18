import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';
import {Content,Icon,Left,Header,Container,Button,Body,Title,Right} from "native-base"
import Home from '../Home/Home';
import MyFridge from '../MyFridge/MyFridge';
import MyRecipe from '../MyRecipe/MyRecipe';
import Favourites from '../Favourites/Favourites';
import Settings from '../Settings/Settings'
import {COLOR_PRIMARY,COLOR_SECONDARY} from '../Utility/color';
import {DrawerNavigator,DrawerItems } from 'react-navigation';
import {MY_FRIDGE,MY_RECIPE,FAVOURITES,SETTINGS} from '../Utility/String'

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body style={styles.bodyStyle}>
        <Image
          style={styles.drawerImage}
          source={require('../../assets/ic_first_name.png')} />
          <Text>Uttam Solanki</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const drawer =  DrawerNavigator({

  	Home: {
    	screen: Home,
			navigationOptions: {
        drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Image
                  source={require('../../assets/ic_home.png')}
                  style={[styles.icon,{tintColor: tintColor}]}
                />
              ),
    }
  	},
		MyFridge: {
		    	screen: MyFridge,
          navigationOptions: {
            drawerLabel: MY_FRIDGE,
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/ic_bank.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
		 },
     MyRecipe: {
          screen: MyRecipe,
          navigationOptions: {
            drawerLabel: MY_RECIPE,
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/ic_bank.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
     },
     Favourites: {
          screen: Favourites,
          navigationOptions: {
            drawerLabel: FAVOURITES,
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/ic_bank.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
     },
     Settings: {
          screen: Settings,
          navigationOptions: {
            drawerLabel: SETTINGS,
                 drawerIcon: ({tintColor}) => (
                    <Image
                      source={require('../../assets/ic_settings.png')}
                      style={[styles.icon,{tintColor: tintColor}]}
                    />
                  ),
        }
     }
},{
	initialRouteName: 'Home',
	 contentOptions: {
		 activeTintColor: COLOR_SECONDARY,
		 inactiveTintColor: COLOR_PRIMARY,
	 },
	contentComponent: CustomDrawerContentComponent
});

const styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    backgroundColor: COLOR_PRIMARY,
		paddingTop:20
  },
	bodyStyle:{
		justifyContent: 'center',
	 alignItems: 'center'
 },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  icon:{
    height:30,
    width:30,
  },

});
export default drawer;

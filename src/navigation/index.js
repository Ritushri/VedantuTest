import React, { Component } from 'react';
import {createStackNavigator,createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import Home from '../container/Screens/Home';


import Overview from '../container/Screens/Overview';
import Repositeries from '../container/Screens/Repositories';
import Stars from '../container/Screens/Stars';




const Tabs = createMaterialTopTabNavigator({
    Overview: Overview,
    Repositeries: Repositeries,
    Stars: Stars
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator({
    Overview:{
        screen: Tabs
    }
},{
    initialRouteName: 'Overview',
    contentComponent: Home,
    drawerWidth: 300
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('../assets/images/download.png')} style={{width:20,height:20}} resizeMode='contain'/>
    }else{
        return <Image source={require('../assets/images/download.png')} style={{width:20,height:20}} resizeMode='contain'/>
    }
}



const StackNavigator = createStackNavigator({
    
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{
    navigationOptions: ({ navigation }) => ({
        title: 'Git',  // Title to appear in status bar
        headerLeft: 
        <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuImage style="styles.bar" navigation={navigation}/>
            
        </TouchableOpacity>,
        
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

    })

});

//const App = createAppContainer(StackNavigator);
export default StackNavigator;



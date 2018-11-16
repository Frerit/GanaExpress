import React from "react";
import { DrawerNavigator, StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation'
import {Icon} from "native-base";


import Login from "../scenes/login";

// StackNavigator screens


// TabNavigator screens
import Home from "../scenes/home"; ;
import Splash from "../scenes/splash";


export const Stack = StackNavigator({
    Home: { screen: Home },
    Catalog: { screen: Catalog },
}, {
    initialRouteName: 'Home',
})


export const Drawer = DrawerNavigator({
    Stack: { screen: Stack },
    Tabs: { screen: Tabs }
})



export const AppNavigations = SwitchNavigator( {
    Splash: Splash,
    Login: Login,
    Drawer: Drawer
})
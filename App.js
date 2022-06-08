/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';
//import SplashScreen from 'react-native-splash-screen';  SplashScreen 추가
import Login from './src/pages/screens/LoginScreen';
import SignUp from './src/pages/screens/SignUpScreen';
import SignUpLast from './src/pages/screens/SignUpScreenLast';
import Main from './src/pages/screens/MainScreen';
import Navigation from './src/pages/navigation';
//const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {

    // useEffect(() => {     setTimeout(() => {         SplashScreen.hide();     },
    // 1000); }, [])

    return (
        <Navigation/>
    );
};

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        backgroudColor: '#fff',
        alignItems: 'center',
        justufyContent: 'center'
    }
});

export default App;

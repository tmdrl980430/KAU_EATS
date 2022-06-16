import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../screens/LoginScreen";
import SignUp from "../screens/SignUpScreen";
import SignUpLast from "../screens/SignUpScreenLast";
import Main from "../screens/MainScreen";

const Stack = createNativeStackNavigator()

const Navigation = () => {

    const [isLogIn, setIsLogin] = useState(false)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLogIn
                        ? (
                            // Screens for logged in users
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Main" component={Main}></Stack.Screen>
                            </Stack.Group>
                        )
                        : (
                            // Auth screens
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Login" component={Login}
                                setIsLogin={setIsLogin}></Stack.Screen>
                                <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
                                <Stack.Screen name="SignUpLast" component={SignUpLast}></Stack.Screen>
                            </Stack.Group>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
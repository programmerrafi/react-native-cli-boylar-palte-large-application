import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {
    OnboardingScreen,
    LoginScreen,
    JoinScreen,
    OTPScreen,
    UpdateLocationScreen
} from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="JoinScreen" component={JoinScreen} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="UpdateLocationScreen" component={UpdateLocationScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
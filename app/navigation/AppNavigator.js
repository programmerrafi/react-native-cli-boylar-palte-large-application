import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
    const user = {}
    return (
        <NavigationContainer>
            {user ? (
                <MainNavigator />
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    );
}

export default AppNavigator;
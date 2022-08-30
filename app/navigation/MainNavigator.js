import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FindDonorStackNavigator from './FindDonorStackNavigator';
import AppTabNavigator from './AppTabNavigator';
import { DetailsScreen, BloodRequestScreen, AboutUsScreen } from '../screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
            <Stack.Screen name="FindDonor" component={FindDonorStackNavigator} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="BloodRequestScreen" component={BloodRequestScreen} />
            <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;
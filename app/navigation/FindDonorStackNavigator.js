import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {FindDonorScreen, FoundDonorScreen, ContactDonorScreen} from '../screens';

const Stack = createStackNavigator();

function FindDonorStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="FindDonorScreen" component={FindDonorScreen} />
            <Stack.Screen name="FoundDonorScreen" component={FoundDonorScreen} />
            <Stack.Screen name="ContactDonorScreen" component={ContactDonorScreen} />
        </Stack.Navigator>
    )
}

export default FindDonorStackNavigator
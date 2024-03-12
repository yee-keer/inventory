import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Page/Home'
import QrCode from './Page/QrCode'
import Item from './Page/Item'
const Stack = createNativeStackNavigator();

const Page = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="QrCode" component={QrCode} options={{headerShown: false}}/>
                <Stack.Screen name="Item" component={Item} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Page;
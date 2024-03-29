import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home/home';
import MapsScreen from './screens/Maps/maps';
import UsersScreen from "./screens/Users/users";
import MapsRepositoryScreen from "./screens/Listmaps/mapsrepository";
import RegisterScreen from "./screens/Register/register";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Maps" component={MapsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Users" component={UsersScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MapsRepository" component={MapsRepositoryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

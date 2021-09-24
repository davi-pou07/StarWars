import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from 'react-navigation';
import Home from "../pages/Home";

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator> 
        </NavigationContainer>
    );
}

export default Navigator;
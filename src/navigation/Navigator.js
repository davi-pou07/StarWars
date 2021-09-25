import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import Home from "../pages/Home";
import Films from "../pages/Films";
import Peoples from "../pages/Peoples";

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
                <Drawer.Screen name="Filmes" component={Films} options={{
                    title: 'Filmes',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
                <Drawer.Screen name="Personagens" component={Peoples} options={{
                    title: 'Personagens',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
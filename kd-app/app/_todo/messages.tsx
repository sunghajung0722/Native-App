import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import BackButton from '@/components/BackButton';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Main">
                <Drawer.Screen name="BackButton" component={BackButton} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/Home';
import Reading from './screen/Reading';
import Listenning from './screen/Listenning';
import Speaking from './screen/Speaking';
import Writing from './screen/Writing';
import Translate from './screen/Translate';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Reading" component={Reading} />
        <Drawer.Screen name="Listenning" component={Listenning} />
        <Drawer.Screen name="Speaking" component={Speaking} />
        <Drawer.Screen name="Writing" component={Writing} />
        <Drawer.Screen name="Translate" component={Translate} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
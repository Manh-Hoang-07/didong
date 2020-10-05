import React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Đây là trang chủ</Text>
    </View>
  );
}

function Reading({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Đây là trang đọc</Text>
    </View>
  );
}
function Listenning({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Đây là trang nghe</Text>
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export default function Tabbar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Reading" component={Reading} />
        <Drawer.Screen name="Listenning" component={Listenning} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';

import FeatherIcon from 'feather-icons-react';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class Reading extends Component {
    render() {
      return (
        <View style={{flex:1,backgroundColor:'dodgerBlue',alignItems:'center',justifyContent:'center'}}>  
          <FeatherIcon icon="close" />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  imageStyle:{
    width: 200, height: 200,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  }
});

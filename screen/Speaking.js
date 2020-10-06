/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Speak from '../images/speak.png';

export default class Speaking extends Component {
    render() {
      return (
        <View style={{flex:1,backgroundColor:'dodgerBlue',alignItems:'center',justifyContent:'center'}}>  
          <Image source={Speak}/>
          <Text style={Styles.text1}>Nhấn vào loa để nói</Text>
        </View>
      );
    }
}
const Styles = StyleSheet.create({
  text1: {
    fontSize:20,
  }
});
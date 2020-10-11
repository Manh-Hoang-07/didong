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
import Micro from '../images/micro.png';

export default class Speaking extends Component {
    render() {
      return (
        <View style={{flex:1,backgroundColor:'dodgerBlue',alignItems:'center',justifyContent:'center'}}>  
          <Image style={Styles.anh1} source={Micro}/>
          <Text></Text>
          <Text style={Styles.text1}>Nhấn vào mic để nói</Text>
        </View>
      );
    }
}
const Styles = StyleSheet.create({
  text1: {
    fontSize:20,
  },
  anh1: {
    width:'50%',
    height:'40%'
  }
});
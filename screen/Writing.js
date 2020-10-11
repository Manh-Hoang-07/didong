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
} from 'react-native';

export default class Writing extends Component {
    render() {
      return (
        <View style={{flex:1,backgroundColor:'dodgerBlue',alignItems:'center',justifyContent:'center'}}>  
          <Text>Đây là trang viết tiếng anh</Text>
        </View>
      );
    }
}
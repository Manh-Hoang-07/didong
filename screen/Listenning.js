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
  StyleSheet,ScrollView
} from 'react-native';
import RadioButtonComponent from '../components/RadioButtonComponent';
import Speak from '../images/speak.png';

const PROP = [
  {
    key: 'Đáp án 1',
    text: 'Đáp án 1',
  },
  {
    key: 'Đáp án 2',
    text: 'Đáp án 2',
  },
  {
    key: 'mĐáp án 3',
    text: 'Đáp án 3',
  },
  {
    key: 'Đáp án 4',
    text: 'Đáp án 4',
  },
];

export default class Speaking extends Component {
    render() {
      
      return (
        <View style={{flex:1,backgroundColor:'dodgerBlue',alignItems:'center',justifyContent:'center'}}>  
          <View>
            <Image source={Speak}/>
            <Text style={Styles.text1}>Nhấn vào loa để nghe</Text>
          </View>
          <ScrollView>
            <View>
              <Text>Câu hỏi 1:gbhnjmk,lcvbnkmghjokfyguhịo</Text>
              <RadioButtonComponent PROP={PROP} />
            </View>
            <View>
              <Text>Câu hỏi 2:</Text>
              <RadioButtonComponent PROP={PROP} />
            </View>
            <View>
              <Text>Câu hỏi 3:</Text>
              <RadioButtonComponent PROP={PROP} />
            </View>
          </ScrollView>
        </View>
      );
    }
}
const Styles = StyleSheet.create({
  text1: {
    fontSize:20,
  }
});
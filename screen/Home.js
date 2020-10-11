/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  Alert,
  TouchableOpacity
} from 'react-native';

import HomeComponent from '../components/HomeComponent';
import MenuImages from '../images/speak.png';
import MicroImages from '../images/micro.png';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      homes: [
        {id:1,name:'PART 1',anh:MenuImages,mau:'red'},
        {id:2,name:'PART 2',anh:MicroImages,mau:'blue'},
        {id:3,name:'PART 3',anh:MenuImages,mau:'green'},
        {id:4,name:'PART 4',anh:MicroImages,mau:'red'},
        {id:5,name:'PART 5',anh:MenuImages,mau:'blue'},
        {id:6,name:'PART 6',anh:MicroImages,mau:'green'},
        {id:7,name:'PART 7',anh:MenuImages,mau:'red'},
        {id:8,name:'PART 8',anh:MicroImages,mau:'blue'},
        {id:9,name:'PART 9',anh:MenuImages,mau:'green'},
        {id:10,name:'PART 10',anh:MicroImages,mau:'red'},
      ]
    };
  }
  render() {
    const { homes } = this.state;
  return (
    <View>
        <FlatList data={homes}
          renderItem={({ item }) => <HomeComponent home={item}/> }
          keyExtractor={ item => `${item.id}` } 
            contentContainerStyle={{paddingLeft:10,paddingRight:10}}
          />
    </View>
  )
  }
}
const styles=StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
    backgroundColor:'#fff',
    justifyContent:'center',
    paddingLeft:16,
    paddingRight:16
  }
});

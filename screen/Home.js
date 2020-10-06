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

import HomeScreen from '../components/HomeScreen';
import MenuImages from '../images/menu.png';
import MicroImages from '../images/micro.png';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      homes: [
        {id:1,name:'PART 1',anh:MenuImages},
        {id:2,name:'PART 2',anh:MicroImages},
        {id:3,name:'PART 3',anh:MenuImages},
        {id:4,name:'PART 4',anh:MicroImages},
        {id:5,name:'PART 5',anh:MenuImages},
        {id:6,name:'PART 6',anh:MicroImages},
        {id:7,name:'PART 7',anh:MenuImages},
        {id:8,name:'PART 8',anh:MicroImages},
        {id:9,name:'PART 9',anh:MenuImages},
        {id:10,name:'PART 10',anh:MicroImages},
      ]
    };
  }
  render() {
    const { homes } = this.state;
  return (
    <View>
        <FlatList data={homes}
          renderItem={({ item }) => <HomeScreen home={item}/> }
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

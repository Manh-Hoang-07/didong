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
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/HomeComponent';
import HomeScreen from './components/HomeScreen';
import Homescreen from './components/HomeScreen';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      homes: [
        {id:1,name:'PART 1'},
        {id:2,name:'PART 2'},
        {id:3,name:'PART 3'},
        {id:4,name:'PART 4'},
        {id:5,name:'PART 5'},
        {id:6,name:'PART 6'},
        {id:7,name:'PART 7'},
        {id:8,name:'PART 8'},
        {id:9,name:'PART 9'},
        {id:10,name:'PART 10'},
      ]
    };
  }
  render() {
    const { homes } = this.state;
  return (
    <View>
        {/* {homes.map(home => <HomeScreen key={home.id} home={home} />)} */}
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

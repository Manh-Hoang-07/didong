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
  StyleSheet,
  Image, Alert
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import TestHome from '../components/TestHome';
import MenuImages from '../images/speak.png';
import MicroImages from '../images/micro.png';
import Speaking from './Speaking';
export default function Lecture({navigation}){
  const DATA= [
    {id:1,name:'PART 1',anh:MenuImages,mau:'#2E8B57',navigate:Speaking},
    {id:2,name:'PART 2',anh:MicroImages,mau:'#DC143C',navigate:Speaking},
    {id:3,name:'PART 3',anh:MenuImages,mau:'#F0E68C',navigate:Speaking},
    {id:4,name:'PART 4',anh:MicroImages,mau:'#F4A460',navigate:Speaking},
    {id:5,name:'PART 5',anh:MenuImages,mau:'blue',navigate:Speaking},
    {id:6,name:'PART 6',anh:MicroImages,mau:'green',navigate:Speaking},
    {id:7,name:'PART 7',anh:MenuImages,mau:'#99CCCC',navigate:Speaking},
    {id:8,name:'PART 8',anh:MicroImages,mau:'#CC9966',navigate:Speaking},
    {id:9,name:'PART 9',anh:MenuImages,mau:'#660033',navigate:Speaking},
  ];
  return (
      <View style={{width:'100%',height:'100%',backgroundColor:'#191970'}}>
        <FlatList data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate(item.navigate)
            }}>
              <TestHome data={item} />
            </TouchableOpacity>
          )}
          keyExtractor={ item => `${item.id}`}
        />
      </View>
  );
}

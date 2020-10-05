import React from 'react';
import { Image, Text, View } from 'react-native';
import menuimages from '../images/menu.png'

const Header = (props) => {
    const { headerStyle, bgHeader } = styles;
  
    return (
      <View style = {bgHeader}>
        <Text style = { headerStyle }><Image source={menuimages} />              {props.headerText}</Text>
      </View>
    );
  };

const styles = {
    bgHeader: {
      backgroundColor: '#0288D1',
      
    },
    headerStyle: {
      fontSize: 25,
      
      margin: 10,
      color: '#fff',
    },
    imageStyle:{
      width: 30, height: 30
    }
  };

//export component để dùng ở 1 nơi khác
module.exports = Header;
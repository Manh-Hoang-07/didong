import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
 
export default class Listenning extends Component {
  render() {
      return (
      <View style={styles.container}>
        <View style={styles.p1}>
          <Text style={styles.text3}>Test complete                    20</Text>
          <Text style={styles.text3}>Point earned                     130</Text>
          <Text style={styles.text3}>Level                               Medium</Text>
        </View>
          <View style={[styles.content]}>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 1(66 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
      </View>
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  content: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 110
  },
  box: {
    width: '97%',
    height: 120,
    backgroundColor: '#c8d0d4',
    marginBottom: 5
  },
  box1: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    marginBottom: 10
  },
  text1: {
    color:'black',
    fontSize: 20
  },
  p1: {
    height:'40%'
  },
  text3: {
    fontSize:30
  }
});
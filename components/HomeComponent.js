import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';
 
export default class Home extends Component {
  render() {
      return (
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 1(66 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box2]}>
                <Text style={[styles.text1]}>PART 2(275 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box3]}>
                <Text style={[styles.text1]}>PART 3(429 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box4]}>
                <Text style={[styles.text1]}>PART 4(330 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 5(330 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box2]}>
                <Text style={[styles.text1]}>PART 6(176 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box3]}>
                <Text style={[styles.text1]}>PART 7(589 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
          </View>
        </ScrollView>
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
  box2: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    marginBottom: 10
  },
  box3: {
    width: '100%',
    height: 40,
    backgroundColor: 'yellow',
    marginBottom: 10
  },
  box4: {
    width: '100%',
    height: 40,
    backgroundColor: 'pink',
    marginBottom: 10
  },
  text1: {
    color:'black',
    fontSize: 20
  }
});
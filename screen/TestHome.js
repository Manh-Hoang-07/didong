import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Listenning from './Listenning';
import Speaking from './Speaking';
import Reading from './Reading';
import Writing from './Writing';
import Translate from './Translate';
 
function HomeScreen({ navigation }) {
    // const DATA=[
    //     {id:1,name:'Nghe',mau:'#BA55D3',navigate:Listenning},
    //     {id:2,name:'Nói',mau:'#FFB6C1',navigate:Listenning},
    //     {id:3,name:'Đọc',mau:'#FF8C00',navigate:Listenning},
    //     {id:4,name:'Viết',mau:'#BDB76B',navigate:Listenning},
    //     {id:5,name:'Dịch từ',mau:'#3CB371',navigate:Listenning}
    // ];
    return (
        <SafeAreaView style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('Listenning') }>
                <View style={styles.container}>
                    <Text style={styles.title}>Nghe</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Speaking') }>
                <View style={styles.container}>
                    <Text style={styles.title}>Nói</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Reading') }>
                <View style={styles.container}>
                    <Text style={styles.title}>Đọc</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Writing') }>
                <View style={styles.container}>
                    <Text style={styles.title}>Viết</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Translate') }>
                <View style={styles.container}>
                    <Text style={styles.title}>Dịch từ</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const HomeStack = createStackNavigator();

export default function TestHome() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Listenning" component={Listenning} />
      <HomeStack.Screen name="Speaking" component={Speaking} />
      <HomeStack.Screen name="Reading" component={Reading} />
      <HomeStack.Screen name="Writing" component={Writing} />
      <HomeStack.Screen name="Translate" component={Translate} />
    </HomeStack.Navigator>
  );
}
const styles =StyleSheet.create({
    main: {
        backgroundColor:'#666699',
        width:'100%',
        height:'100%'
    },
    title: {
        textTransform:'uppercase',
        marginBottom:8,
        fontWeight:'700',
        fontSize:24
    },
    container: {
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:16,
        backgroundColor:'#BA55D3',
        borderRadius:10
    }
});
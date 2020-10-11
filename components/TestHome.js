import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

export default function TestHome(props) {
    const {data}=props;
    return (
        <View>
            <View style={styles.container}>
                <View  style={{backgroundColor:data.mau,borderRadius:5}}><Text style={styles.title}>{data.name}</Text></View>
                <View><Text style={{color:'white'}}>Complete</Text></View>
                <View><Text style={{color:'white'}}>Correct</Text></View>
            </View>
        </View>
    );
}
const styles =StyleSheet.create({
    title: {
        textTransform:'uppercase',
        marginBottom:8,
        fontWeight:'700',
        fontSize:24,
        width:'20%',
        color:'white',
        marginLeft:10
    },
    container: {
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:10,
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
        padding:5,
        backgroundColor:'#6666CC'
    },
    barhoang: {
        width:'70%',
        backgroundColor:'red'
    }
});
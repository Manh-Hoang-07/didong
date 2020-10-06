import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import MenuImages from '../images/menu.png';

export default function HomeScreen(props) {
    const {home}=props;
    return (<TouchableOpacity onPress={() => {
        Alert.alert('Chào')
      }}>
    <View style={styles.container}>
        <Text style={styles.title}>{home.name}</Text>
        <Image style={styles.MenuImages} source={MenuImages} />
    </View>
    </TouchableOpacity>
    );
}
const styles =StyleSheet.create({
    MenuImages: {
        width:64,
        height:64
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
        backgroundColor:'red',
        borderRadius:10
    }
});
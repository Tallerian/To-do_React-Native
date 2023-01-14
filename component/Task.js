import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return(
        <View style = {styles.item}>

            <View style = {styles.itemleft}>
                <View style = {styles.square}></View>
                <Text style = {styles.Itemtext}>{props.text}</Text>
            </View>
            <View style = {styles.itemright}></View>

        </View>
    )
        
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#79F0B7',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemright: {
        width: 20,
        height: 20,
        borderColor: '#79F0B7',
        borderWidth: 2,
        borderRadius: 5,
        opacity: 0.6,

    },
    
    Itemtext: {
        maxWidth: '80%',
    },
})

export default Task
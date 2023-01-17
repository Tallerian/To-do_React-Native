import React from "react";
import { Platform ,View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const DoneTasks = (props) => {

    const tick = "✔";

    return(
        <View style = {styles.item}>

            <View style = {styles.itemleft}>
                <View style = {styles.square}></View>
                <Text style = {styles.Itemtext}>{props.text}</Text>
            </View>
            <View style = {styles.itemright}>
                <Text style = {styles.check}> ✓</Text>
            </View>

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
        backgroundColor: '#F30E0E',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemright: {
        width: 24,
        height: 23,
        borderColor: '#F30E0E',
        borderWidth: 2,
        borderRadius: 5,
        opacity: 0.6,

    },

    check:{
        position: 'relative',
        bottom: 3,
        right: 1,
        zIndex: 5,
        color: 'red',
        fontWeight: '900',
        alignContent: "center",
        opacity: 0.8,
        fontSize: 16,
        
    },
    
    Itemtext: {
        maxWidth: '80%',
    },
})

export default DoneTasks
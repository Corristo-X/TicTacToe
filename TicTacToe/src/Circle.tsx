
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicatorBase, Button, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, {Component,useState,useEffect} from 'react';
import HomeScreen from './HomeScreen';
const Circle = ()=> {
return(
    <View style={[styles.cell,{display:'flex'}]}></View>
)
}
const styles = StyleSheet.create({
  cell:{
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 10,
    borderColor: "white",
  },
});
export default Circle


      
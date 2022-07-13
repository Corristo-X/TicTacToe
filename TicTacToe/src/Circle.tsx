
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
  choose:{
    width:Dimensions.get('screen').width,
    flexDirection:'row',
    justifyContent:'space-around'
    
  },

  players:{
    flexDirection:'row',
    width:Dimensions.get('screen').width,
    justifyContent:'space-around',
    paddingBottom:20
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageback:{
    width:50,
    height:50
  },
  game:{
   
    width:100,
    height:100,
    backgroundColor:'yellow',
    borderWidth:2,
    
  },
  view:{
    flexDirection:'row'

  },
  cell:{
    
    flex: 1,
    
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
   
    borderWidth: 10,
    borderColor: "white",
  },
  cross: {
    flex: 1,
  },
  crossLine: {
    position: "absolute",
    left: "48%",
    width: 10,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crossLineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
export default Circle


      
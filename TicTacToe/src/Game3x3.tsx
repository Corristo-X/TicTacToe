
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {Component,useState,useEffect} from 'react';

const Game3x3 = () =>{

  
 
  

  

  
 

 
  
  
    return (
        <ScrollView>
    <View style={styles.container}>
     <View style={styles.view}>
        <TouchableOpacity style={styles.game}></TouchableOpacity>
        <TouchableOpacity style={styles.game}></TouchableOpacity>
        <TouchableOpacity style={styles.game}></TouchableOpacity>
     </View>
     <View style={styles.view}>
     <TouchableOpacity style={styles.game}></TouchableOpacity>
     <TouchableOpacity style={styles.game}></TouchableOpacity>
     <TouchableOpacity style={styles.game}></TouchableOpacity>

     </View>
     <View style={styles.view}>
     <TouchableOpacity style={styles.game}></TouchableOpacity>
     <TouchableOpacity style={styles.game}></TouchableOpacity>
     <TouchableOpacity style={styles.game}></TouchableOpacity>
        
     </View>
      <StatusBar style="auto" />
      
    </View>
    </ScrollView>
    
  );
  
    }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game:{
   
    width:100,
    height:100,
    backgroundColor:'yellow',
    borderWidth:2
  },
  view:{
    flexDirection:'row'

  },
});
export default Game3x3


      

import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {Component,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({navigation})=> {

  

  
    return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Game3x3')}
        style={styles.button}>
        <Text style={styles.text} >Tic Tac Toe 3x3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Tic Tac Toe 4x4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Tic Tac Toe 5x5</Text>
        </TouchableOpacity>
       
       
        
      </View>
      
      
    </View>
    
  );
  }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#489994',
    alignItems: 'center',
    justifyContent: 'center',
      width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    
  },
  headline:{
    fontSize:30,
    textAlign:'center',
  
    backgroundColor:"blue"

  },
  button:{
    marginBottom:10,
    
    width:200,
    height:100,
    borderRadius:10,
    backgroundColor:'#cbabdb'
  },
  text:{
    paddingTop:35,
    textAlign:'center',
    fontSize:20,
    fontStyle:'italic'

  }
  
});
      
export default HomeScreen
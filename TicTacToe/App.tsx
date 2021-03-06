
import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {Component,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game3x3 from './src/Game3x3';
import HomeScreen from './src/HomeScreen';


  
  const Stack = createNativeStackNavigator();

  const MyStack = () =>{
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title:'Tic Tac Toe'}}

        />
          <Stack.Screen
            name="Game3x3"
            component = {Game3x3}
            
          />
     
          
        </Stack.Navigator>
      </NavigationContainer>
    )

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

export default MyStack
      

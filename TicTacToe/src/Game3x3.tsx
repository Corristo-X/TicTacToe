
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicatorBase, Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {Component,useState,useEffect} from 'react';
import HomeScreen from './HomeScreen';




const emptyMap = [
["","",""],
["","",""],
["","",""]

]

let i=0
const Game3x3 = () =>{

 
  const [visible,setvisible] =useState(0)
  const [visible2,setvisible2] =useState(0)
  const [visible3,setvisible3] =useState(0)
  const [visible4,setvisible4] =useState(0)
  const [visible5,setvisible5] =useState(0)
  const [visible6,setvisible6] =useState(0)
  const [visible7,setvisible7] =useState(0)
  const [visible8,setvisible8] =useState(0)
  const [visible9,setvisible9] =useState(0)
 
 let posx
 let posy
 const [visible0,setvisible0]=useState(false)

const[posxy,setposxy]=useState(0)

const[showTheThingcircle,setshowTheThingcircle]=useState(false)
const[showTheThingX,setshowTheThingx]=useState(false)  

 const onPress = (posx,posy) => {

    
    if( i % 2 == 0 && posx == 0 && posy == 0)
    {
       setvisible(1)
    }
    
    if(i % 2 !== 0 && posx == 0 && posy == 0){
       setvisible(2)
    }

    if( i % 2 == 0 && posx == 0 && posy == 1)
    {
        setvisible2(1)
    }
    if(i % 2 !== 0 && posx == 0 && posy == 1){
        setvisible2(2)
    }
    if( i % 2 == 0 && posx == 0 && posy == 2)
    {
        setvisible3(1)
    }
    if(i % 2 !== 0 && posx == 0 && posy == 2){
        setvisible3(2)
    }
    if( i % 2 == 0 && posx == 1 && posy == 0)
    {
        setvisible4(1)
    }
    if(i % 2 !== 0 && posx == 1 && posy == 0){
        setvisible4(2)
    }
    if( i % 2 == 0 && posx == 1 && posy == 1)
    {
        setvisible5(1)
    }
    if(i % 2 !== 0 && posx == 1 && posy == 1){
        setvisible5(2)
    }
    if( i % 2 == 0 && posx == 1 && posy == 2)
    {
        setvisible6(1)
    }
    if(i % 2 !== 0 && posx == 1 && posy == 2){
        setvisible6(2)
    }
     if( i % 2 == 0 && posx == 2 && posy == 0)
    {
        setvisible7(1)
    }
    if(i % 2 !== 0 && posx == 2 && posy == 0){
        setvisible7(2)
    }
    if( i % 2 == 0 && posx == 2 && posy == 1)
    {
        setvisible8(1)
    }
    if(i % 2 !== 0 && posx == 2 && posy == 1){
        setvisible8(2)
    }
    if( i % 2 == 0 && posx == 2 && posy == 2)
    {
        setvisible9(1)
    }
    if(i % 2 !== 0 && posx == 2 && posy == 2){
        setvisible9(2)
    }
   
  i++
  console.log(i)
}

  useEffect(()=>{

  setshowTheThingcircle(false)
  setshowTheThingx(false)

  },[])
 


 

 
  
  
    return (
        <ScrollView>
    <View style={styles.container}>
     <View style={styles.view}>
        
     <TouchableOpacity 
        onPress={()=>onPress(posx=0,posy=0)}
        style={styles.game}>
            { visible == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
      
        
      
        <TouchableOpacity 
        onPress={()=>onPress(posx=0,posy=1)}
        style={styles.game}>
            { visible2 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible2 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>onPress( posx=0,posy=2)}
        style={styles.game}>
            { visible3 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible3 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
     </View>
     <View style={styles.view}>
     <TouchableOpacity 
        onPress={()=>onPress(posx=1,posy=0)}
        style={styles.game}>
            { visible4 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible4 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>onPress(posx=1,posy=1)}
        style={styles.game}>
            { visible5 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible5 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>onPress(posx=1,posy=2)}
        style={styles.game}>
            { visible6 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible6 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>

     </View>
     <View style={styles.view}>
     <TouchableOpacity 
        onPress={()=>onPress(posx=2,posy=0)}
        style={styles.game}>
            { visible7 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible7 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>onPress(posx=2,posy=1)}
        style={styles.game}>
            { visible8 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible8 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>onPress(posx=2,posy=2)}
        style={styles.game}>
            { visible9 == 1 &&
           <View style={[styles.cell,{display:'flex'}]}></View>
            }
            {
             visible9 == 2 &&
            <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
            }

        </TouchableOpacity>
        
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
export default Game3x3


      
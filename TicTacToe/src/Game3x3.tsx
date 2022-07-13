
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicatorBase, Button, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, {Component,useState,useEffect} from 'react';
import HomeScreen from './HomeScreen';
import Cross from './Cross'
import Circle from './Circle'

let emptyMap = [
["","",""],
["","",""],
["","",""]
]

let i=0
let a=1
const Game3x3 = (navigation) =>{

   useEffect(()=>{
    reset()

   },[])
    
  const [visible,setvisible] =useState(0)
  const [visible2,setvisible2] =useState(0)
  const [visible3,setvisible3] =useState(0)
  const [visible4,setvisible4] =useState(0)
  const [visible5,setvisible5] =useState(0)
  const [visible6,setvisible6] =useState(0)
  const [visible7,setvisible7] =useState(0)
  const [visible8,setvisible8] =useState(0)
  const [visible9,setvisible9] =useState(0)

  const [disabled,setdisabled] = useState(false)
  const [disabled2,setdisabled2] = useState(false)
  const [disabled3,setdisabled3] = useState(false)
  const [disabled4,setdisabled4] = useState(false)
  const [disabled5,setdisabled5] = useState(false)
  const [disabled6,setdisabled6] = useState(false)
  const [disabled7,setdisabled7] = useState(false)
  const [disabled8,setdisabled8] = useState(false)
  const [disabled9,setdisabled9] = useState(false)
  const [settings,setsettings] = useState(false)
  const [start,setstart] = useState(false)

 let posx
 let posy 
function reset(){
    setvisible(0)
setvisible2(0)
setvisible3(0)
setvisible4(0)
setvisible5(0)
setvisible6(0)
setvisible7(0)
setvisible8(0)
setvisible9(0)
setdisabled(false)
setdisabled2(false)
setdisabled3(false)
setdisabled4(false)
setdisabled5(false)
setdisabled6(false)
setdisabled7(false)
setdisabled8(false)
setdisabled9(false)
i=-1
a=1
emptyMap = [
    ["","",""],
    ["","",""],
    ["","",""]
    ]

}

  function set(){
    if(settings == false){
      setsettings(true)
    }
    else
    {
      setsettings(false)
    }
    gamestart()
  }
  function setplayer(){
    if(start == false){
      setstart(true)
    }
    else
    {
      setstart(false)
    }
    gamestart()
  }
  function gamestart(){
    reset()
    if(settings==false && start == false)
    {
      i=0
    }
    if(settings==false && start == true)
    {
      i=-1
    }
    if(settings==true && start == false)
    {
      i=-1
    }
    if(settings==true && start == true)
    {
      i=0
    }
  
    

  }
  
 const onPress = (posx,posy) => {
    

    if (i<=8){
    if( i % 2 == 0 && posx == 0 && posy == 0)
    {
       setvisible(1)
       emptyMap[0][0]='o'
       setdisabled(true)
    }
    
    if(i % 2 !== 0 && posx == 0 && posy == 0){
       setvisible(2)
       emptyMap[0][0]='x'
       setdisabled(true)
    }

    if( i % 2 == 0 && posx == 0 && posy == 1)
    {
        setvisible2(1)
        emptyMap[0][1]='o'
        setdisabled2(true)
    }
    if(i % 2 !== 0 && posx == 0 && posy == 1){
        setvisible2(2)
        emptyMap[0][1]='x'
        setdisabled2(true)
    }
    if( i % 2 == 0 && posx == 0 && posy == 2)
    {
        setvisible3(1)
        emptyMap[0][2]='o'
        setdisabled3(true)
        
    }
    if(i % 2 !== 0 && posx == 0 && posy == 2){
        setvisible3(2)
        emptyMap[0][2]='x'
        setdisabled3(true)
    }
    if( i % 2 == 0 && posx == 1 && posy == 0)
    {
        setvisible4(1)
        emptyMap[1][0]='o'
        setdisabled4(true)
    }
    if(i % 2 !== 0 && posx == 1 && posy == 0){
        setvisible4(2)
        emptyMap[1][0]='x'
        setdisabled4(true)
    }
    if( i % 2 == 0 && posx == 1 && posy == 1)
    {
        setvisible5(1)
        emptyMap[1][1]='o'
        setdisabled5(true)
    }
    if(i % 2 !== 0 && posx == 1 && posy == 1){
        setvisible5(2)
        emptyMap[1][1]='x'
        setdisabled5(true)
    }
    if( i % 2 == 0 && posx == 1 && posy == 2)
    {
        setvisible6(1)
        emptyMap[1][2]='o'
        setdisabled6(true)
    }
    if(i % 2 !== 0 && posx == 1 && posy == 2){
        setvisible6(2)
        emptyMap[1][2]='x'
        setdisabled6(true)
    }
     if( i % 2 == 0 && posx == 2 && posy == 0)
    {
        setvisible7(1)
        emptyMap[2][0]='o'
        setdisabled7(true)
    }
    if(i % 2 !== 0 && posx == 2 && posy == 0){
        setvisible7(2)
        emptyMap[2][0]='x'
        setdisabled7(true)
    }
    if( i % 2 == 0 && posx == 2 && posy == 1)
    {
        setvisible8(1)
        emptyMap[2][1]='o'
        setdisabled8(true)
    }
    if(i % 2 !== 0 && posx == 2 && posy == 1){
        setvisible8(2)
        emptyMap[2][1]='x'
        setdisabled8(true)
    }
    if( i % 2 == 0 && posx == 2 && posy == 2)
    {
        setvisible9(1)
        emptyMap[2][2]='o'
        setdisabled9(true)
    }
    if(i % 2 !== 0 && posx == 2 && posy == 2){
        setvisible9(2)
        emptyMap[2][2]='x'
        setdisabled9(true)
    }
} 
  i++
 
  

  if(emptyMap[0][0]=='o' && emptyMap[1][0]=='o' && emptyMap[2][0]=='o' ||
     emptyMap[0][0]=='o' && emptyMap[0][1]=='o' && emptyMap[0][2]=='o' ||
     emptyMap[1][0]=='o' && emptyMap[1][1]=='o' && emptyMap[1][2]=='o' ||
     emptyMap[2][0]=='o' && emptyMap[2][1]=='o' && emptyMap[2][2]=='o' ||
     emptyMap[0][1]=='o' && emptyMap[1][1]=='o' && emptyMap[2][1]=='o' ||
     emptyMap[0][2]=='o' && emptyMap[1][2]=='o' && emptyMap[2][2]=='o' ||
     emptyMap[0][0]=='o' && emptyMap[1][1]=='o' && emptyMap[2][2]=='o' ||
     emptyMap[2][0]=='o' && emptyMap[1][1]=='o' && emptyMap[0][2]=='o'
      )
    {
        a=2
        if(settings==true && start == false)
        {
          alert("PLAYER ONE WON")
        }
        if(settings==true && start == true){
          alert("PLAYER ONE WON")
        }
        if(settings==false && start == false)
        {
          alert("PLAYER TWO WON")
        }
        if(settings==false && start == true){
          alert("PLAYER TWO WON")
        }
        
      

        reset()
    }
    if(emptyMap[0][0]=='x' && emptyMap[1][0]=='x' && emptyMap[2][0]=='x' ||
    emptyMap[0][0]=='x' && emptyMap[0][1]=='x' && emptyMap[0][2]=='x' ||
    emptyMap[1][0]=='x' && emptyMap[1][1]=='x' && emptyMap[1][2]=='x' ||
    emptyMap[2][0]=='x' && emptyMap[2][1]=='x' && emptyMap[2][2]=='x' ||
    emptyMap[0][1]=='x' && emptyMap[1][1]=='x' && emptyMap[2][1]=='x' ||
    emptyMap[0][2]=='x' && emptyMap[1][2]=='x' && emptyMap[2][2]=='x' ||
    emptyMap[0][0]=='x' && emptyMap[1][1]=='x' && emptyMap[2][2]=='x' ||
    emptyMap[2][0]=='x' && emptyMap[1][1]=='x' && emptyMap[0][2]=='x')
    {
        a=2
        if(settings==false && start == false)
        {
          alert("PLAYER ONE WON")
        }
        if(settings==false && start == true){
          alert("PLAYER ONE WON")
        }
        if(settings==true && start == false)
        {
          alert("PLAYER TWO WON")
        }
        if(settings==true && start == true){
          alert("PLAYER TWO WON")
        }
      
        
     
        reset()
    }
    if(i==8 && a==1){
        alert("remis")
        reset()
    
      }

}
    return (
        <ScrollView>
    <View style={styles.container}>
     <View style={styles.view}>
        
     <TouchableOpacity 
        disabled={disabled}
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
        disabled={disabled2}
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
        disabled={disabled3}
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
     disabled={disabled4}
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
        disabled={disabled5}
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
        disabled={disabled6}
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
     disabled={disabled7}
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
        disabled={disabled8}
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
        disabled={disabled9}
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

     <View>
      <View style={styles.choose}>
      <Text style={{fontSize:20,paddingTop:10,paddingBottom:10}}>Choose Circle OR Cross</Text>
      </View>
      <View style={styles.players}>
      <Text style={{fontWeight:'bold'}}>PLAYER ONE</Text>
      <Text style={{fontWeight:'bold'}}>PLAYER TWO</Text>
      </View>
      <View style={styles.players}>
      <TouchableOpacity onPress={()=>set()}
      style={{width:100,height:100,backgroundColor:'orange'}}>
            {settings == false &&
        <Cross />
            }
            {settings == true &&
        <Circle/>
            }
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>set()}
      style={{width:100,height:100,backgroundColor:'orange'}}>
        {settings == false &&
        <Circle/>
        }
        {settings == true &&
        <Cross/>
        } 
      
        </TouchableOpacity>

      </View>
      <View style={styles.players}>
        {start == false &&
        <Text style={{color:'red',fontSize:15}}>Player one starts</Text>
        }
        {start == true &&
        <Text style={{color:'red',fontSize:15}}> Player two starts</Text>
        }
      </View>
      <Button
      onPress={()=>setplayer()}
        title='select the player who starts the game'
      ></Button>

     </View>
      
      
    </View>
    </ScrollView>
    
  );
  
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
export default Game3x3


      
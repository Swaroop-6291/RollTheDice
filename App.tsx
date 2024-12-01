import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps=PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
   return (
    <View>
     <Image
       style={styles.diceImage} source={imageUrl}
     />
    </View>
   )
}

const App = ():JSX.Element => {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)

  const rollTheDice=()=>{
    let randomNumber=Math.round(Math.random()*6)+1
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);

  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollTheDice} style={styles.rollDiceButton}>
        <Text style={styles.rollDiceBtnText}>Press the Button</Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  diceImage:{
    width:200,
    height:200
  },
  rollDiceButton:{
    marginTop:16,
    padding:8,
    borderWidth:2,
    borderColor:'#8c9df5'
  },
  rollDiceBtnText:{
    color:'#8c9df5',
    fontSize:18
  }
})
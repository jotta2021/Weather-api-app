import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Location from 'react-native-vector-icons/Entypo'
import Menu  from 'react-native-vector-icons/Feather'

import {} from 'expo-location'



export default function Header({city,visible}) {






  return (
    
      <View style={styles.header}>
        <Text style={styles.city}>{city}</Text>
      <Location name='location-pin' size={28} color='white'/> 

      <TouchableOpacity  >
        <View style={styles.setting}>
              <Menu name='menu' size={30} color='white'/> 
      </View>
      </TouchableOpacity>
      
      

     </View>
   

     ) 

    }



const styles = StyleSheet.create({
 
  city:{
    fontSize: 30,
  color:'white',

  alignItems:'center',
  width: 210

  },
  header:{
    margin:2,
    flexDirection:'row',
    marginTop:50,
    marginLeft: 25,
    alignItems:'center',
 
  },
  setting:{
    marginLeft: 100,
    position:'fixed'

  }
})

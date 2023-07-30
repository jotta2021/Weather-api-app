import { View,Text,StyleSheet, Button } from "react-native"
import Home from "./components/home"
import Header from "./components/header"
import {useFonts,OpenSans_400Regular,OpenSans_500Medium,OpenSans_700Bold} from '@expo-google-fonts/open-sans'
import{ ThemeProvider} from 'styled-components'
import theme from "./components/src/theme"
import { useColorScheme } from "react-native"
import { useState } from "react"



export default function App(){



    const deviceTheme = useColorScheme()
    console.log(deviceTheme)
    const themes = theme[deviceTheme]

    const [fontsLoaded] = useFonts({
        OpenSans_400Regular,OpenSans_500Medium,OpenSans_700Bold
    })
if(!fontsLoaded){
    return null
    
}

    return(

        <ThemeProvider theme={themes} style={styles.container}>
          
   <Home/>

        </ThemeProvider>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
     
  
      
      
     
      
    }
})
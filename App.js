import {useState,useEffect,useContext} from "react";
import {NavigationContainer,DefaultTheme} from "@react-navigation/native"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {View,Text,SafeAreaView} from "react-native"
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen"

import Display from "./Display"
import palette from "./constants/palette"



const welcomeTheme = {
  ...DefaultTheme.colors,
  colors:{
    background:palette.light
  }
}

export default App = () => {

 
  const [fontsLoaded] = useFonts({
    "Roboto-Bold":require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular":require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Black":require("./assets/fonts/Roboto/Roboto-Black.ttf"),
    "Lilita-bold":require("./assets/fonts/lilita/LilitaOne-Regular.ttf"),
  })
  useEffect(() => {
    async function splash() {
      await SplashScreen.preventAutoHideAsync()
    }
    splash()
  },[])
  if(!fontsLoaded) {
    return <Text>Fonts not loaded</Text>
  }else {
    SplashScreen.hideAsync()
  }
    
  return (
  <AuthProvider>
    <SafeAreaProvider>
    <NavigationContainer theme = {welcomeTheme}>
     <Display/>
    </NavigationContainer>
    </SafeAreaProvider>
  </AuthProvider>
  )
}
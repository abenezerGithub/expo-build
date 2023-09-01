import {useContext,useEffect} from "react"
import {View,ScrollView,Text,Button,TouchableOpacity, TouchableWithoutFeedback,StyleSheet,Image,useWindowDimensions,Alert} from "react-native"
import { Ionicons,AntDesign,MaterialIcons} from '@expo/vector-icons';
import SigmaSvg from "../../assets/svg/sigma.svg"
import EnglishSvg from "../../assets/svg/english.svg"
import PhysicsSvg from "../../assets/svg/physics.svg"
import AptitudeSvg from "../../assets/svg/aptitude.svg"
import ChemistrySvg from "../../assets/svg/chemistry.svg"
import CivicSvg from "../../assets/svg/civic.svg"
import BiologySvg from "../../assets/svg/biology.svg"
import F from "../../assets/svg/f3.svg"

import palette from "../../constants/palette"
import sizes from "../../constants/sizes"
import fonts from "../../constants/fonts"
import {LinearGradient} from "expo-linear-gradient"

export default Home = ({navigation}) => {
const {height,width} = useWindowDimensions();
    return (
    <View style = {styles.homePage}>
    <ScrollView style = {styles.pageContainer}>
    <View style = {styles.bodyContainer}>
    <View style = {styles.homeContainer}>
       <Card 
       width = {width} 
       height = {height}
       gradient = {["#f9655b","#ee821a"]}
       label  = "Mathmatics"
       Svg = {eachStyle =>  <SigmaSvg fill = {    
       palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       navigation = {navigation}
       />
       <Card
       width = {width} 
       height = {height}
       gradient = {["#456fe8","#19b0ec"]}
       label  = "Physics"
       Svg = {eachStyle =>  <PhysicsSvg fill = {palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       />
      <Card
       width = {width} 
       height = {height}
       gradient = {["#099773","#43b692"]}
       label  = "Chemisty"
       Svg = {eachStyle =>  <ChemistrySvg fill = {palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       />
       <Card
       width = {width}  
       height = {height}
       gradient = {["#f83d5c","#fd4b2f"]}
       label  = "English"
       Svg = {eachStyle =>  <EnglishSvg fill = {palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       />
      <Card
       width = {width} 
       height = {height}
       gradient = {["#f89999","#f6c0ba"]}
       label  = "Biology"
       Svg = {eachStyle =>  <BiologySvg fill = {palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       />
       <Card
       width = {width} 
       height = {height}
       gradient = {["#ff930f","#fff95b"]}
       label  = "Civics"
       Svg = {eachStyle =>  <CivicSvg fill = {palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       />
        <Card
       width = {width} 
       height = {height}
       gradient = {["#133a94","#919bff"]}
       label  = "Aptitude"
       Svg = {eachStyle =>  <AptitudeSvg stroke = {palette.svgFill} fill = {palette.svgFill} width = {100} height = {69} style = {[styles.mathIcon,eachStyle]}/>}
       />
     </View>
      <View style = {[{height:height/4.5,width},styles.invisibleBox]}>
     </View>
     </View>
    </ScrollView>
     <HomeButtons/>

    </View>
  )
}

const Card = ({width,height,label,navigation,Svg,gradient}) => {
 const size = (width/2) - 24;
 const handlePress = () => {
   if(navigation) navigation.navigate("Mathmatics")
 }
 
  return (
    <TouchableOpacity activeOpacity = {.8} style = {styles.subjectTouchable} onPress = {() => handlePress()} width = {size} >
    <LinearGradient  start = {{x:0,y:1}} end = {{x:1,y:0}}  colors = {gradient} style = {[styles.subjectCard,{width:size}]}>
         <Svg/>
       <Text style = {[styles.subjectLabel,{fontFamily:fonts.lilita}]}> {label}</Text>
       <View style = {styles.promotionContainer}>
      <AntDesign name = "Safety" size = {sizes.promotionLogo} style = {styles.promotionLogo} />
       </View>
       <View style = {{
         position:"absolute",
         right:5,
         top:-4,
         borderRadius:50,
         padding:2,
        backgroundColor:palette.light
       }}>
      <MaterialIcons name = "subject" size = {sizes.popupIcon} style = {{
        color:gradient[0]
      }} />
       </View>
         <View style = {{
           width:"100%",
           paddingVertical:2,
           paddingHorizontal:1
         }}>
            <Text style = {{
              color:palette.light,
              fontSize:sizes.h5,
              paddingLeft:5,
              fontFamily:fonts.bold
            }}>
               Practice
            </Text>
            <View style = {{
              flexDirection:"row",
              paddingHorizontal:1,
              justifyContent:"space-between",
              alignItems:"center",
              paddingBottom:4,
              marginTop:4,
            }}>
              <Text style = {{
                color:palette.greyish,
                fontSize:sizes.h6,
                paddingLeft:4,
                fontWeight:"bold"
              }}>
                 Daily update Questions
              </Text>
            <F width = {sizes.icon} fill = {palette.light} height = {sizes.icon - 5} style = {{marginLeft:4,fill:palette.light}}/>
          </View>
         </View>
       </LinearGradient>
      </TouchableOpacity>
    )
}


const HomeButtons = () => {
  return (
   <View style = {styles.buttonContainer}>
   <LinearGradient start = {{x:0,y:1}} end = {{x:1,y:0}}  colors = {["#456fe8","#19b0ec"]} style = {styles.buttonGradient}>
    <TouchableOpacity style = {styles.buttonOpacityContainer}>
      <View style = {styles.buttonContent}>
       <Text style = {styles.buttonText}>SUBSCRIBE</Text>
      <MaterialIcons name="wallet-membership" size = {sizes.icon} style  = {{
     color:palette.light
      }}/>
      </View>
   </TouchableOpacity>
     </LinearGradient>
     
   <LinearGradient start = {{x:0,y:1}} end = {{x:1,y:0}}  colors = {["#f83d5c","#fd4b2f"]} style = {styles.buttonGradient}>
    <TouchableOpacity style = {styles.buttonOpacityContainer}>
      <View style = {styles.buttonContent}>
       <Text style = {styles.buttonText}>SUBSCRIBE</Text>
      <MaterialIcons name="wallet-membership" size = {sizes.icon} style  = {{
     color:palette.light
      }}/>
      </View>
   </TouchableOpacity>
     </LinearGradient>
    </View>
    )
}



const styles = StyleSheet.create({
  homePage:{
    position:"relative",
    height:"100%",
    backgroundColor:palette.background
  },
  pageContainer:{
    paddingBottom:20,

  },
buttonGradient:{
    width:"100%",
    maxWidth:700,
    marginVertical:2,
    elevation:2
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bottom:0,
    left:0,
    right:4,
    padding:3,
  },
buttonOpacityContainer:{
    width:"100%",
    flex:1,
    maxWidth:700,
    paddingVertical:8,
    flexDirection:"row",
    justifyContent:"space-around",
},
buttonContent:{
  flexDirection:"row"
},
  buttonText:{
    fontFamily:"Roboto-Bold",
    color:palette.light,
    marginRight:10
  },
  
  bodyContainer:{
    justifyContent:"center",
    alignItems:"center",
    maxWidth:600
  },
    homeContainer:{
    marginHorizontal:5,
    marginTop:8,
    paddingHorizontal:5,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  subjectTouchable:{
    
  },
  subjectCard:{
   justifyContent:"center",
   alignItems:"center",
   backgroundColor:"#fff",
   margin:5,
   backgroundColor:palette.primary,
   elevation:5,
   borderRadius:2,
   borderTopRightRadius:5,
   borderTopLeftRadius:5,
   paddingTop:5,
   marginVertical:8,
  },
  mathIcon:{
    margin:8
  },
  subjectLabel:{
    marginVertical:10,
    textAlign:"center",
    color:palette.light,
    textTransform:"uppercase",
    fontSize:sizes.h4
  },
  promotionContainer:{
    position:"absolute",
    top:1,
    left:3,
    backgroundColor:"rgba(0,0,0,.08)",
    borderRadius:3,
    padding:4
  },
  promotionLogo:{
    color:palette.light
  },
  bookmarkIcon:{
    color:palette.light,
    position:"absolute",
    top:0,
    right:2,
   backgroundColor:"rgba(0,0,0,.2)",
    borderRadius:3
  },
  invisibleBox:{
  }
})
import {TouchableOpacity,View,Text,SafeAreaView,Image,StyleSheet} from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import sizes from "../../constants/sizes"
import icons from "../../constants/icons"
import fonts from "../../constants/fonts"
import palette from "../../constants/palette"

const slides = [
  {
    image:require("../../assets/img/welcome/welcome1.png"),
    title:"Freedom Learn Makes Your Life Easier...",
    detail:"detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor with our brain"},
      {
    image:require("../../assets/img/welcome/welcome2.jpg"),
    title:"Having 200,000 +  Questions in our System ",
    detail:"detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor with our brain"},
          {
    image:require("../../assets/img/welcome/welcome1.png"),
    title:"Having 200,000 +  Questions in our System ",
    detail:"detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor detail of lorem ipsum dolor with our brain"},

  ]
  
export default Welcome = ({navigation}) => {
  const buttonLabel = (label) => {
  const component = {
    label,
    color:"",
    backgroundColor:""
  }
    if(label === "Prev") {
      component.color = palette.primary
      component.backgroundColor = palette.light
      component.icon = icons.Prev
     component.borderColor = palette.primary
    }else if(label === "Next") {
      component.color = palette.light
      component.backgroundColor = palette.primary
      component.icon = icons.Next
      component.borderColor = palette.primary
    }else {
     component.color = palette.light
     component.backgroundColor = palette.dark
      component.icon = icons.Done
    component.borderColor = palette.dark
    }
    
const styles = StyleSheet.create({
  buttonWrapper:{
        width:110,
        height:45,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderRadius:8,
        borderColor:component.borderColor,
        backgroundColor:component.backgroundColor,
        marginBottom:20
      },
     buttonText:{
           fontWeight:"900",
           fontSize:fonts.h2,
           color:component.color,
           marginHorizontal:5,
           textAlign:"center"
         },
  })
    return (
      <View style = {styles.buttonWrapper}>
      {label === "Prev" && component.icon}
         <Text style = {styles.buttonText}>
          {label}
         </Text>
          {label !== "Prev" && component.icon}
      </View>
      )
  }
  return (
       <AppIntroSlider 
       renderItem = {({item}) => <Slide item = {item} />}
       data = {slides}
       activeDotStyle = {styles.activeDotStyle}
       dotStyle = {styles.dotStyle}
       showNextButton
       renderNextButton = {() => buttonLabel("Next")}
       showPrevButton
       renderPrevButton = {() => buttonLabel("Prev")}
       showDoneButton
       renderDoneButton = {() => buttonLabel("Start")}
       onDone = {() => navigation.navigate("login")}
       />
    )
}

const Slide = ({item}) => {
  return (
     <View style = {styles.slideContainer}>
            <Image source = {item.image} style = {styles.slideImage} resizeMode = {"contain"} />
            <View style = {styles.slideContentContainer}>
          <Text style = {styles.slideTitle} >
          {item.title}
          </Text>
          <Text style = {styles.slideParagraph}  >{item.detail}</Text>
        </View>
         </View>
    )
}


const styles = StyleSheet.create({
   dotStyle:{
         backgroundColor:palette.welcomeDotInactive,
        height:9,
       },
    activeDotStyle:{
         backgroundColor:palette.welcomeDotActive,
         borderRadius:6,
         width:21,
         marginHorizontal:3
       },
   slideContainer:{
           justifyContent:"center",
           alignItems:"center",
           marginTop:20
         },
  slideImage:{
              width:sizes.width - 80,
              height:sizes.height*.35,
            },
  slideContentContainer:{
              padding:5,
              justifyContent:"center",
              alignItems:"center",
            },
  slideTitle:{
           fontFamily:fonts.bold,
           fontSize:sizes.h0,
           color:palette.primary,
           textTransform:"uppercase",
           textAlign:"center",
           width:sizes.width * .9,
           maxWidth:700,
           padding:2
          },
  slideParagraph:{
            marginTop:15,
            fontFamily:fonts.primary,
            color:palette.paragraph,
            width:sizes.width * .85,
            fontSize:sizes.h6,
            paddingVertical:5,
            paddingHorizontal:10,
          }
            
})
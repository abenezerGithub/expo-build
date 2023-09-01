import {View,Text,TextInput,TouchableOpacity,Image,ScrollView,TouchableWithoutFeedback,Keyboard} from "react-native";
import {SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context"
import {Formik} from "formik"

import sizes from "../../constants/sizes"
import fonts from "../../constants/fonts"
import palette from "../../constants/palette"
import icons from  "../../constants/icons"
export default Login = ({navigation}) => {
  
  return (
    <SafeAreaView>
    <ScrollView persistentScrollbar = {false}>
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()} >
    <View style = {{
    paddingVertical:8,
    paddingHorizontal:6
    }}>
    <View style = {{
      justifyContent:"center",
      alignItems:"center"
    }}>
     <Image source = {require("../../assets/img/login.jpg")} style = {{
       width:sizes.width - 80,
      height:sizes.height*.25,
     }} resizeMode = {"contain"} />
    </View>
      <View style = {{
        marginVertical:8,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingLeft:8
      }} >
         <Text style = {{
         fontFamily:fonts.bold,
        color:palette.primary,
        fontSize:sizes.h0,
        paddingLeft:8,
        textTransform:"uppercase"
         }}>
         Create New Account
       </Text> 
      </View>
      <View style = {{
        marginTop:3,
        paddingLeft:8,
        justifyContent:"center",
        alignItems:"center"
      }}>
         <Text style = {{
           color:palette.paragraph,
           fontSize:sizes.h6,
           width:"92%",
           padding:3
         }}>Join our learning community, You will need Internet connection  to login in app.</Text>
      </View>
      <View style = {{
        justifyContent:"center",
        alignItems:"center",
        marginTop:8
      }}>
      <LoginForm navigation = {navigation}/>
     </View>
    </View>
    </TouchableWithoutFeedback>
  </ScrollView>
   </SafeAreaView>
    )
}


const LoginForm = ({navigation}) => {
  
  return (
      <View style = {{
        width:"85%",
        maxWidth:600
      }}> 
         <Formik initialValues = {{name:"name",email:"",phone:"",password:"",confirmPassword:""}}
         onSubmit = {(values) => {}} >
         {(props) => (
           <View>
            <TextInput placeholder = "Name"
                     onChangeText = {props.handleChange("name")}
                    value = {props.values.email}
                    style = {{
                      borderWidth:1,
                      borderColor:"transparent",
                      padding:8,
                      paddingLeft:12,
                      fontSize:fonts.h3,
                      borderRadius:3,
                      backgroundColor:palette.greyish,
                      marginVertical:8
                    }}
                    />
          <TextInput placeholder = "Email"
                     onChangeText = {props.handleChange("email")}
                    value = {props.values.email}
                    style = {{
                      borderWidth:1,
                      borderColor:"transparent",
                      padding:8,
                      paddingLeft:12,
                      fontSize:fonts.h3,
                      borderRadius:3,
                      backgroundColor:palette.greyish,
                      marginVertical:8
                    }}
                    />
          <TextInput placeholder = "Phone"
                     onChangeText = {props.handleChange("phone")}
                    value = {props.values.email}
                    style = {{
                      borderWidth:1,
                      borderColor:"transparent",
                      padding:8,
                      paddingLeft:12,
                      fontSize:fonts.h3,
                      borderRadius:3,
                      backgroundColor:palette.greyish,
                      marginVertical:8
                    }}
                    />
        <TextInput placeholder = "Password"
                     onChangeText = {props.handleChange("password")}
                    value = {props.values.password}    style = {{
                      borderWidth:1,
                      borderColor:"transparent",
                      padding:8,
                      paddingLeft:12,
                      fontSize:fonts.h3,
                      borderRadius:3,
                      backgroundColor:palette.greyish
                    }}/>
          <TextInput placeholder = "Confirm Password"
                     onChangeText = {props.handleChange("confirmPassword")}
                    value = {props.values.email}
                    style = {{
                      borderWidth:1,
                      borderColor:"transparent",
                      padding:8,
                      paddingLeft:12,
                      fontSize:fonts.h3,
                      borderRadius:3,
                      backgroundColor:palette.greyish,
                      marginVertical:8
                    }}
                    />
            <View style = {{
              marginTop:12,
              justifyContent:"center",
              alignItems:"center"
            }}>
            <TouchableOpacity  style = {{
              marginVertical:3,
              backgroundColor:palette.dark,
              width:"100%",
              padding:10,
              borderRadius:4,
              elevation:4,
              flexDirection:"row",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}  onPress = {props.handleSubmit} activeOpacity = {.8}>
            <Text style = {{
             color:palette.light,
            fontFamily:fonts.bold,
            fontSize:fonts.h3,
            textTransform:"uppercase",
            marginRight:8
            }}>Sign up</Text>
             {icons.Login}
            </TouchableOpacity>
            </View>
            <View style = {{
              margin:8,
              padding:10,
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <Text style = {{
                color:palette.paragraph,
                marginRight:8
              }}>
              Do have an Account ?
            </Text>
            <TouchableOpacity activeOpacity = {.8} onPress = {() => navigation.navigate("login")} >
               <Text style = {{
                 color:palette.primary,
                 fontFamily:fonts.bold
               }}>
                 LOG IN
              </Text>
            </TouchableOpacity>
            </View>
           </View>
         )}
         </Formik>
      </View>
    )
}
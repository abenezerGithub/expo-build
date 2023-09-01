import {Text} from "react-native"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import Exams from "../../components/Mathmatics/Exams"
import fonts from "../../constants/fonts"
import icons from "../../constants/icons"
import sizes from "../../constants/sizes"
import palette from "../../constants/palette"
const Tab = createMaterialTopTabNavigator();

export default ExamStack = () => {
  return(
    <Tab.Navigator  screenOptions = {{
      tabBarLabelStyle:{
        fontFamily:fonts.primary,
        fontSize:sizes.h5,
        marginLeft:1,
        fontWeight:"bold",
        color:palette.dark,
        paddingBottom:3
      },
      tabBarIconStyle:{
        color:palette.primary
      },
      tabBarItemStyle:{
        display:"flex",
        flexDirection:"row",
        marginHorizontal:3,
      },
        tabBarShowIcon:true,
        tabBarIndicatorStyle:{
          backgroundColor:palette.primary,
          height:2.2,
          borderRadius:10,
        },
        tabBarIndicatorContainerStyle:{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        },
        tabBarPressColor:palette.greyish,
        tabBarContentContainerStyle:{
        width:"90%",
          marginHorizontal:5,
          marginVertical:2
        }
    }}>
       <Tab.Screen name = "All" component = {Exams} options = {{
        title:"All",
        tabBarIcon:() => icons.All,
       }}/>
      <Tab.Screen name = "By Unit" component = {Exams}  options = {{
        title:"By Unit",
        tabBarIcon:() => icons.ByUnit,
       }}/>
    </Tab.Navigator>
    )
}
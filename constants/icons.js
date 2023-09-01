import { AntDesign,MaterialIcons,Ionicons,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import palette from "./palette"
import styles from "./styles"
import sizes from "./sizes"

export default Icons = {
  Home:<AntDesign name="home" size={24} color="black" style = {styles.drawerIcons}  size = {sizes.icon} />,
   Menu : navigation =>   <AntDesign name="menuunfold" size={sizes.menuIcon} style = {styles.menuIcon} onPress ={navigation.toggleDrawer} />,
  ChangeGrade: <MaterialIcons name="published-with-changes" style = {styles.drawerIcons} size = {sizes.icon} />,
  Subscription:<MaterialIcons name="wallet-membership" size={sizes.icon} style  = {styles.drawerIcons} />,
  Information:<Ionicons name="information-circle-outline" size={sizes.icon} style = {styles.drawerIcons} />,
  Settings:<AntDesign name="setting" size={sizes.icon} style = {styles.drawerIcons}  />,
  Logout:<AntDesign name="logout" size={sizes.icon} style = {styles.drawerIcons}/>,
  Community:<MaterialCommunityIcons name="lightbulb-group" size={sizes.icon} style  = {styles.drawerIcons} />,
  Next:<MaterialIcons name = "navigate-next" size = {sizes.welcomeIcon} style = {styles.welcomeIcons}/>,
  Prev:<MaterialIcons name = "navigate-before" size = {sizes.welcomeIcon} style = {styles.welcomePrevIcon}/>,
   Done:<MaterialCommunityIcons name = "star-four-points-outline" size = {sizes.welcomeIcon} style = {styles.welcomeIcons}/>,
   Login:<AntDesign  name = "login" size = {sizes.lg} style = {styles.loginIcon}/>,
   Left:<AntDesign name = "left" size = {sizes.icon} style = {styles.leftIcon}/>,
   All:<MaterialCommunityIcons name = "stack-overflow" size = {sizes.topBarIcon} styles = {styles.topBarIcon}/>,
   ByUnit:<FontAwesome  name = "first-order" size = {sizes.topBarIcon} styles = {styles.topBarIcon}/>
}
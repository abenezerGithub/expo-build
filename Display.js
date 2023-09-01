import {useContext} from "react";
import {AuthContext} from "./context/AuthContext"
import AuthStack from "./routes/AuthStack"
import DrawerNavigator from "./routes/DrawerNavigator"

export default Display = () => {
  const  {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
  return (
     <>
      {isAuthenticated ? <DrawerNavigator/> : <AuthStack/> }
    </>
    )
}



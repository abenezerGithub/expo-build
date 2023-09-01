import {useState,createContext} from "react"

export const AuthContext = createContext()

export default AuthProvider = ({children}) => {
  const [isAuthenticated,setIsAuthenticated] = useState(true)
  return(
    <AuthContext.Provider value = {{isAuthenticated,setIsAuthenticated}} >
      {children}
    </AuthContext.Provider>
    )
}
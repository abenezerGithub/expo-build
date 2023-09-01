import {createContext} from "react"
export const DrawerContext = createContext()

export default  DrawerProvider = ({children,setDrawerHeader,drawerHeader}) => {
  return(
   <DrawerContext.Provider value = {{setDrawerHeader,drawerHeader}}>
      {children}
    </DrawerContext.Provider>
    )
}
import {useLayoutEffect} from "react"
export default useDrawerHeaderRemover = (drawerNavigation) => {
 
  useLayoutEffect(() => {
    drawerNavigation.setOptions({
     headerShown:false
   })
  },[])
}
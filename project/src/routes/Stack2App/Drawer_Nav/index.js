import React from "react";
import { DrawerContent } from "./CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

 import Home from "../../../pages/Pages2App/home"

const Drawer = createDrawerNavigator();
const DrawerScreen = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerStyle={{
        width: "85%",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
    
      {/* <Drawer.Screen name="DiaspoBottomTab" component={BottomTabOrange} /> */}
      <Drawer.Screen name="Home" component={Home} {...props} />
  
      
    </Drawer.Navigator>
  );
};
export default DrawerScreen;

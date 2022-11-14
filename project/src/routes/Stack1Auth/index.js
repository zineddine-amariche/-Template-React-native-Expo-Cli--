import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Pages1Auth/Login";
// import Register from "../../pages/Stack1auth/Register";
// import SplashScreen from "../../pages/Stack1auth/SplashScreen";
// import SwiperBoard from "../../pages/Stack1auth/OnBording";
// import Forgot from "../../pages/Stack1auth/ForgotPassword";
// import CreatPassword from "../../pages/Stack1auth/CreatePassword";
// import ConfirmPhoneNum from "../../pages/Stack1auth/ConfirmNumberPhone";
import { useDispatch, useSelector } from "react-redux";
// import { getToken } from "../../redux/Features/AppToken/GetToken";

const RootStack = createNativeStackNavigator();


function SwitchHome({ navigation }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => ({ ...state.token }));

  // useEffect(() => {
  //   dispatch(getToken());
  // }, []);
  // if (data?.token) {
  //   setTimeout(() => {
  //     navigation.replace("SwiperBoard");
  //   }, 500);
  // }

  // return <SplashScreen />;
}


const AuthStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* <RootStack.Screen name="SplashScreen" component={SwitchHome} /> */}
    {/* <RootStack.Screen name="SwiperBoard" component={SwiperBoard} /> */}
    <RootStack.Screen name="login" component={Login} />
    {/* <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="Forgot" component={Forgot} />
    <RootStack.Screen name="CreatPassword" component={CreatPassword} />
    <RootStack.Screen name="ConfirmPhoneNum" component={ConfirmPhoneNum} /> */}
  </RootStack.Navigator>
);

export default AuthStackScreen;

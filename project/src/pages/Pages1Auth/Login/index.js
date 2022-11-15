import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthLayout from "../../../components/Layouts/auth";
import FormLogin from "./components/Form";
import Space from "../../../components/Space";

const Login = () => {
  const [isFocused, setIsFocused] = useState(false);

  const FocusHandeler = (item) => {
    setIsFocused(item);
  };
  return (
    <AuthLayout isFocused={isFocused}>
      <Space space={30} />
      <View style={{ flex: 1,  }}>
        <FormLogin FocusHandeler={FocusHandeler} isFocused={isFocused} />
      </View>
      <Space space={30} />
    </AuthLayout>
  );
};

export default Login;

const styles = StyleSheet.create({});

// import BackgroundLogin from '../../Assets/BackgroundLogin.svg'
// import React from 'react';
// import {SafeAreaView, Dimensions} from 'react-native';

// const Login = () => {

//   return (
//     <SafeAreaView >

//      <BackgroundLogin
//      width={Dimensions.get('window').width} height={Dimensions.get('window').height}>
//      {/* <SignIn/> */}
//      </BackgroundLogin>

//     </SafeAreaView>
//   )
// }

// // const styles = StyleSheet.create({
// //     container: {

// //         flex: 1,
// //         // padding: 40,
// //         // alignItems: "center",
// //         // justifyContent: "center",
// //     },

// //   });
// export default Login

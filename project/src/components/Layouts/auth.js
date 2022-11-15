import { Image, SafeAreaView, View } from "react-native";
import React, { Children, useState } from "react";
import styles from "./styles";
import Bacimage from "../../Assets/img/bg_login.png";
import Bacimage1 from "../../Assets/img/bg_login1.png";

import { Txt } from "../utils";
import Space from "../Space";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../theme";
const AuthLayout = ({ children, isFocused }) => {
  const [error, seterror] = useState(false);
  const [type, settype] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccc", padding: 20 }}>
      <StatusBar backgroundColor={'transparent'}   style="light"  />

      <Image
        style={styles.ImageBackground}
        source={isFocused ? Bacimage : Bacimage1}
        resizeMode="stretch"
      />
      <Space space={30} />

      <View
        style={{
          flex: 1 / 4,
          justifyContent: "flex-end",
        }}
      >
        <Txt style={styles.headerTitle}>
          Je me connecte à mon espace Livreur
        </Txt>
      </View>
      {children}

      <View style={{ flex: 1 / 3,  }}></View>
    </SafeAreaView>
  );
};

export default AuthLayout;

{
  /* {error && <ToastMessages type={type} error={error} />} */
}
{
  /* 
      <View
        style={[
          // styles.containerABS,
        ]}
      >
        <Text style={styles.headerTitle}>
        Je me connecte à mon espace Livreur
        </Text>
          <FormLogin /> 
      </View> */
}

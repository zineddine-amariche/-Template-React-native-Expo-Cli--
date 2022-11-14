import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { COLORS, SIZES } from "../../theme";
import Bacimage from "../../Assets/img/bg_login.png";
import FormLogin from "../../pages/Pages1Auth/Login/components/Form";
import { Txt } from "../utils";
const AuthLayout = () => {
  const [error, seterror] = useState(false);
  const [type, settype] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#ccc",
    padding:20 }}>
      {/* <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" /> */}
      <Image
        style={styles.ImageBackground}
        source={Bacimage}
        resizeMode="stretch"
      />
      <View style={{ flex: 1 / 3, backgroundColor: "#eee2",
        justifyContent:'flex-end'
       }}>
        <Txt style={styles.headerTitle}>
          Je me connecte à mon espace Livreur
        </Txt>
      </View>

      <View style={{ flex: 1 / 2, backgroundColor: "#ddd6" }}>
      <FormLogin /> 
      </View>
      <View style={{ flex: 1 / 3, backgroundColor: "#fee2" }}></View>
    </View>
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

import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { Txt } from "../utils";
// import LinearGradient from "react-native-linear-gradient";
import {LinearGradient} from 'expo-linear-gradient';

import { COLORS } from "../../theme";
// import newButton from "../../Assets/Img/newButton.png";
import { View } from "react-native";

export const PrimaryButton = ({
  children,
  style,
  onPress,
  width,
  isHovered,
  opacity,
  Bold,
  loading,
  condition,
  marginVertical,
  textTransform,
}) => {
  const hoverRef = useRef(null);

  const stylep = [
    {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  ];
  return (
    <TouchableOpacity
      ref={hoverRef}
      onPress={onPress}
      style={[
        {
          width: width || "100%",
          marginVertical: marginVertical ? marginVertical : 20,
        },

        { ...style },
      ]}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={
          condition
            ? [COLORS.green1, COLORS.green2]
            : [COLORS.green1, COLORS.green2]
        }
        style={styles.BoxGradient}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white}></ActivityIndicator>
        ) : (
          <Txt
            numberOfLines={1}
            color={condition ? COLORS.yellow : COLORS.white}
            opacity={opacity}
            Bold={Bold}
            style={[styles.text]}
            textTransform={textTransform ? textTransform: "uppercase"}
          >
            {children}
          </Txt>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({

  BoxGradient: {
    width: "100%",
    height: 51,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
 
  text: {
    fontSize: 17,
    letterSpacing:15
  },
  PaleGreyButton: {
    height: 51,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.paleGrey,
  },

});

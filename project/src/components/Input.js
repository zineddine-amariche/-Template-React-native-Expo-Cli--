import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Input = ({
  label,
  iconName,
  error,
  value,
  touched,
  password,
  onChangeText,
  onBlur,
  FocusHandeler,
  isFocused,

  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setInputFocus(false);
    }
  }, [isFocused]);

  return (
    <View style={{}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.green1
              : COLORS.green2,
            alignItems: "center",

            backgroundColor: inputFocus ? COLORS.white : COLORS.white70,
          },
        ]}
      >
        <TextInput
          placeholderTextColor={!inputFocus ? COLORS.white : COLORS.green1}
          onFocus={(item) => {
            FocusHandeler(true);
            setInputFocus(true);
          }}
          onBlur={onBlur}
          onChangeText={onChangeText}
          autoCorrect={false}
          secureTextEntry={hidePassword}
          value={value}
          style={{
            color: COLORS.white,
            flex: 1,
            backgroundColor: COLORS.white,
          }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{
              color: isFocused ? COLORS.green2 : COLORS.green1,
              fontSize: 22,
            }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.white,
    fontFamily: "HelveticaBold",
  },
  inputContainer: {
    height: 55,

    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

export default Input;

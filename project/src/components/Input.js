import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  value,
  touched,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ }}>
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
            alignItems: 'center',
          },
        ]}>
        {/* <Icon
          name={iconName}
          style={{color: COLORS.green2, fontSize: 22, marginRight: 10}}
        /> */}
        <TextInput
          autoCorrect={false}
        //   onFocus={() => {
        //     onFocus();
        //     setIsFocused(true);
        //   }}
        //   onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          value={value}
          style={{color: COLORS.white, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.white, fontSize: 22,}}
          />
        )}
      </View>
      { error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
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
    fontFamily:'HelveticaBold'
  },
  inputContainer: {
    height: 55,
    backgroundColor: '#ffffff70',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius:5
  },
});

export default Input;
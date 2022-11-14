import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { UseLogin } from "../../Hooks/UseLogin";
import styles from "./styles";
import CheckBox from "react-native-check-box";
// import ButtonLogin from '../Button';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { PrimaryButton } from "../../../../../components/Buttons";
import PrimaryInput from "../../../../../components/Input";

const FormLogin = () => {
  const {
    loginValues,
    validationSchema,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  } = UseLogin();

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
      <Formik
        initialValues={loginValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
          formikAction.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
        }) => {
          const { login, password } = values;
          return (
            <>
              <PrimaryInput
                name={login}
                label={"Identifiant"}
                placeholder="Your full name"
                style={styles.Input}
                errors={errors.login}
                touched={touched.login}
                value={login}
                onBlur={handleBlur("login")}
                onChangeText={handleChange("login")}
              />
              {errors.login && touched.login ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.error}>{errors.login}</Text>
                </Animatable.View>
              ) : null}

              <View style={styles.LoginText}>
                <Text style={styles.label}>Mot de passe </Text>
              </View>
              <View style={styles.row}>
                <PrimaryInput
                  placeholder="Your password"
                  name={password}
                  id={password}
                  value={password}
                  onBlur={handleBlur("userPassword")}
                  onChangeText={handleChange("userPassword")}
                  Label="Password"
                  secureTextEntry={hidePass ? true : false}
                  isPassword={"pass"}
                  hidePass={hidePass}
                  HandlehidePass={HandlehidePass}
                  errors={errors.password}
                  touched={touched.password}
                  style={styles.Input}
                />

                <Icon
                  name={hidePass ? "eye-slash" : "eye"}
                  size={15}
                  color="grey"
                  onPress={HandlehidePass}
                  style={styles.iconPass}
                />
              </View>

              {errors.password && touched.password ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.error}>{errors.password}</Text>
                </Animatable.View>
              ) : null}
              <View style={styles.left}>
                <CheckBox
                  isChecked={isSelected}
                  onClick={hadelChnageCheck}
                  style={styles.checkbox}
                  checkBoxColor={"#fff"}
                />
                <Text style={styles.labelText}>Se souvenir de moi?</Text>
              </View>
              <View style={styles.containerButtons}>
                <PrimaryButton
                  onPress={handleSubmit}
                  isSubmitting={isSubmitting}
                >
                  Connexion
                </PrimaryButton>
              </View>

              <View style={styles.Identifiants}>
                <View style={styles.leftLink}>
                  <Text style={styles.textRight}>Mot de passe oublié?</Text>
                </View>
                <View style={styles.rightLink}>
                  <Text style={styles.textRight}>Contacter Live Resto?</Text>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default FormLogin;

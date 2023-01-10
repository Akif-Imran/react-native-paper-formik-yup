import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { Formik, FormikProps, FormikHelpers, Form } from "formik";
import * as yup from "yup";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  age: number;
}
const MainForm = () => {
  const RegisterFormSchema = yup.object({
    firstName: yup
      .string()
      .min(3, "Must me minimum of 3 characters")
      .max(50, "Too long. Try again!")
      .required("Required!"),
    lastName: yup
      .string()
      .min(3, "Must me minimum of 3 characters")
      .max(50, "Too long. Try again!")
      .required("Last Name is required!"),
    email: yup
      .string()
      .email("Invalid email address. Try again!")
      .required("Email is required!"),
    username: yup
      .string()
      .min(3, "Must me minimum of 3 characters")
      .max(50, "Too long. Try again!")
      .required("Username is required!"),
    password: yup
      .string()
      .min(3, "Must me minimum of 3 characters")
      .required("Password is required!"),
    confirmPassword: yup.ref("password"),
    age: yup
      .number()
      .integer("Must be an integer value!")
      .positive("Must be positive!")
      .min(18, "Must be at least 18 years of age!")
      .max(35, "Your are too old!")
      .required("Age is required!"),
  });
  const initialValues: RegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: 20,
  };
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      //   touchSoundDisabled
    >
      <View style={styles.mainContainer}>
        <Text>MainForm</Text>
        <Formik
          validateOnBlur
          validateOnChange
          initialValues={initialValues}
          validationSchema={RegisterFormSchema}
          onSubmit={(
            values: RegisterFormValues,
            actions: FormikHelpers<RegisterFormValues>
          ) => {
            console.log("submitted", values);
            actions.resetForm();
          }}
        >
          {(props: FormikProps<RegisterFormValues>) => {
            const {
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
            } = props;
            return (
              <View style={{ flex: 1 }}>
                {/* first name */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"First Name"}
                    error={errors.firstName && touched.firstName ? true : false}
                    value={values.firstName}
                    placeholder="Enter First Name"
                    onBlur={handleBlur("firstName")}
                    onChangeText={handleChange("firstName")}
                  />
                  {errors.firstName && touched.firstName ? (
                    <HelperText type="error" selectable={false}>
                      {errors.firstName}
                    </HelperText>
                  ) : null}
                </View>
                {/* last name */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"Last Name"}
                    error={errors.lastName && touched.lastName ? true : false}
                    value={values.lastName}
                    placeholder="Enter Last Name"
                    onBlur={handleBlur("lastName")}
                    onChangeText={handleChange("lastName")}
                  />
                  {errors.lastName && touched.lastName ? (
                    <HelperText type="error" selectable={false}>
                      {errors.lastName}
                    </HelperText>
                  ) : null}
                </View>
                {/* username */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"Username"}
                    error={errors.username && touched.username ? true : false}
                    value={values.username}
                    placeholder="Enter Username"
                    onBlur={handleBlur("username")}
                    onChangeText={handleChange("username")}
                  />
                  {errors.username && touched.username ? (
                    <HelperText type="error" selectable={false}>
                      {errors.username}
                    </HelperText>
                  ) : null}
                </View>
                {/* email */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"Email"}
                    error={errors.email && touched.email ? true : false}
                    value={values.email}
                    placeholder="Email"
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                  />
                  {errors.email && touched.email ? (
                    <HelperText type="error" selectable={false}>
                      {errors.email}
                    </HelperText>
                  ) : null}
                </View>
                {/* password */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"Password"}
                    error={errors.password && touched.password ? true : false}
                    value={values.password}
                    placeholder="Enter Password"
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                  />
                  {errors.password && touched.password ? (
                    <HelperText type="error" selectable={false}>
                      {errors.password}
                    </HelperText>
                  ) : null}
                </View>
                {/* confirm password */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"Confirm Password"}
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? true
                        : false
                    }
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    onBlur={handleBlur("confirmPassword")}
                    onChangeText={handleChange("confirmPassword")}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <HelperText type="error" selectable={false}>
                      {errors.confirmPassword}
                    </HelperText>
                  ) : null}
                </View>
                {/* age */}
                <View style={styles.inputWithErrorTextContainer}>
                  <TextInput
                    blurOnSubmit
                    mode="outlined"
                    label={"Age"}
                    error={errors.age && touched.age ? true : false}
                    value={values.age.toString()}
                    placeholder="Age"
                    keyboardType="numeric"
                    onBlur={handleBlur("age")}
                    onChangeText={handleChange("age")}
                  />
                  {errors.age && touched.age ? (
                    <HelperText type="error" selectable={false}>
                      {errors.age}
                    </HelperText>
                  ) : null}
                </View>
                {/* submit button */}
                <View style={styles.submitButtonContainer}>
                  <Button title="Login" onPress={() => handleSubmit()} />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainForm;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    // borderWidth: 1,
  },
  inputWithErrorTextContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  submitButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

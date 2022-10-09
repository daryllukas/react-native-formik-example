import React from 'react';
import { Button, Input, Text } from '@ui-kitten/components';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { useFormik } from 'formik';
import {
  registerInitialValues,
  registerSchema,
} from '../schemas/register.form';

export const Register = () => {
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
      Alert.alert(
        `Welcome, ${values.firstName}`,
        'Your account has been created.'
      );
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          label="First Name"
          placeholder="First Name"
          size="large"
          style={styles.formCtrl}
          onChangeText={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          value={formik.values?.firstName}
          status={
            formik.touched.firstName && Boolean(formik.errors.firstName)
              ? 'danger'
              : 'basic'
          }
          caption={formik.touched.firstName && formik.errors.firstName}
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          size="large"
          style={styles.formCtrl}
          onChangeText={formik.handleChange('lastName')}
          onBlur={formik.handleBlur('lastName')}
          value={formik.values.lastName}
          status={
            formik.touched.lastName && Boolean(formik.errors.lastName)
              ? 'danger'
              : 'basic'
          }
          caption={formik.touched.lastName && formik.errors.lastName}
        />
        <Input
          label="Email Address"
          placeholder="name@example.com"
          size="large"
          style={styles.formCtrl}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          status={
            formik.touched.email && Boolean(formik.errors.email)
              ? 'danger'
              : 'basic'
          }
          caption={formik.touched.email && formik.errors.email}
        />
        <Input
          label="Phone Number"
          accessoryLeft={() => <Text>+260</Text>}
          placeholder="971234567"
          size="large"
          style={styles.formCtrl}
          onChangeText={formik.handleChange('phoneNumber')}
          onBlur={formik.handleBlur('phoneNumber')}
          value={formik.values.phoneNumber}
          status={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              ? 'danger'
              : 'basic'
          }
          caption={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <Input
          label="Password"
          placeholder="Password"
          size="large"
          style={styles.formCtrl}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          status={
            formik.touched.password && Boolean(formik.errors.password)
              ? 'danger'
              : 'basic'
          }
          caption={formik.touched.password && formik.errors.password}
          secureTextEntry
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          size="large"
          style={styles.formCtrl}
          onChangeText={formik.handleChange('confirmPassword')}
          onBlur={formik.handleBlur('confirmPassword')}
          value={formik.values.confirmPassword}
          status={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
              ? 'danger'
              : 'basic'
          }
          caption={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          secureTextEntry
        />
        <Button style={styles.submitBtn} onPress={formik.handleSubmit}>
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  formCtrl: {
    marginBottom: 30,
  },
  submitBtn: {
    margin: 10,
  },
});

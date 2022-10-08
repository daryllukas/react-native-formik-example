import React from 'react';
import { Button, Input, Text } from '@ui-kitten/components';
import { ScrollView, StyleSheet, View } from 'react-native';

export const RegisterForm = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          label="First Name"
          placeholder="First Name"
          size="large"
          style={styles.formCtrl}
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          size="large"
          style={styles.formCtrl}
        />
        <Input
          label="Email Address"
          placeholder="name@example.com"
          size="large"
          style={styles.formCtrl}
        />
        <Input
          label="Phone Number"
          accessoryLeft={() => <Text>+260</Text>}
          placeholder="971234567"
          size="large"
          style={styles.formCtrl}
        />
        <Input
          label="Password"
          placeholder="Password"
          size="large"
          style={styles.formCtrl}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          size="large"
          style={styles.formCtrl}
        />
        <Button style={styles.submitBtn}>Register</Button>
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

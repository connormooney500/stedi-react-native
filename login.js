import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { Text, View, Image } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';


export default function Login(props) {
  const [phoneNumber, onChangephoneNumber] = React.useState(null);
  const [OTP, onChangeOTP] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangephoneNumber}
        value={phoneNumber}
        placeholder="Enter Phone Number"
        keyboardType="numeric"/>
      <View>
      <Button
      title="Send OTP"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {method: "POST"})}/>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={OTP}
        placeholder="Enter OTP"
        keyboardType="numeric"/>
      <View>
      <Button
      title="Login"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin'+usertoken, {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          oneTimePassword: OTP}),
      })
      .then(()=> props.setUserLoggedIn(true))
      }>
      </Button>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});;










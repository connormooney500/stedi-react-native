import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, Alert} from 'react-native';
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
      async onPress={() => fetch('https://dev.stedi.me/twofactorlogin', {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          oneTimePassword: OTP}),
      })
      .then((response) => {
      if(response.status==200)
      {const token = response.text()
        return token
      }
      else{(Alert.alert("Unable to Login"))}
    })
    .then((token) => {fetch('https://dev.stedi.me/validate/'+token)
      .then((reponse) => {
        reponse.text().then(function(email)
        {props.setUserEmail(email);
         props.setUserLoggedIn(true)})
      })
    })
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








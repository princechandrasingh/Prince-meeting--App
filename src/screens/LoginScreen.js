import React, { useEffect } from "react";
import { View, Button, Text } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../services/firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
require('dotenv').config();

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "",
    androidClientId: "",
    //iosClientId: "YOUR_IOS_CLIENT_ID.apps.googleusercontent.com",
    scopes: ["openid", "profile", "email", "https://www.googleapis.com/auth/calendar"],
  });

 


  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          // Navigate to main app
          navigation.replace("Home");
        })
        .catch((err) => {
          alert("Login failed: " + err.message);
        });
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sign in with Google" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
}

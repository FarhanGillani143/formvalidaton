import React, { useState } from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
const App = () => {
  const [agree,setAgree] = useState(false)
  const [username,setUserName] = useState("")
  const [password,setPassword] = useState("")

const submit = () =>{
  if (username==="farhan@1234gmail.com" && password==="12345678") {
    alert(`Thanks for login ${username}`)
  } else {
        alert(`Please Enter your Correct Username and Password`)
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <Text style={styles.formdes}>
        You can reach us anytime via email and password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(item) => setUserName(item)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={(item) => setPassword(item)}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "blue" : null}
        />
        <Text style={styles.label}>Accept Terms & Conditions</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: agree ? "blue" : "#bbbbbb" }]}
        onPress={submit}
        disabled={!agree}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  input: {
    height: 50,
    borderColor: "rgba(0,0,0,0.3)",
    color: "#333",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "blue",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  formdes: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 20,
    lineHeight: 25,
    color: "#333",
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "flex-start",
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    color: "#333",
  },
});


export default App;

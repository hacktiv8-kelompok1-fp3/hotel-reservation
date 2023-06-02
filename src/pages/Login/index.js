import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import mainColors from "../../utils/colors";
import TextInputAuth from "../../components/TextInputAuth";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("data", form);
  };
  return (
    <SafeAreaView style={{ backgroundColor: mainColors.white, flex: 1 }}>
      <View style={{ padding: 10 * 2 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: mainColors.primary2,
              fontWeight: "bold",
              marginVertical: 10 * 3,
            }}
          >
            Login here
          </Text>
          <Text style={styles.title2}>Welcome back you've been missed!</Text>
        </View>
        <View style={{ marginVertical: 13 }}>
          <TextInputAuth
            placeholder="Email"
            value={form.name}
            name="name"
            type="text"
          />
          <TextInputAuth
            placeholder="Email"
            value={form.email}
            name="email"
            type="email"
          />
          <TextInputAuth
            placeholder="Password"
            value={form.password}
            name="password"
            type="password"
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textLoginBtn}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Text style={styles.textRegisBtn}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title2: {
    fontWeight: "600",
    fontSize: 20,
    maxWidth: "60%",
    textAlign: "center",
  },
  btnLogin: {
    padding: 10 * 2,
    backgroundColor: mainColors.primary3,
    marginVertical: 10 * 3,
    borderRadius: 10,
    shadowColor: mainColors.primary3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textLoginBtn: {
    fontWeight: "600",
    color: mainColors.white,
    textAlign: "center",
    fontSize: 20,
  },
  textRegisBtn: {
    fontWeight: "600",
    color: mainColors.dark,
    textAlign: "center",
    fontSize: 14,
  },
});

export default Login;

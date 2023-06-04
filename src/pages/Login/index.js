import React, { useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TextInputAuth from "../../components/TextInputAuth";
import { addUsers } from "../../redux/reducer/slice-login";
import mainColors from "../../utils/colors";
import { useForm } from "../../utils/useForm";

const Login = ({ navigation }) => {
  const { token } = useSelector((state) => state.authorization);
  useEffect(() => {
    if (token) {
      navigation.navigate("MainApp");
    }
  }, [token]);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(addUsers({ username: form.username }));
    navigation.navigate("MainApp");
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
            placeholder="Username"
            value={form.username}
            onChangeText={(value) => setForm("username", value)}
            type="text"
          />
          <TextInputAuth
            placeholder="Password"
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm("password", value)}
            type="password"
          />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
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

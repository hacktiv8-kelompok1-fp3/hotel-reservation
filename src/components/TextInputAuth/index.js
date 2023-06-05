import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import mainColors from "../../utils/colors";

const TextInputAuth = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholderTextColor={mainColors.grey2}
      style={[
        {
          fontWeight: "400",
          fontSize: 16,
          padding: 7 * 2,
          backgroundColor: mainColors.light2,
          borderRadius: 10,
          marginVertical: 10,
        },
        focus && {
          borderWidth: 3,
          borderColor: mainColors.primary,
          shadowOffset: {
            width: 4,
            height: 10,
          },
          shadowColor: mainColors.primary,
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({});

export default TextInputAuth;

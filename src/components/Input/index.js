import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import mainColors from "../../utils/colors";

export default function Input({
  label,
  onChangeText,
  secureTextEntry,
  value,
  disable,
}) {
  const [border, setBorder] = useState(mainColors.primary);
  const onFocusForm = () => {
    setBorder(mainColors.grey1);
  };
  const onBlurForm = () => {
    setBorder(mainColors.primary);
  };
  return (
    <View>
      <Text style={styled.label}>{label}</Text>
      <TextInput
        onBlur={onBlurForm}
        onFocus={onFocusForm}
        style={styled.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styled = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: "#7D8797",
    marginBottom: 6,
    // fontFamily: fonts.primary.normal,
  },
  picker: {
    borderWidth: 1,
    borderColor: mainColors.primary,
    borderRadius: 10,
    paddingHorizontal: 4,
  },
});

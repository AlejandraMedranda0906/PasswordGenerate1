import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

interface ControllerProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
}

const Controller = ({ label, value, onChange }: ControllerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value.toString()}
        onChangeText={(text) => onChange(parseInt(text) || 0)}
      />
    </View>
  );
};


const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10, 
    padding: 12, 
    backgroundColor: "#9ee4e6",
    borderRadius: 10,
    width: width * 0.9, 
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00796b",
    flex: 2,
  },
  input: {
    borderWidth: 2,
    borderColor: "#00796b",
    borderRadius: 8,
    width: 60, 
    textAlign: "center",
    padding: 6,
    backgroundColor: "#fff",
  },
});

export default Controller;

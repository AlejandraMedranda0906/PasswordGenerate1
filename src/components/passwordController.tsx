import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

interface PasswordControllerProps {
  password: string;
  onCopy: () => void; 
}

const PasswordController = ({ password, onCopy }: PasswordControllerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.password}>{password || "No hay contraseña generada"}</Text>

      <TouchableOpacity onPress={onCopy} style={styles.button}>
        <Text style={styles.copyText}>Copiar Contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  password: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  button: {
    backgroundColor: "#2C700F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  copyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PasswordController;

import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import ButtonGenerate from "../components/buttonGenerate";
import Controller from "../components/controller";
import PasswordController from "../components/passwordController";
import * as Clipboard from "expo-clipboard";

export default function App() {
  const MAX_LENGTH = 20; // Longitud máxima de la contraseña
  const MAX_INPUT = 10; // Límite máximo para caracteres individuales

  const [length, setLength] = useState<number>(12);
  const [uppercase, setUppercase] = useState<number>(2);
  const [lowercase, setLowercase] = useState<number>(4);
  const [numbers, setNumbers] = useState<number>(3);
  const [symbols, setSymbols] = useState<number>(3);
  const [password, setPassword] = useState<string>("");

  const validateInput = (value: number, max: number): number => {
    const validatedValue = Math.min(Math.max(0, value), max);
    return isNaN(validatedValue) ? 0 : validatedValue;
  };

  const generatePassword = () => {
    if (length > MAX_LENGTH) {
      Alert.alert("Error", `La longitud máxima permitida es ${MAX_LENGTH}.`);
      return;
    }

    if (uppercase + lowercase + numbers + symbols > length) {
      Alert.alert("Error", "La suma de caracteres no puede superar la longitud total.");
      return;
    }

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+[]{}|;:,.<>?";

    let generatedPassword = "";

    const addRandomChars = (chars: string, count: number) => {
      for (let i = 0; i < count; i++) {
        generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    };

    addRandomChars(upper, uppercase);
    addRandomChars(lower, lowercase);
    addRandomChars(nums, numbers);
    addRandomChars(syms, symbols);

    const allChars = upper + lower + nums + syms;
    while (generatedPassword.length < length) {
      generatedPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));

    }

    setPassword(generatedPassword.split("").sort(() => 0.5 - Math.random()).join(""));
  };

  const handleCopy = async () => {
    if (!password) {
      Alert.alert("Error", "No hay contraseña para copiar.");
      return;
    }
    await Clipboard.setStringAsync(password);
    Alert.alert("¡Copiado!", "La contraseña ha sido copiada al portapapeles.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generador de Contraseñas Seguras</Text>
      <View style={styles.controllers}>
        <Controller
          label="Longitud"
          value={length}
          onChange={(val) => setLength(validateInput(val, MAX_LENGTH))}
        />
        <Controller
          label="Mayúsculas"
          value={uppercase}
          onChange={(val) => setUppercase(validateInput(val, MAX_INPUT))}
        />
        <Controller
          label="Minúsculas"
          value={lowercase}
          onChange={(val) => setLowercase(validateInput(val, MAX_INPUT))}
        />
        <Controller
          label="Números"
          value={numbers}
          onChange={(val) => setNumbers(validateInput(val, MAX_INPUT))}
        />
        <Controller
          label="Símbolos"
          value={symbols}
          onChange={(val) => setSymbols(validateInput(val, MAX_INPUT))}
        />
      </View>
      <ButtonGenerate title="Generar" onPress={generatePassword} />
      <PasswordController password={password} onCopy={handleCopy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e0f7fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#00796b",
    textAlign: "center",
  },
  controllers: {
    width: "90%",
    marginBottom: 20,
  },
});

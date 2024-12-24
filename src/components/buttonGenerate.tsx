import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonGenerateProps {
  onPress: () => void;
  title: string;
}

const ButtonGenerate = ({ onPress, title }: ButtonGenerateProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#2C700F",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignSelf: "center",
      marginVertical: 10,
    },
    text: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  

export default ButtonGenerate;

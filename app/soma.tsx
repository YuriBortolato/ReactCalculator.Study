import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Soma() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (!isNaN(n1) && !isNaN(n2)) {
      setResultado(n1 + n2); 
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operação de Soma</Text>
      
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Digite o 1º número" 
        value={num1} 
        onChangeText={setNum1} 
      />
      
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Digite o 2º número" 
        value={num2} 
        onChangeText={setNum2} 
      />
      
      <Button title="Calcular" onPress={calcular} />
      
      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "green"
  }
});
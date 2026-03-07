import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
      
      <View style={styles.inputContainer}>
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
      </View>
      
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      
      {resultado !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Resultado: {resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f5f5f5", 
    alignItems: "center", 
    paddingTop: 60 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 30, 
    color: "#333" 
  },
  inputContainer: { 
    width: "90%", 
    marginBottom: 20 
  },
  input: { 
    backgroundColor: "#fff", 
    borderWidth: 1, 
    borderColor: "#ddd", 
    padding: 15, 
    marginBottom: 15, 
    borderRadius: 8, 
    fontSize: 16 
  },
  button: { 
    width: "90%", 
    backgroundColor: "#0099ff", 
    padding: 15, 
    borderRadius: 8, 
    alignItems: "center" 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  resultBox: { 
    marginTop: 30, 
    padding: 20, 
    backgroundColor: "#e8f5e9", 
    borderRadius: 8, 
    width: "90%", 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "#4CAF50" 
  },
  resultText: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#2e7d32" 
  }
});
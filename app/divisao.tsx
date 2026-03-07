import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Divisao() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<number | string | null>(null);

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (!isNaN(n1) && !isNaN(n2)) {
      if (n2 === 0) {
        setResultado("Erro: Divisão por zero!");
      } else {
        setResultado(n1 / n2); 
      }
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operação de Divisão</Text>
      
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Digite o numerador (1º número)" 
        value={num1} 
        onChangeText={setNum1} 
      />
      
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Digite o denominador (2º número)" 
        value={num2} 
        onChangeText={setNum2} 
      />
      
      <Button title="Calcular" onPress={calcular} />
      
      {resultado !== null && (
        <Text style={[styles.result, typeof resultado === 'string' ? styles.error : null]}>
          {typeof resultado === 'string' ? resultado : `Resultado: ${resultado}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
  result: { fontSize: 20, fontWeight: "bold", marginTop: 20, color: "green" },
  error: { color: "red", fontSize: 16 }
});
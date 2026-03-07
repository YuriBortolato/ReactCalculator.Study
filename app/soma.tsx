import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface RegistroHistorico {
  id: string;
  expressao: string;
  data: string;
}

export default function Soma() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [camposVazios, setCamposVazios] = useState<string[]>([]);
  const [historico, setHistorico] = useState<RegistroHistorico[]>([]);

  const input2Ref = useRef<TextInput>(null);

  const calcular = () => {
    setErro(null);
    setResultado(null);
    setCamposVazios([]);

    let errosAtuais: string[] = [];

    if (!num1) errosAtuais.push("num1");
    if (!num2) errosAtuais.push("num2");

    if (errosAtuais.length > 0) {
      setCamposVazios(errosAtuais);
      if (errosAtuais.length === 2) {
        setErro("Por favor, preencha os dois campos.");
      } else if (errosAtuais.includes("num1")) {
        setErro("Por favor, preencha o 1º número.");
      } else {
        setErro("Por favor, preencha o 2º número.");
      }
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (!isNaN(n1) && !isNaN(n2)) {
      const res = n1 + n2;
      setResultado(res);

      const agora = new Date();
      const dataFormatada = `${agora.toLocaleDateString("pt-BR")} ${agora.toLocaleTimeString("pt-BR").slice(0, 5)}`;
      const novoRegistro: RegistroHistorico = {
        id: Date.now().toString(),
        expressao: `${n1} + ${n2} = ${res}`,
        data: dataFormatada
      };
      setHistorico((prev) => [novoRegistro, ...prev]);
    } else {
      setErro("Valores inválidos digitados.");
      setCamposVazios(["num1", "num2"]);
    }
  };

  const limparErroAoDigitar = () => {
    if (erro) {
      setErro(null);
      setCamposVazios([]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingVertical: 40 }}
        data={historico}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={styles.title}>Operação de Soma</Text>
            
            <View style={styles.inputContainer}>
              <TextInput 
                style={[styles.input, camposVazios.includes("num1") && styles.inputError]} 
                keyboardType="numeric" 
                placeholder="Digite o 1º número" 
                placeholderTextColor="#999" 
                value={num1} 
                onChangeText={(texto) => { setNum1(texto); limparErroAoDigitar(); }} 
                returnKeyType="next" 
                onSubmitEditing={() => input2Ref.current?.focus()} 
                blurOnSubmit={false} 
              />
              <TextInput 
                ref={input2Ref} 
                style={[styles.input, camposVazios.includes("num2") && styles.inputError]} 
                keyboardType="numeric" 
                placeholder="Digite o 2º número" 
                placeholderTextColor="#999" 
                value={num2} 
                onChangeText={(texto) => { setNum2(texto); limparErroAoDigitar(); }}
                returnKeyType="done" 
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={calcular}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            
            {erro && (
              <View style={styles.errorBox}>
                <Text style={styles.errorTextInside}>{erro}</Text>
              </View>
            )}

            {resultado !== null && !erro && (
              <View style={styles.resultBox}>
                <Text style={styles.resultText}>Resultado: {resultado}</Text>
              </View>
            )}

            {historico.length > 0 && (
              <View style={styles.historicoHeader}>
                <Text style={styles.historicoTitle}>Histórico</Text>
              </View>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.historicoBox}>
            <Text style={styles.historicoData}>{item.data}</Text>
            <Text style={styles.historicoCalculo}>{item.expressao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30, color: "#333", textAlign: "center" },
  inputContainer: { width: "90%", maxWidth: 400, marginBottom: 20 },
  input: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#ddd", padding: 15, marginBottom: 15, borderRadius: 8, fontSize: 16, color: "#333" },
  inputError: { borderColor: "#D32F2F", borderWidth: 1.5 },
  button: { width: "90%", maxWidth: 400, backgroundColor: "#0099ff", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  resultBox: { marginTop: 30, padding: 20, backgroundColor: "#e8f5e9", borderRadius: 8, width: "90%", maxWidth: 400, alignItems: "center", borderWidth: 1, borderColor: "#4CAF50" },
  resultText: { fontSize: 22, fontWeight: "bold", color: "#2e7d32" },
  errorBox: { marginTop: 30, padding: 20, backgroundColor: "#ffebee", borderRadius: 8, width: "90%", maxWidth: 400, alignItems: "center", borderWidth: 1, borderColor: "#ef9a9a" },
  errorTextInside: { fontSize: 18, fontWeight: "bold", color: "#c62828", textAlign: "center" },
  historicoHeader: { width: "90%", maxWidth: 400, marginTop: 30, alignSelf: "center" },
  historicoTitle: { fontSize: 20, fontWeight: "bold", color: "#666", textAlign: "center", marginBottom: 15 },
  historicoBox: { width: "90%", maxWidth: 400, alignSelf: "center", backgroundColor: "#e0e0e0", padding: 15, borderRadius: 8, marginBottom: 10 },
  historicoData: { fontSize: 12, color: "#555", marginBottom: 4 },
  historicoCalculo: { fontSize: 18, fontWeight: "bold", color: "#333" }
});
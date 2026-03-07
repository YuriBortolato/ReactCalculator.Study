import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora UMFG</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Somar (+)" onPress={() => router.push("/soma")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Subtrair (-)" onPress={() => router.push("/subtracao")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Multiplicar (*)" onPress={() => router.push("/multiplicacao")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Dividir (/)" onPress={() => router.push("/divisao")} />
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 15,
  }
});
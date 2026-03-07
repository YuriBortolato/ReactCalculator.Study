import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.card, styles.cardSoma]} onPress={() => router.push("/soma")}>
          <Text style={styles.cardText}>Somar</Text>
          <Text style={styles.cardSymbol}>➕</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.cardSub]} onPress={() => router.push("/subtracao")}>
          <Text style={styles.cardText}>Subtrair</Text>
          <Text style={styles.cardSymbol}>➖</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.cardMult]} onPress={() => router.push("/multiplicacao")}>
          <Text style={styles.cardText}>Multiplicar</Text>
          <Text style={styles.cardSymbol}>✖️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.cardDiv]} onPress={() => router.push("/divisao")}>
          <Text style={styles.cardText}>Dividir</Text>
          <Text style={styles.cardSymbol}>➗</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 40, 
    color: "#333",
    textAlign: "center" 
  },
  grid: { 
    width: "90%", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between" 
  },
  card: { 
    width: "48%", 
    aspectRatio: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 12, 
    marginBottom: 15, 
    elevation: 4, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4 
  },
  cardSoma: { backgroundColor: "#4CAF50" },
  cardSub: { backgroundColor: "#F44336" },
  cardMult: { backgroundColor: "#2196F3" },
  cardDiv: { backgroundColor: "#FF9800" },
  cardText: { 
    color: "#fff", 
    fontSize: 20, 
    fontWeight: "bold",
    marginBottom: 10 
  },
  cardSymbol: {
    fontSize: 36 
  }
});
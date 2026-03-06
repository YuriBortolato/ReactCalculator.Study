import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TelaDois() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Navegar Botao" onPress={() => navigation.goBack()} />
      <Text>Tela Dois</Text>
    </View>
  );
}

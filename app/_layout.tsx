import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="soma" options={{ title: "Somar" }} />
      <Stack.Screen name="subtracao" options={{ title: "Subtrair" }} />
      <Stack.Screen name="multiplicacao" options={{ title: "Multiplicar" }} />
      <Stack.Screen name="divisao" options={{ title: "Dividir" }} />
    </Stack>
  );
}
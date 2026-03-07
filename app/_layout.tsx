import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="soma" options={{ title: "Soma" }} />
      <Stack.Screen name="subtracao" options={{ title: "Subtração" }} />
      <Stack.Screen name="multiplicacao" options={{ title: "Multiplicação" }} />
      <Stack.Screen name="divisao" options={{ title: "Divisão" }} />
    </Stack>
  );
}
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="Index" options={{ title="Home"}} />
    <Stack.Screen name="about" options={{ title="Tela Dois"}} />
    </Stack>
}

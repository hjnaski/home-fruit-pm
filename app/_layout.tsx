import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Remove a barra de topo padrão do sistema
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="cadastro" />
    </Stack>
  );
}
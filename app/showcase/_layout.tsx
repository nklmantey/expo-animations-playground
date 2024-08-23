import { Stack } from 'expo-router'

export default function ShowcaseLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='animated-flatlist' />
    </Stack>
  )
}

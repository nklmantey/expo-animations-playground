import useFonts from '@/hooks/useFonts'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

export default function RootLayout() {
  const { fontsLoaded, error } = useFonts()

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='showcase' />
    </Stack>
  )
}

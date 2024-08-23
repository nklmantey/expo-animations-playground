import { useFonts as useFontsHook } from 'expo-font';
import { SplashScreen } from 'expo-router';

export default function useFonts() {
  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded, error] = useFontsHook({
    'UberMoveRegular': require('../assets/fonts/UberMove-Regular.ttf'),
    'UberMoveMedium': require('../assets/fonts/UberMove-Medium.ttf'),
    'UberMoveBold': require('../assets/fonts/UberMove-Bold.ttf'),
  })

  return { fontsLoaded, error }
}
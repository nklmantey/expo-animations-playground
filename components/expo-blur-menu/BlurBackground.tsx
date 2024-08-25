import { StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import Animated, { useAnimatedProps, withTiming } from 'react-native-reanimated'

export default function BlurBackground({ isBlur }: { isBlur: boolean }) {
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

  const animatedProps = useAnimatedProps(() => {
    const intensity = isBlur
      ? withTiming(100, { duration: 500 })
      : withTiming(0, { duration: 500 })

    return { intensity }
  }, [isBlur])

  return (
    <AnimatedBlurView
      experimentalBlurMethod='dimezisBlurView'
      pointerEvents={!isBlur ? 'none' : 'auto'}
      animatedProps={animatedProps}
      style={{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
      }}
    />
  )
}
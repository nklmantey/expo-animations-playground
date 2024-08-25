import Card from '@/components/Card'
import Typography from '@/components/Typography'
import { CardRoutes } from '@/constants/routes'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import { useEffect } from 'react'

export default function Index() {
  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)
  const scale = useSharedValue(1)
  const rotation = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(scale.value) },
        { rotate: `${rotation.value}deg` },
      ],
    }
  })

  useEffect(() => {
    scale.value = withRepeat(withSpring(1.2), -1, true)
    rotation.value = withRepeat(withTiming(10, { duration: 600, easing: Easing.ease }), -1, true)
  }, [])

  return (
    <SafeAreaContainer>
      <HeaderContainer>
        <Typography size='heading2' weight='bold'>
          expo playground
        </Typography>
        <AnimatedIcon
          name='happy-outline'
          size={28}
          color='#a1a1a1'
          style={animatedStyle}
        />
      </HeaderContainer>
      <Typography
        size='md'
        style={{ marginTop: 12, lineHeight: 20 }}
      >
        a collection of mobile interactions I gathered from Twitter & decided to implement in my free time
      </Typography>

      <BodyContainer>
        {CardRoutes.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </BodyContainer>
    </SafeAreaContainer>
  )
}

const SafeAreaContainer = styled(SafeAreaView)`
  padding: 20px;
`

const HeaderContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BodyContainer = styled(View)`
  width: 100%;
  margin-top: 48px;
  gap: 16px
`
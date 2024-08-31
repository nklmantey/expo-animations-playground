import { MENU_ITEMS } from '@/constants/items'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Animated, { FadeIn, FadeOut, LinearTransition, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components'
import Typography from '../Typography'

type AnimatedMenuProps = {
  isVisible: boolean
  onToggle: () => void
}

export default function AnimatedMenu({ isVisible, onToggle }: AnimatedMenuProps) {
  const { bottom } = useSafeAreaInsets()
  const { width } = useWindowDimensions()

  const animatedIconContainer = useAnimatedStyle(() => {
    return { transform: [{ scale: isVisible ? withTiming(1.5) : withTiming(1) }] }
  }, [isVisible])

  const animatedItemContainer = useAnimatedStyle(() => {
    return { transform: [{ rotate: isVisible ? withTiming('45deg') : withTiming('0deg') }] }
  }, [isVisible])

  return (
    <AnimatedContainer
      bottom={bottom}
      isVisible={isVisible}
      layout={LinearTransition}
    >
      {isVisible && (
        <ItemsContainer
          layout={LinearTransition}
          entering={FadeIn}
          exiting={FadeOut}
          width={width}
          bottom={bottom + 32}
        >
          {MENU_ITEMS.map((item) => (
            <ItemContainer key={item.title}>
              <IconContainer>
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={24}
                  color='#fff'
                />
              </IconContainer>
              <Typography size='lg' weight='medium'>
                {item.title}
              </Typography>
            </ItemContainer>
          ))}
        </ItemsContainer>
      )}
      <AnimatedToggleContainer
        layout={LinearTransition}
        style={animatedIconContainer}
      >
        <ToggleButton
          activeOpacity={0.6}
          onPress={onToggle}
        >
          <Animated.View style={animatedItemContainer}>
            <Ionicons
              name='add-circle'
              size={32}
              color='#a1a1a1'
            />
          </Animated.View>
          {!isVisible && (
            <Typography size='md'>
              add item
            </Typography>
          )}
        </ToggleButton>
      </AnimatedToggleContainer>
    </AnimatedContainer>
  )
}

const AnimatedContainer = styled(Animated.View) <{
  bottom: number,
  isVisible: boolean
}>`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  bottom: ${(props) => `${props.bottom}px`};
  margin: ${(props) => props.isVisible ? '50px' : '30px'};
`

const ItemsContainer = styled(Animated.View) <{
  bottom: number,
  width: number
}>`
  gap: 30px;
  margin: -8px;
  margin-bottom: 30px;
  position: absolute;
  bottom: ${(props) => `${props.bottom}px`};
  width: ${(props) => `${props.width}px`};
`

const ItemContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

const IconContainer = styled(View)`
  padding: 12px;
  border-radius: 99px;
  background-color: #141517;
`

const AnimatedToggleContainer = styled(Animated.View)`
  justify-content: flex-start;
  align-items: flex-start;
`

const ToggleButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 8px
`
import Card from '@/components/Card'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

export default function Index() {
  return (
    <SafeAreaContainer>
      <HeaderContainer>
        <HeaderTitle>Expo Playground</HeaderTitle>
        <Ionicons
          name='person-circle'
          size={28}
          color='#a1a1a1'
        />
      </HeaderContainer>
      <HeaderDescription>
        A collection of mobile interactions I have gathered from Twitter & decided to implement in my free time
      </HeaderDescription>

      <BodyContainer>
        <Card
          title='Animated FlatList'
          description='Layout transition for input'
          route='/showcase/animated-flatlist'
        />
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

const HeaderTitle = styled(Text)`
  font-size:20px;
  font-family: Georgia;
`

const HeaderDescription = styled(Text)`
  font-size: 16px;
  margin-top: 24px;
  font-family: Georgia;
  text-align: center;
  line-height: 20px;
`

const BodyContainer = styled(View)`
  width: 100%;
  margin-top: 48px;
`
import Card from '@/components/Card'
import Typography from '@/components/Typography'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

export default function Index() {
  return (
    <SafeAreaContainer>
      <HeaderContainer>
        <Typography size='heading' weight='bold'>
          Expo Playground
        </Typography>
        <Ionicons
          name='person-circle'
          size={28}
          color='#a1a1a1'
        />
      </HeaderContainer>
      <Typography
        size='md'
        style={{ marginTop: 12, lineHeight: 20 }}
      >
        A collection of mobile interactions I have gathered from Twitter & decided to implement in my free time
      </Typography>

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

const BodyContainer = styled(View)`
  width: 100%;
  margin-top: 24px;
`
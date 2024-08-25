import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { Image, View } from 'react-native'
import Typography from '@/components/Typography'
import { useState } from 'react'
import BlurBackground from '@/components/expo-blur-menu/BlurBackground'
import AnimatedMenu from '@/components/expo-blur-menu/AnimatedMenu'

export default function ExpoBlurMenu() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <SafeAreaContainer>
      <Header title='Expo Blur Menu' />

      <BodyContainer>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/low-angle-shot-small-river-full-rocks-middle-forest_181624-5528.jpg'
          }}
          style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 4 }}
        />
        <Typography style={{ marginVertical: 20 }} weight='medium'>
          in the heart of nature lies a lush green forest, a haven of tranquility and beauty. the canopy overhead is a tapestry of vibrant greens, where sunlight filters through, casting dappled patterns on the forest floor.
        </Typography>
        <Typography weight='medium'>
          the air is fresh and crisp, filled with the scent of pine and earth, mingling with the sweet aroma of wildflowers in bloom. birds chirp melodiously, their songs harmonizing with the gentle rustle of leaves swayed by a light breeze.
        </Typography>
      </BodyContainer>

      <BlurBackground isBlur={isVisible} />
      <AnimatedMenu
        isVisible={isVisible}
        onToggle={() => setIsVisible(!isVisible)}
      />
    </SafeAreaContainer>
  )
}

const SafeAreaContainer = styled(SafeAreaView)`
  padding: 20px;
  flex: 1
`

const BodyContainer = styled(View)`
  margin-top: 24px;
  gap: 8px
`
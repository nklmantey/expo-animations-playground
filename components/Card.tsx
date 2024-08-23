import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export default function Card({
  title,
  description,
  route,
}: CardProps) {
  return (
    <Link href={route} asChild>
      <CardContainer activeOpacity={0.6}>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <Ionicons
          name='arrow-forward'
          size={20}
          color='#a1a1a1'
        />
      </CardContainer>
    </Link>
  )
}

const CardContainer = styled(TouchableOpacity)`
  width: 100%;
  border: 1px solid #d3d3d3;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CardContent = styled(View)`
  flex: 1;
  gap: 4px;
`

const CardTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
`

const CardDescription = styled(Text)`
  font-size: 14px;
`
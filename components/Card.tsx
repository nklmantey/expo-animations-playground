import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Typography from './Typography'

export default function Card({
  title,
  description,
  route,
}: CardProps) {
  return (
    <Link href={route} asChild>
      <CardContainer activeOpacity={0.6}>
        <CardContent>
          <Typography size='lg' weight='medium'>
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <Ionicons
          name='arrow-forward'
          size={24}
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CardContent = styled(View)`
  flex: 1;
  gap: 4px;
`
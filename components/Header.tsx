import { View } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Typography from './Typography'

export default function Header({ title }: HeaderProps) {
  return (
    <Link href='/'>
      <HeaderContainer>
        <Ionicons
          name='arrow-back'
          size={24}
          color='#a1a1a1'
        />
        <Typography size='lg' weight='medium'>
          {title}
        </Typography>
      </HeaderContainer>
    </Link>
  )
}

const HeaderContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 8px
`
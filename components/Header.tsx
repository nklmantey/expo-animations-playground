import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Header({ title }: HeaderProps) {
  return (
    <Link href='/'>
      <HeaderContainer>
        <Ionicons
          name='arrow-back'
          size={20}
          color='#a1a1a1'
        />
        <HeaderTitle>{title}</HeaderTitle>
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

const HeaderTitle = styled(Text)`
  font-size: 20px;
  font-family: Georgia;
`
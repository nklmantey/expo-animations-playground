import { Text } from 'react-native'
import styled from 'styled-components'

const sizes = {
  sm: '14px',
  md: '16px',
  lg: '18px',
  heading: '20px',
  heading2: '24px',
}

const weights = {
  regular: 'UberMoveRegular',
  medium: 'UberMoveMedium',
  bold: 'UberMoveBold',
}

export default function Typography({
  size = 'md',
  weight = 'regular',
  children,
  style,
}: TypographyProps) {
  return (
    <StyledText
      size={size}
      weight={weight}
      style={style}
    >
      {children}
    </StyledText>
  )
}

const StyledText = styled(Text) <{
  size: TypographyProps['size'],
  weight: TypographyProps['weight']
}>`
  font-size: ${(props) => sizes[props.size!]};
  font-family: ${(props) => weights[props.weight!]};
  flex-wrap: wrap;
`
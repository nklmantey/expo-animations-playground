type CardProps = {
  title: string
  description: string
  route: Href<string | object>
}

type HeaderProps = {
  title: string
}

type TypographyProps = {
  size?: 'sm' | 'md' | 'lg' | 'heading' | 'heading2'
  weight?: 'regular' | 'medium' | 'bold'
  children: ReactNode
  style?: ViewStyle
}
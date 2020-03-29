import { ImageSourcePropType } from 'react-native'

export interface Company {
  id: number
  name: string
  address: string
  phone: string
  whatsapp: string
  disponibility: string
  instagramUrl: string
  facebookUrl: string
  category: string
  tags: strings[]
  image: ImageSourcePropType
}

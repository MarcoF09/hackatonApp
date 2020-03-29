import { ImageSourcePropType } from 'react-native'

export interface ImageDetail {
  description: string
  image: ImageSourcePropType
}

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
  description: string
  email?: string
  type: string
  deliveryRange?: string
  deliveryZone?: string
  imagesDetail: ImageDetail[]
}

import React from 'react'
import { View, Text, ImageSourcePropType, ImageBackground } from 'react-native'
import { styles } from './styles'

export interface OuterProps {
  imageUri: ImageSourcePropType
  text: string
}

export const ImageItem = ({ imageUri, text }: OuterProps) => (
  <ImageBackground source={imageUri} style={styles.imageContainer}>
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  </ImageBackground>
)

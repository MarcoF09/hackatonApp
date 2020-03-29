import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'

export interface OuterProps {
  imageUri: any
  name: string
  onPress: () => void
  tags: string[]
}

export const Category = ({ imageUri, name, onPress, tags }: OuterProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageUri} style={styles.image} />
      </View>
      <View style={styles.categoryName}>
        <Text style={styles.boldText}>{name}</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.basicContainer}
      >
        <View style={styles.tagsContainer}>
          {tags.map((tag, index, array) => (
            <View>
              <Text style={styles.tagText}>
                {tag}
                {array.length - 1 > index ? ', ' : ''}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  </TouchableOpacity>
)

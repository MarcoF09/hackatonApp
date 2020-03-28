import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export interface OuterProps {
  imageUri: any
  name: string
  onPress: () => void
}

export const Category = ({ imageUri, name, onPress }: OuterProps) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{ flex: 1, resizeMode: 'cover' }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

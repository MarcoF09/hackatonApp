import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../scenes/Home/styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
  onPressRight: () => void
  styleRight?: StyleProp<TextStyle>
  titleRight: string
}

export const useNavigationItems = ({
  onPressRight,
  titleRight,
  styleRight,
}: Props) => {
  const navigation = useNavigation()

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={styles.rightContainer} onPress={onPressRight}>
        <Text style={[styles.right, styleRight]}>{titleRight}</Text>
      </TouchableOpacity>
    ),
  })
}

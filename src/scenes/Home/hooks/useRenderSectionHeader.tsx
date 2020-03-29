import React, { useCallback } from 'react'
import { SectionListData, Text, View } from 'react-native'
import { styles } from '../styles'

export interface InnerProps {
  renderSectionHeader: (info: { section: SectionListData<any> }) => any
}

export const useRenderSectionHeader = () => ({
  renderSectionHeader: useCallback(
    ({ section: { title } }) => (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
    ),
    [],
  ),
})

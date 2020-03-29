import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Separator } from '../../components/Separator'
import { styles } from './styles'

export const Help = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Ayuda</Text>
        </View>
        <Text style={styles.commonText}>
          En caso de necesitar ayuda por favor comunciarse a info@xmartlabs.com
        </Text>
      </View>
      <Separator />
    </SafeAreaView>
  )
}

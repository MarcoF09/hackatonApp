import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  boldText: {
    color: Palette.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    alignSelf: 'stretch',
    backgroundColor: Palette.background,
    flex: 1,
  },
  content: {
    backgroundColor: Palette.white,
    padding: 16,
  },
  commonText: {
    color: Palette.gray,
    fontSize: 14,
  },
  description: {
    color: Palette.gray,
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Palette.black,
    fontSize: 36,
    marginBottom: 8,
  },
})

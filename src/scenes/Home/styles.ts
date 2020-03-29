import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  categoryContainer: { flex: 1, backgroundColor: 'white', paddingTop: 20 },
  categoryTitle: { fontSize: 24, fontWeight: '700', paddingHorizontal: 20 },
  categoriesSubContainer: { height: 130, marginTop: 20 },
  container: {
    alignSelf: 'stretch',
    backgroundColor: Palette.background,
    flex: 1,
  },
  headerTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
  },
  right: {
    color: Palette.white,
    fontSize: 18,
  },
  rightContainer: {
    marginRight: 8,
  },
  imageContainer: { width: '100%', height: 150 },
})

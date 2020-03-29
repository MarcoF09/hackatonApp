import { Palette } from '../../style/Palette'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
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
  searchBarContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Palette.white,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Palette.black,
    shadowOpacity: 0.2,
    elevation: 1,
  },
  searchBarImage: { marginRight: 10, tintColor: Palette.black },
  searchTextInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: Palette.white,
  },
  imageContainer: { width: '100%', height: 150 },
})

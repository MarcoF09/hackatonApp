import { StyleSheet } from 'react-native'
import { Palette } from '../../style/Palette'

export const styles = StyleSheet.create({
  basicContainer: { flex: 1 },
  categoryName: { flex: 1, paddingLeft: 10, paddingTop: 10 },
  container: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: Palette.clearGray,
  },
  image: { flex: 1, resizeMode: 'cover', height: 130, width: 130 },
  imageContainer: { flex: 2 },
  textContainer: { flex: 1, paddingLeft: 10, paddingTop: 10 },
  tagsContainer: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 10,
  },
  tagContainer: {
    backgroundColor: Palette.gray,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  tagText: { color: Palette.white },
})

import React, { ReactElement, useCallback } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { Company } from '../../../types/company'
import { Category } from '../../../components/Category'

export interface InnerProps {
  renderFlatListItem: (item: ListRenderItemInfo<Company>) => ReactElement<any>
}

export const renderFlatListItem = (
  itemWrapper: ListRenderItemInfo<Company>,
  onPressItem: any,
) => (
  <Category
    imageUri={itemWrapper.item.image}
    name={itemWrapper.item.name}
    tags={itemWrapper.item.tags}
    onPress={onPressItem(itemWrapper.item)}
  />
)

export const useRenderItem = (onPressItem: any): InnerProps => ({
  renderFlatListItem: useCallback(
    (itemWrapper: ListRenderItemInfo<Company>) =>
      renderFlatListItem(itemWrapper, onPressItem),
    [],
  ),
})

import { SectionListData } from 'react-native'
import { Company } from '../../../types/company'
import { chain, zipObject } from 'lodash'
import { useCallback } from 'react'

interface InnerProps {
  getSections: () => { sections: SectionListData<any>[] }
}

export const groupByProp = (
  companies: Company[],
  route: string,
  props: string[],
): any =>
  chain(companies)
    .groupBy(route)
    .toPairs()
    .map(currentData => zipObject(props, currentData))
    .map(currentData => ({ ...currentData, data: [currentData.data] }))
    .value()

export const useSections = (companies: Company[]): InnerProps => ({
  getSections: useCallback(() => {
    const propsToPartition = ['title', 'data']
    const route = 'category'
    const sections = groupByProp(companies, route, propsToPartition)
    return {
      sections: sections as any[],
    }
  }, [companies]),
})

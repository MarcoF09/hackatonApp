import React, { useMemo } from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import { createSelector } from 'reselect'
import { Separator } from '../../components/Separator'
import { styles } from './styles'
import { DetailRow } from '../../components/DetailRow'
import { ImageItem } from '../../components/ImageItem'
import { useRoute } from '@react-navigation/native'
import { RootState } from '../../store'
import { Company } from '../../types/company'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

const makeCompaniesIdSelection = () =>
  createSelector<RootState, number, Company[], number, Company | undefined>(
    state => state.companies,
    (_state: RootState, companyId: number) => companyId,
    (companies, companyId) =>
      companies.find(company => company.id === companyId),
  )

export const Detail = () => {
  const { params } = useRoute<any>()

  const selectCompanyWithId = useMemo(makeCompaniesIdSelection, [])
  const company = useSelector<RootState, Company | undefined>(state =>
    selectCompanyWithId(state, params.companyId),
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {get(company, 'name', 'Nombre por defecto')}
          </Text>
        </View>
        <>
          <DetailRow
            leftText={get(company, 'address', 'Address por defecto')}
            rightText={get(company, 'disponibility', 'Address por defecto')}
          />
          <DetailRow
            leftText={get(company, 'phone', 'Phone por defecto')}
            rightText={'Instagram'}
            rightUrl={get(company, 'instagramUrl', 'https://instagram.com')}
          />
          <DetailRow
            leftText={get(company, 'whatsapp', 'Whatsapp por defecto')}
            rightText={'Facebook'}
            rightUrl={get(company, 'facebookUrl', 'https://facebook.com')}
          />
        </>
      </View>
      <Separator />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.description}>
            "{get(company, 'description', 'Descripcion')}"
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.boldText}>Productos del tipo: </Text>
          <Text style={styles.commonText}>
            {get(company, 'tags', []).length > 0
              ? get(company, 'tags', []).map(
                  (tag: string, index: number, array: string[]) => (
                    <>
                      <Text>{tag}</Text>
                      {array.length - 1 > index ? ', ' : ''}
                    </>
                  ),
                )
              : 'Sin tags'}
          </Text>
        </View>
        {get(company, 'type', 'small_business') === 'small_business' ? (
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>Rango de delivery: </Text>
            <Text style={styles.commonText}>
              {get(company, 'deliveryRange', 'no especificado')}
            </Text>
          </View>
        ) : (
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>Zona de delivery: </Text>
            <Text style={styles.commonText}>
              {get(company, 'deliveryZone', 'no especificado')}
            </Text>
          </View>
        )}
      </View>
      <Separator />
      <ScrollView scrollEventThrottle={16}>
        {company?.imagesDetail.map(image => (
          <ImageItem imageUri={image.image} text={image.description} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

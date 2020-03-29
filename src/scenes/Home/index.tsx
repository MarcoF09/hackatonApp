import React, { useCallback } from 'react'
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Image,
  SectionList,
  FlatList,
  TextInput,
} from 'react-native'
import { Route } from '../../navigation/Route'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useNavigationItems } from '../../hooks/useNavigationItems'
import { Company } from '../../types/company'
import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useRenderSectionHeader } from './hooks/useRenderSectionHeader'
import { useRenderItem } from './hooks/useRenderItem'
import { useSections } from './hooks/useSections'
import { Separator } from '../../components/Separator'
import searchImage from '../../assets/search.png'

const getCompanies = createSelector<RootState, Company[], Company[]>(
  state => state.companies,
  companies => companies,
)

export const Home = () => {
  const navigation = useNavigation()
  useNavigationItems({
    title: 'Inicio',
  })
  const onPressItem = useCallback(
    (company: Company) => () => {
      navigation.navigate(Route.DETAIL, {
        companyId: company.id,
      })
    },
    [navigation],
  )
  const companies = useSelector(getCompanies)
  const { renderSectionHeader } = useRenderSectionHeader()
  const { renderFlatListItem } = useRenderItem(onPressItem)
  const { getSections } = useSections(companies)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.searchBarContainer}>
          <Image source={searchImage} style={styles.searchBarImage} />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Buscar "
            placeholderTextColor="grey"
            style={styles.searchTextInput}
          />
        </View>
        <View>
          <ImageBackground
            source={require('../../assets/header.jpg')}
            style={styles.imageContainer}
          >
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>
                Productos únicos con un sabor diferente! ¡Apoye a los
                productores artesanales! ¡Unete a la communidad!
              </Text>
            </View>
          </ImageBackground>
        </View>
        <SectionList
          horizontal={false}
          renderItem={({ item }) => (
            <FlatList
              data={item}
              horizontal={true}
              renderItem={renderFlatListItem}
              showsHorizontalScrollIndicator={false}
            />
          )}
          renderSectionHeader={renderSectionHeader}
          ListEmptyComponent={<Separator />}
          ListHeaderComponent={<Separator />}
          sections={getSections().sections}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

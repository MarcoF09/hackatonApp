import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native'
import React, { useCallback } from 'react'
import { Route } from '../../navigation/Route'
import { styles } from './styles'
import { Todo } from '../../types/todo'
import { useNavigation } from '@react-navigation/native'
import { Category } from '../../components/Category'
import { useNavigationItems } from '../../hooks/useNavigationItems'

const mockItem = {
  id: 1,
  completed: false,
  title: 'todo',
  description: 'description',
}

const tags1 = ['jabones', 'shampoo']
const tags2 = ['congelados', 'postres', 'eventos']
const tags3 = ['tortas', 'dulces', 'saladitos']

// const getTodos = createSelector<RootState, Todo[], Todo[]>(
//   state => state.todos,
//   todos => todos,
// )

export const Home = () => {
  const navigation = useNavigation()
  useNavigationItems({
    title: 'Inicio',
  })
  const onPressItem = useCallback(
    (todo: Todo) => () => {
      navigation.navigate(Route.DETAIL, {
        todoId: todo.id,
      })
    },
    [navigation],
  )
  // const todos = useSelector(getTodos)

  // const renderItem = ({ item }: ListRenderItemInfo<Todo>) => (
  //   <TodoItem {...item} onPress={onPressItem(item)} />
  // )
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16}>
        <View>
          <ImageBackground
            source={require('../../assets/home.jpg')}
            style={styles.imageContainer}
          >
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Feria artesanal online</Text>
              <Text style={styles.headerText}>
                Compre productos con historias
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Comidas</Text>

          <View style={styles.categoriesSubContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={require('../../assets/home.jpg')}
                name="Home"
                tags={tags1}
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/experiences.jpg')}
                name="Experiences"
                tags={tags2}
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/restaurant.jpg')}
                name="Resturant"
                tags={tags3}
                onPress={onPressItem(mockItem)}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Cuidado Personal</Text>

          <View style={styles.categoriesSubContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={require('../../assets/home.jpg')}
                name="Home"
                tags={tags1}
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/experiences.jpg')}
                name="Experiences"
                tags={tags2}
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/restaurant.jpg')}
                name="Resturant"
                tags={tags3}
                onPress={onPressItem(mockItem)}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Otros negocios</Text>

          <View style={styles.categoriesSubContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={require('../../assets/home.jpg')}
                name="Home"
                tags={tags1}
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/experiences.jpg')}
                name="Experiences"
                tags={tags2}
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/restaurant.jpg')}
                name="Resturant"
                tags={tags3}
                onPress={onPressItem(mockItem)}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

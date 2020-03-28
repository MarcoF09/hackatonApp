import {
  Text,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native'
import React, { useCallback } from 'react'
import { createSelector } from 'reselect'
import { ListFooter } from './ListFooter'
import { RootState } from 'src/store'
import { Route } from '../../navigation/Route'
import { Separator } from '../../components/Separator'
import { styles } from './styles'
import { Todo } from '../../types/todo'
import { TodoItem } from './TodoItem'
import { useNavigation } from '@react-navigation/native'
import { useNavigationItems } from '../../hooks/useNavigationItems'
import { useSelector } from 'react-redux'
import { Category } from '../../components/Category'

const mockItem = {
  id: 1,
  completed: false,
  title: 'todo',
  description: 'description',
}

const getTodos = createSelector<RootState, Todo[], Todo[]>(
  state => state.todos,
  todos => todos,
)

export const Home = () => {
  const navigation = useNavigation()
  useNavigationItems({
    onPressRight: () => navigation.navigate(Route.NEW_TODO),
    styleRight: {
      fontSize: 30,
    },
    titleRight: '+',
  })
  const onPressItem = useCallback(
    (todo: Todo) => () => {
      navigation.navigate(Route.DETAIL, {
        todoId: todo.id,
      })
    },
    [navigation],
  )
  const todos = useSelector(getTodos)

  const renderItem = ({ item }: ListRenderItemInfo<Todo>) => (
    <TodoItem {...item} onPress={onPressItem(item)} />
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        testID="TODO_LIST"
      /> */}
      {/* <ListFooter /> */}
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text
            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}
          >
            Comidas
          </Text>

          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={require('../../assets/home.jpg')}
                name="Home"
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/experiences.jpg')}
                name="Experiences"
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/restaurant.jpg')}
                name="Resturant"
                onPress={onPressItem(mockItem)}
              />
            </ScrollView>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text
            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}
          >
            Cuidado Personal
          </Text>

          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={require('../../assets/home.jpg')}
                name="Home"
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/experiences.jpg')}
                name="Experiences"
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/restaurant.jpg')}
                name="Resturant"
                onPress={onPressItem(mockItem)}
              />
            </ScrollView>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text
            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}
          >
            Otros negocios
          </Text>

          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={require('../../assets/home.jpg')}
                name="Home"
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/experiences.jpg')}
                name="Experiences"
                onPress={onPressItem(mockItem)}
              />
              <Category
                imageUri={require('../../assets/restaurant.jpg')}
                name="Resturant"
                onPress={onPressItem(mockItem)}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

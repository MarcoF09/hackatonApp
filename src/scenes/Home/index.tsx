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

// const getTodos = createSelector<RootState, Todo[], Todo[]>(
//   state => state.todos,
//   todos => todos,
// )

export const Home = () => {
  const navigation = useNavigation()
  useNavigationItems({
    // onPressRight: () => navigation.navigate(Route.NEW_TODO),
    // styleRight: {
    //   fontSize: 30,
    //   color: Palette.black,
    // },
    // titleRight: '+',
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
            style={{ width: '100%', height: 150 }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                  color: 'white',
                }}
              >
                Feria artesanal online
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Compre productos con historias
              </Text>
            </View>
          </ImageBackground>
        </View>
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

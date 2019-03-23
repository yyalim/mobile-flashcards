import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import DeckListScreen from '../DeckListScreen'
import NewDeckScreen from '../NewDeckScreen'
import DeckScreen from '../DeckScreen'

const TabNavigator = createMaterialTopTabNavigator({
  DeckListScreen: {
    screen: DeckListScreen,
    navigationOptions: {
      title: 'Decks'
    }
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
    navigationOptions: {
      title: 'Add Deck'
    }
  }
}, {
  navigationOptions: {
    header: null
  }
})

const StackNavigator = createStackNavigator({
  HomeScreen: {
    screen: TabNavigator
  },
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  }
})

export default createAppContainer(StackNavigator)
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import DeckListScreen from '../DeckListScreen'
import NewDeckScreen from '../NewDeckScreen'

const TabNavigator = createMaterialTopTabNavigator({
  DeckListPage: {
    screen: DeckListScreen,
    navigationOptions: {
      title: 'Decks'
    }
  },
  NewDeckPage: {
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
  Home: {
    screen: TabNavigator
  },
})

export default createAppContainer(StackNavigator)
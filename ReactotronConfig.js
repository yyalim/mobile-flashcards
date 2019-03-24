import Reactotron from 'reactotron-react-native'
import { _removeDecks } from './utils/api'
import { reactotronRedux } from 'reactotron-redux'

const customCommands = (tron, payload) => {
  switch(payload) {
    case 'removeDecks':
      tron.display({ name: 'AsyncStorage', preview: 'Removing Decks...' })
      _removeDecks()
    case 'removeCards':
      tron.display({ name: 'AsyncStorage', preview: 'Removing Cards...' })
      _removeCards()
    default:
      return false
  }
}

const reactotron = Reactotron
  .configure({ host: '192.168.1.35', port: 9090 }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(tron => ({
    onCommand({ type, payload }) {
      type === 'custom' && customCommands(tron, payload)
    }
  }))
  .connect() // let's connect!

export default reactotron
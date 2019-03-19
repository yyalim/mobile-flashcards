import { AsyncStorage } from 'react-native'

const APP_NAME = 'mobile-flashcards'
const DECK_STORAGE_KEY = `${APP_NAME}:DECKS`

const generateUID = () => {
  const rndStr = () => Math.random().toString(36).substring(2, 15)
  return rndStr() + rndStr()
}

export const formatDeck = title => {
  const id = generateUID()
  return {
    [id]: {
      id,
      title,
      quetions: []
    }
  }
}

export const _createDeck = deck => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
}
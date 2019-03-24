import { AsyncStorage } from 'react-native'

const APP_NAME = 'mobile-flashcards'
const DECK_STORAGE_KEY = `${APP_NAME}:DECKS`

const generateUID = () => {
  const rndStr = () => Math.random().toString(36).substring(2, 15)
  return rndStr() + rndStr()
}

const formatDeck = title => {
  const id = generateUID()
  return {
    [id]: {
      id,
      title,
      cards: []
    }
  }
}

export const _createDeck = deckTitle => {
  const deck = formatDeck(deckTitle)

  return AsyncStorage
    .mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
    .then(() => deck)
}

export const _receiveDecks = () => (
  AsyncStorage
    .getItem(DECK_STORAGE_KEY)
    .then(decks => JSON.parse(decks))
)

export const _removeDeck = deckId => (
  AsyncStorage
    .getItem(DECK_STORAGE_KEY)
    .then(decks => JSON.parse(decks))
    .then(decks => {
      const { [deckId]: deck, ...rest } = decks

      return rest
    })
    .then(decks => (
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    ))
    .then(() => deckId)
)

export const _removeDecks = () => {
  AsyncStorage.removeItem(DECK_STORAGE_KEY)
}
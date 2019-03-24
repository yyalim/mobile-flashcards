import { AsyncStorage } from 'react-native'

const APP_NAME = 'mobile-flashcards'
const DECK_STORAGE_KEY = `${APP_NAME}:DECKS`
const CARD_STORAGE_KEY = `${APP_NAME}:CARDS`

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

const formatCard = ({ question, answer, deck }) => {
  const id = generateUID()

  return  {
    [id]: {
      id,
      question,
      answer,
      deckId: deck.id
    }
  }
}

export const _createDeck = deckTitle => {
  const deck = formatDeck(deckTitle)

  return AsyncStorage
    .mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
    .then(() => deck)
}

export const _updateDeck = deck => (
  AsyncStorage
    .getItem(DECK_STORAGE_KEY)
    .then(decks => JSON.parse(decks))
    .then(decks => ({ ...decks, [deck.id]: deck }))
    .then(decks => AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks)))
)

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

export const _createCard = ({ question, answer, deck }) => {
  const card = formatCard({question, answer, deck })
  const cardId = Object.keys(card)[0]
  deck.cards = [...deck.cards, cardId]

  return AsyncStorage
    .mergeItem(CARD_STORAGE_KEY, JSON.stringify(card))
    .then(() => _updateDeck(deck))
    .then(() => ({ card, deck }))
}

export const _receiveCards = () => (
  AsyncStorage
    .getItem(CARD_STORAGE_KEY)
    .then(cards => JSON.parse(cards))
)

export const _removeCards = () => {
  AsyncStorage.removeItem(CARD_STORAGE_KEY)
}
import { _createDeck, _receiveDecks, _removeDeck } from '../utils/api'

export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'
export const UPDATE_DECK = 'UPDATE_DECK'

const createDeck = deck => ({
  type: CREATE_DECK,
  deck
})

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

const removeDeck = id => ({
  type: REMOVE_DECK,
  id
})

export const updateDeck = deck => ({
  type: UPDATE_DECK,
  deck
})

export const handleCreateDeck = deckTitle => dispatch => (
  _createDeck(deckTitle)
    .then(deck => dispatch(createDeck(deck)))
)

export const handleRemoveDeck = id => dispatch => (
  _removeDeck(id)
    .then(id => dispatch(removeDeck(id)))
)

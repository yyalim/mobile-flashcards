import { _createDeck, _receiveDecks, _removeDeck } from '../utils/api'

export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'

const createDeck = deck => ({
  type: CREATE_DECK,
  deck
})

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

const removeDeck = id => ({
  type: REMOVE_DECK,
  id
})

export const handleCreateDeck = deckTitle => dispatch => (
  _createDeck(deckTitle)
    .then(deck => dispatch(createDeck(deck)))
)

export const handleReceiveDecks = () => dispatch => (
  _receiveDecks()
    .then(decks => dispatch(receiveDecks(decks)))
)

export const handleRemoveDeck = id => dispatch => (
  _removeDeck(id)
    .then(id => dispatch(removeDeck(id)))
)

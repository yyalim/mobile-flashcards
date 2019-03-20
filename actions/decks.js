import { _createDeck, _receiveDecks } from '../utils/api'

export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

const createDeck = deck => ({
  type: CREATE_DECK,
  deck
})

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

export const handleCreateDeck = deckTitle => dispatch => (
  _createDeck(deckTitle)
    .then(deck => dispatch(createDeck(deck)))
)

export const handleReceiveDecks = () => dispatch => (
  _receiveDecks()
    .then(decks => dispatch(receiveDecks(decks)))
)

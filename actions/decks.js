import { formatDeck, _createDeck } from '../utils/api'

export const CREATE_DECK = 'CREATE_DECK'

const createDeck = deck => ({
  type: CREATE_DECK,
  deck
})

export const handleCreateDeck = deckTitle => dispatch => {
  const deck = formatDeck(deckTitle)

  return _createDeck(deck)
    .then(() => dispatch(createDeck(deck)))
}
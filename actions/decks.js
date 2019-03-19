export const CREATE_DECK = 'CREATE_DECK'

const createDeck = deck => ({
  type: CREATE_DECK,
  deck
})

export const handleCreateDeck = deck => dispatch => (
  dispatch(createDeck(deck))
)
export const CREATE_CARD = 'CREATE_CARD'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'

export const createCard = card => ({
  type: CREATE_CARD,
  card
})

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
})

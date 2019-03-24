import { CREATE_CARD, RECEIVE_CARDS } from '../actions/cards'

const cards = (state = {}, action) => {
  switch(action.type) {
    case CREATE_CARD:
      return {
        ...state,
        ...action.card
      }
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards
      }
    default:
      return state
  }
}

export default cards

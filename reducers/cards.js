import { CREATE_CARDS, RECEIVE_CARDS } from '../actions/cards'

const cards = (state, action) => {
  switch(action.type) {
    case CREATE_CARDS:
      return {
        ...state,
        ...action.question
      }
    case RECEIVE_CARDS:
      return {
        ...state,
        ...actions.cards
      }
    default:
      return state
  }
}

export default cards

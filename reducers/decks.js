import { CREATE_DECK, RECEIVE_DECKS } from '../actions/decks'

const decks = (state = {}, action) => {
  switch(action.type) {
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
  }
  return state
}

export default decks
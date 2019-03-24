import {
  CREATE_DECK,
  RECEIVE_DECKS,
  REMOVE_DECK
} from '../actions/decks'

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
    case REMOVE_DECK:
      const { [action.id]: deck, ...rest} = state
      return rest
  }
  return state
}

export default decks
import { CREATE_DECK } from '../actions/decks'

const decks = (state = {}, action) => {
  switch(action.type) {
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck
      }
  }
  return state
}

export default decks
import { CREATE_DECK } from '../actions/decks'

const decks = (state = {}, action) => {
  switch(action.type) {
    case CREATE_DECK:
      const { deck } = action
      return {
        ...state,
        [deck.title]: deck
      }
  }
  return state
}

export default decks
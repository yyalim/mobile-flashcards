import { _createCard, _receiveCards, _receiveDecks } from '../utils/api'
import { updateDeck, receiveDecks } from './decks'
import { createCard, receiveCards } from './cards'

export const handleCreateCard = ({ question, answer, deck }) => dispatch => (
  _createCard({ question, answer, deck })
    .then(({ card, deck }) => {
      dispatch(updateDeck(deck))
      dispatch(createCard(card))
    })
)

export const handleInitialLoad = () => dispatch => (
  Promise.all([_receiveDecks(), _receiveCards()])
    .then(([decks, cards]) => {
      dispatch(receiveDecks(decks))
      dispatch(receiveCards(cards))
    })
)
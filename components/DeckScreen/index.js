import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'
import { gray, red } from '../../utils/colors'
import { handleRemoveDeck } from '../../actions/decks'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleArea: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  cardsCount: {
    color: gray,
    textAlign: 'center'
  },
  buttonActions: {
    flex: 1,
    width: 300,
    justifyContent: 'space-around',
    margin: 100
  },
  deleteText: {
    color: red,
    textAlign: 'center'
  }
})

class DeckScreen extends Component {
  handleNavigateToNewCard = () => {
    const { deck, navigation } = this.props
    navigation.navigate('NewCardScreen', {
      deck
    })
  }

  handleNavigateToNewQuiz = () => {
    const { deck, navigation } = this.props

    navigation.navigate('QuizScreen', { deck })
  }

  handleDeleteDeck = () => {
    const { deck, handleRemoveDeck, navigation } = this.props

    handleRemoveDeck(deck.id)
      .then(() => navigation.navigate('HomeScreen'))
  }

  render() {
    const { deck } = this.props
    const title = deck ? deck.title : ''
    const cards = deck ? deck.cards : []
    const cardsCount = cards.length

    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cardsCount}>{cardsCount} cards</Text>
        </View>
        <View style={styles.buttonActions}>
          <Button
            title="Add Card"
            onPress={this.handleNavigateToNewCard}
          />
          <Button
            title="Start Quiz"
            onPress={this.handleNavigateToNewQuiz}
          />
          <TouchableOpacity
            onPress={this.handleDeleteDeck}
          >
            <Text style={styles.deleteText}>
              Delete Deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, ownProps) => ({
  deck: decks[ownProps.navigation.state.params.id],
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRemoveDeck: id => dispatch(handleRemoveDeck(id)),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen)
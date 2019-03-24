import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native'
import { gray, green, red } from '../../utils/colors'

import EmptyQuiz from './EmptyQuiz'
import Result from './Result'
import Card from './Card'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    height: 100,
    justifyContent: 'space-around',
    margin: 100,
    marginTop: 50,
    marginBottom: 0
  },
  counter: {
    color: gray,
    fontSize: 22
  }
})
class QuizScreen extends Component {
  state = {
    currentQuestion: 0,
    correct: 0,
    incorrect: 0
  }

  handleCorrectAnswer = () => {
    this.setState(prevState => ({
      correct: prevState.correct + 1,
      currentQuestion: prevState.currentQuestion + 1
    }))
  }

  handleIncorrectAnswer = () => {
    this.setState(prevState => ({
      incorrect: prevState.incorrect + 1,
      currentQuestion: prevState.currentQuestion + 1
    }))
  }

  restart = () => {
    this.setState({
      currentQuestion: 0,
      correct: 0,
      incorrect: 0
    })
  }

  backToDeck = () => {
    const { deck, navigation } = this.props
    navigation.navigate('DeckScreen', { id: deck.id })
  }

  render() {
    const { cardCount, quizCards } = this.props
    const { currentQuestion, correct, incorrect } = this.state
    const card = quizCards[currentQuestion]

    if(cardCount === 0) {
      return <EmptyQuiz
        correct={correct}
        incorrect={incorrect}
        restart={this.restart}
        backToDeck={this.backToDeck}
      />
    }

    if(cardCount === currentQuestion) {
      return <Result
        correct={correct}
        incorrect={incorrect}
        restart={this.restart}
        backToDeck={this.backToDeck}
      />
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.counter}>
            {cardCount} / {currentQuestion + 1}
          </Text>
        </View>
        <Card card={card} />
        <View style={styles.buttonContainer}>
          <Button
            title="Correct"
            onPress={this.handleCorrectAnswer}
            color={green}
          />
          <Button
            title="Incorret"
            onPress={this.handleIncorrectAnswer}
            color={red}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ cards }, ownProps) => {
  const { deck } = ownProps.navigation.state.params
  const quizCards = deck.cards.map(cardId => cards[cardId] ).filter(card => card)
  const cardCount = quizCards.length

  return {
    deck,
    quizCards,
    cardCount,
    ...ownProps
  }
}


export default connect(mapStateToProps)(QuizScreen)
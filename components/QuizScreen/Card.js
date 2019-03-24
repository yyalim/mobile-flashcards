import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Question from './Question'
import Answer from './Answer'
import { red } from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  card: {
    borderRadius: 10,
    margin: 30,
    marginBottom: 5
  },
  toggleText: {
    padding: 10,
    color: red
  }
})

class Card extends Component {
  state = {
    showAnswer: false
  }

  toggleShowAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer
    }))
  }

  render() {
    const { card } = this.props
    const { showAnswer } = this.state
    const { toggleShowAnswer } = this
    const { question, answer } = card

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          { showAnswer
              ? <Answer answer={answer} />
              : <Question question={question} />
          }
        </View>

        <TouchableOpacity
          onPress={toggleShowAnswer}
        >
          { showAnswer
              ? <Text style={styles.toggleText}>Question</Text>
              : <Text style={styles.toggleText}>Answer</Text>
          }
        </TouchableOpacity>
      </View>
    )

  }
}

export default Card
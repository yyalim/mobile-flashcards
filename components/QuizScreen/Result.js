import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, green, red } from '../../utils/colors'
import {
  clearLocalNotification,
  setLocalNotification
} from '../../utils/notifications'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 5
  },
  correct: {
    fontSize: 20,
    color: green,
    margin: 5
  },
  incorrect: {
    fontSize: 20,
    color: red,
    margin: 5,
    marginBottom: 30
  },
  redirect: {
    margin: 5,
    color: gray
  }
})

class Result extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  onRestart = () => { this.props.restart() }
  onBackToDeck = () => { this.props.backToDeck() }

  render() {
    const { correct, incorrect } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.correct}>Correct: {correct}</Text>
        <Text style={styles.incorrect}>Correct: {incorrect}</Text>
        <TouchableOpacity onPress={this.onRestart}>
          <Text style={styles.redirect}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onBackToDeck}>
          <Text style={styles.redirect}>Back To Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Result
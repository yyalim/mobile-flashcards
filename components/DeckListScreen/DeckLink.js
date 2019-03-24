import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { gray } from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  cardsCount: {
    color: gray,
    textAlign: 'center'
  }
})

class DeckLink extends Component {
  handlePress = () => {
    const { deck, handleNavigation } = this.props

    handleNavigation(deck)
  }

  render() {
    const { title, cards } = this.props.deck
    const cardsCount = cards.length

    return (
      <View style={styles.container}>
        <TouchableOpacity
         onPress={this.handlePress}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cardsCount}>{cardsCount} Cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckLink
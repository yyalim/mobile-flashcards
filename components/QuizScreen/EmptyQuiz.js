import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    margin: 50
  }
})

const EmptyQuiz = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Sorry, you cannot take a quiz because there are no cards in the deck.
    </Text>
  </View>
)

export default EmptyQuiz
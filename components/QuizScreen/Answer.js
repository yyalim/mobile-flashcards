import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { white, purple } from '../../utils/colors'

const styles = StyleSheet.create({
  answer: {
    backgroundColor: purple,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 22,
    color: white
  }
})

const Answer = ({ answer }) => (
  <View style={styles.answer}>
    <Text style={styles.text}>{answer}</Text>
  </View>
)

export default Answer
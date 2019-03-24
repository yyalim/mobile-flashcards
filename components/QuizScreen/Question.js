import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, blue } from '../../utils/colors'

const styles = StyleSheet.create({
  question: {
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 22,
    color: white
  }
})

const Question = ({ question }) => (
  <View style={styles.question}>
    <Text style={styles.text}>{question}</Text>
  </View>
)

export default Question
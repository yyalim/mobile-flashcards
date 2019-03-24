import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet,
 KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { handleCreateCard } from '../../actions/shared'
import { gray } from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    margin: 10,
    fontSize: 16
  },
  textInput: {
    borderColor: gray,
    borderWidth: 1,
    marginTop: 0,
    margin: 30,
    padding: 3,
    width: 300
  },
})


class NewCardScreen extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleChangeQuestion = question => {
    this.setState({ question })
  }

  handleChangeAnswer = answer => {
    this.setState({ answer })
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { navigation, handleCreateCard} = this.props
    const deck = navigation.state.params.deck

    handleCreateCard({ deck, question, answer })
      .then(() => navigation.navigate('DeckScreen', { id: deck.id }))
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        style={styles.container}
      >
        <Text style={{margin: 60, textAlign: 'center', fontSize: 30}}>
          New Card
        </Text>
        <Text style={styles.label}>
          Question
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleChangeQuestion}
          value={this.state.question}
        />
        <Text style={styles.label}>
          Answer
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleChangeAnswer}
          value={this.state.answer}
        />
        <View style={{ padding: 50, paddingTop: 0}}>
          <Button
            title="Create Deck"
            onPress={this.handleSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapDistpatchToProps = (dispath, ownProps) => ({
  handleCreateCard: ({ question, answer, deck }) => (
    dispath(handleCreateCard({ question, answer, deck }))
  ),
  ...ownProps
})

export default connect(null, mapDistpatchToProps)(NewCardScreen)
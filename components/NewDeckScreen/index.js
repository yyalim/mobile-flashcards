import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { handleCreateDeck } from '../../actions/decks'

import { gray } from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    margin: 30,
    textAlign: 'center',
    fontSize: 24
  },
  textInput: {
    borderColor: gray,
    borderWidth: 1,
    marginTop: 0,
    margin: 30,
    padding: 3,
    width: 300
  }
})

class DeckListScreen extends Component {
  state = {
    deckTitle: ''
  }

  handleChangeText = deckTitle => {
    this.setState({ deckTitle })
  }

  handleSubmit = () => {
    const { deckTitle } = this.state
    const { handleCreateDeck, navigation } = this.props

    handleCreateDeck(deckTitle)
      .then(action => {
        const { deck } = action
        const id = Object.keys(deck)[0]
        const { title } = deck[id]

        navigation.navigate('DeckScreen', {
          id, title
        })
      } )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.label}
        >
          What is the title of our new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleChangeText}
          value={this.state.deckTitle}
        />
        <Button
          title="Create Deck"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleCreateDeck: (deckTitle) => dispatch(handleCreateDeck(deckTitle)),
  ...ownProps
})

export default connect(null, mapDispatchToProps)(DeckListScreen)

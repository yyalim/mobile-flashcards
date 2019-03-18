import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native'

import { gray, blue, white } from '../../utils/colors'

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
    deckName: ''
  }

  handleChangeText = deckName => {
    this.setState({ deckName })
  }

  handleSubmit = () => {
    console.log(this.state.deckName)
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
          value={this.state.deckName}
        />
        <Button
          title="Create Deck"
          onPress={this.onPress}
        />
      </View>
    )
  }
}

export default DeckListScreen

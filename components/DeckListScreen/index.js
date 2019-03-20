import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { handleReceiveDecks } from '../../actions/decks'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class DeckListScreen extends Component {
  componentDidMount() {
    this.props.handleReceiveDecks()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DeckListScreen</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, ownProps) => ({
  decks,
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleReceiveDecks: () => dispatch(handleReceiveDecks()),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native'

import { handleInitialLoad } from '../../actions/shared'

import DeckLink from './DeckLink'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

class DeckListScreen extends Component {
  componentDidMount() {
    this.props.handleInitialLoad()
  }

  handleNavigation = (deck) => {
    const { id, title } = deck

    this.props.navigation.navigate('DeckScreen', {
      id, title
    })
  }

  keyExtractor = item => item.id

  renderItem = item => <DeckLink
    deck={item.item}
    handleNavigation={this.handleNavigation}
  />

  render() {
    const { decks } = this.props
    const { keyExtractor, renderItem } = this

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, ownProps) => ({
  decks: Object.keys(decks).map(id => decks[id]),
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleInitialLoad: () => dispatch(handleInitialLoad()),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen)

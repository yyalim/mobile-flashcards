import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DeckListPage from './components/DeckListPage'
import NewDeckPage from './components/NewDeckPage'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <DeckListPage />
        <NewDeckPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

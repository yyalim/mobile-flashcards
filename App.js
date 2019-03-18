if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'
import AppNavigation from './components/AppNavigation'
import { blue } from './utils/colors'
import { Constants } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: blue,
    height: Constants.statusBarHeight
  }
})

const AppStatusBar = props => (
  <View style={styles.statusBar}>
    <StatusBar translucent backgroundColor={styles.statusBar.backgroundColor} />
  </View>
)

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <AppNavigation />
      </View>
    );

  }
}

export default App

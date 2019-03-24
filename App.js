if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import { View } from 'react-native'
import AppNavigation from './components/AppNavigation'
import AppStatusBar from './components/Shared/AppStatusBar'
import { setLocalNotification } from './utils/notifications'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar />
          <AppNavigation />
        </View>
      </Provider>
    )
  }
}

export default App

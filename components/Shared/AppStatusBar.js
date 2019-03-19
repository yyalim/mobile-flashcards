import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { blue } from '../../utils/colors'
import { Constants } from 'expo'

const styles = StyleSheet.create({
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

export default AppStatusBar